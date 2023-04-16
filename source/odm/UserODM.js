import mongoose from 'mongoose';

import { generateHashById } from '../utils';

const userSchema = new mongoose.Schema(
  {
    name: {
      first: { type: String, index: true },
      last: { type: String, index: true },
    },
    phones: [
      {
        phone: { type: String },
        primary: { type: Boolean },
      },
    ],
    emails: [
      {
        email: { type: String, unique: true },
        primary: { type: Boolean },
      },
    ],
    password: { type: String },
    sex: { type: String },
    roles: { type: [String] },
    social: {
      facebook: { type: String },
      linkedin: { type: String },
      github: { type: String },
      skype: { type: String },
    },
    notes: { type: String },
    hash: { type: String, unique: true },
    disabled: { type: Boolean },
  },
  { timestamps: true }
);

userSchema.index({ notes: 'text' });

userSchema.pre('save', async function (next) {
  try {
    const hash = await generateHashById(this._id.toString());

    this.hash = hash;

    return next();
  } catch (e) {
    next(e);
  }
});

const UserODM = mongoose.model('User', userSchema);

export { UserODM };
