import { Router } from 'express';
import auth from '../auth';
import car from '../car';
import order from '../order';

const apiRouter = Router();

apiRouter.use('/api/v1/auth', auth);
apiRouter.use('/api/v1/car', car);
apiRouter.use('/api/v1/order', order);

export default apiRouter;
