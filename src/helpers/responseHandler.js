/**
 *
 * @param {Object} res
 * @param {Number} statusCode
 * @param {String} message
 * @param {Object} payload
 * @returns {Object} null
 */

export const respondWithSuccess = (res, statusCode = 200, message, payload = {}) => {
  res.status(statusCode).send({ success: true, message, payload });
};

/**
   *
   * @param {Object} res
   * @param {Number} statusCode
   * @param {String} message
   * @param {Object} payload
   * @returns {Object} null
   */
export const respondWithWarning = (res, statusCode = 500, message, payload = {}) => {
  res.status(statusCode).send({ success: false, message, payload });
};

// i was glad when they said let's go to the house of the lord, there's somethong in the
// house of god that you can;t find anywhere
