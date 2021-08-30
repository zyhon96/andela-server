import Joi from 'joi';
import joiValidator from '../helpers/joi';
import { respondWithWarning } from '../helpers/responseHandler';

export const validateSignup = async (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const error = await joiValidator(req.body, schema);
  if (!error) return next();
  return respondWithWarning(res, 400, error);
};

export const validateLogin = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const error = await joiValidator(req.body, schema);
  if (!error) return next();
  return respondWithWarning(res, 400, error);
};
