import { Router } from 'express';
import { signup, login } from './controllers/auth.controller';
import { validateLogin, validateSignup } from './middlewares/authValidation';

const auth = Router();

auth.post('/signup', validateSignup, signup);
auth.post('/login', validateLogin, login);

export default auth;