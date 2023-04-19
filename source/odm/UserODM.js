import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

import { generateHashById, phoneNumberRegExp, urlRegExp } from '../utils';

const urlValidateObj = {
  validator: function (v) {
    return urlRegExp.test(v);
  },
  message: props => `${props.value} is not a valid URL!`,
};

const userSchema = new mongoose.Schema(
  {
    name: {
      first: { type: String, index: true, min: 2, max: 15 },
      last: { type: String, index: true, min: 2, max: 15 },
    },
    phones: [
      {
        phone: {
          type: String,
          required: true,
          validate: {
            validator: function (v) {
              return phoneNumberRegExp.test(v);
            },
            message: props => `${props.value} is not a valid mobile phone number!`,
          },
        },
        primary: { type: Boolean, default: false },
      },
    ],
    emails: [
      {
        email: { type: String, unique: true },
        primary: { type: Boolean },
      },
    ],
    password: { type: String, min: 6, max: 30 },
    sex: { type: String, enum: ['m', 'f'] },
    roles: { type: [{ type: String, enum: ['teacher', 'student'], unique: true }] },
    social: {
      facebook: { type: String, validate: urlValidateObj },
      linkedin: { type: String, validate: urlValidateObj },
      github: { type: String, validate: urlValidateObj },
      skype: { type: String, validate: urlValidateObj },
    },
    notes: { type: String, max: 250 },
    hash: { type: String, unique: true },
    disabled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

userSchema.index({ notes: 'text' });

userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;

    const hash = await generateHashById(this._id.toString());
    this.hash = hash;

    return next();
  } catch (e) {
    next(e);
  }
});

const UserODM = mongoose.model('User', userSchema);

export { UserODM };
