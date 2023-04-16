import bcrypt from 'bcryptjs';

export const generateHashById = async id => {
  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(id, salt);

  return hash;
};
