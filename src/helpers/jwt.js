import jwt from 'jsonwebtoken';

export const signToken = (data) => jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '24h' });

export const verify = () => {

};
