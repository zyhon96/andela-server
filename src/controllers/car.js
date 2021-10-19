import Car from '../database/carss';

// eslint-disable-next-line consistent-return
export const createCar = async (req, res, next) => {
  try {
    const {
      id: userId, email,
    } = req.auth;
    const {
      model, price, manufacturer, state, status,
    } = req.body;

    const postCar = {
      id: Car.length + 1,
      email,
      model,
      manufacturer,
      created_on: new Date(),
      price,
      state,
      status,
      ownerId: userId,
    };

    return res.status(200).send({
      message: 'Car created successfully',
      data: { postCar },

    });
  } catch (err) {
    next(err);
  }
};

export const meg = () => {

};
