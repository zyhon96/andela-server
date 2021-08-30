import Order from '../database/order';
import Cars from '../database/carss';
import { respondWithSuccess, respondWithWarning } from '../helpers/responseHandler';

export const createOrder = async (req, res, next) => {
  try {
    const { id } = req.auth;
    const { price_offered, carId } = req.body;

    // find if this car exit
    // if not exit return 404 response

    // get all details from this car
    const saidCar = Cars.find((i) => i.id === carId);
    if (!saidCar) return respondWithWarning(res, 404, 'no car found');
    // return respondWithSuccess(res, 200, 'success', saidCar);
    const { status } = saidCar;

    if (status !== 'available') return respondWithWarning(res, 400, 'car not available for ordering');

    const orderrCar = {
      id: Order.length + 1,
      car_id: carId,
      created_on: new Date(),
      price_offered,
      buyerId: id,
    };
    console.log(orderrCar);

    return res.status(200).send({
      message: 'Car ordered successfully',
      data: { orderrCar },

    });
  } catch (err) {
    next(err);
  }
}; 

export const me = () => {

};
