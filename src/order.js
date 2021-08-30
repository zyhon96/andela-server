import { Router } from 'express';
import { createOrder } from './controllers/order';
import { checkAuth } from './middlewares/checkAuth';

const order = Router();

order.post('/', checkAuth, createOrder);

export default order;
