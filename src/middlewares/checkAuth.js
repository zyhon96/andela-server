/* eslint-disable import/prefer-default-export */
/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import { respondWithWarning } from '../helpers/responseHandler';

export const checkAuth = async (req, res, next) => {
  let token = req.headers.authorization;
  if (token && token.startsWith('Bearer')) {
    token = token.split(' ')[1];
  }
  if (!token) return respondWithWarning(res, 401, 'please provide a token');

  try {
    const verify = await jwt.verify(token, process.env.TOKEN_SECRET);
    if (!verify) return respondWithWarning(res, 401, 'unauthenticated');
    req.auth = verify;
    return next();
  } catch (error) {
    return respondWithWarning(res, 401, error.message);
  }
};
