import { Router } from 'express';
import { createCar } from './controllers/car';
import { checkAuth } from './middlewares/checkAuth';

const car = Router();

car.post('/', checkAuth, createCar);

export default car;
