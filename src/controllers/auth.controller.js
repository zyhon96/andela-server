import { respondWithSuccess, respondWithWarning } from '../helpers/responseHandler';
import { signToken } from '../helpers/jwt';
import userData from '../database/index';
import { compareHash, hashPlainText } from '../helpers/bcrypt';

export const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userExist = userData.find((i) => i.email === email);
    if (userExist) return respondWithWarning(res, 409, 'a user with the email already exist');

    const hashedPassword = await hashPlainText(password);
    const newUser = {
      id: userData.length + 1,
      ...req.body,
      password: hashedPassword,
    };
    userData.push(newUser);
    const token = signToken(newUser);

    return res.status(200).send({
      message: 'account created successfully',
      data: { ...newUser, token },

    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { password: plainPassword, email } = req.body;

    const user = userData.find((i) => i.email === email);
    if (!user) return respondWithWarning(res, 401, 'invalid email or password combination');
    const { password } = user;
    const match = await compareHash(plainPassword, password);
    if (!match) return respondWithWarning(res, 401, 'invalid email or password combination');

    const token = signToken(user);
    return res.status(200).send({
      message: 'login successful',
      data: { ...user, token },

    });
  } catch (error) {
    next(error);
  }
};
