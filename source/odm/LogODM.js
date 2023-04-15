import mongoose from 'mongoose';

const logSchema = new mongoose.Schema(
  {
    method: { type: String },
    path: { type: String },
    payload: { type: Object },
    agent: { type: String },
  },
  {
    timestamps: { updatedAt: false },
    capped: {
      size: 50000000, //50MB
      max: 50000,
    },
  }
);

const LogODM = mongoose.model('Log', logSchema);

export { LogODM };
