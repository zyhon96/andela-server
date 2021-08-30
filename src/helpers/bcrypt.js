import { hash, compare } from 'bcrypt';

export const hashPlainText = async (plainText) => hash(plainText, 10);

export const compareHash = async (plainText, hashedText) => compare(plainText, hashedText);
