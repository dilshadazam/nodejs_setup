//models
import Flat from "../../models/flat.js";

import { validationErrorHandler } from "../../helpers/validation-error-handler.js";

export const createFlat = async (req, res, next) => {
  validationErrorHandler(req, next);
  const {
    name,
    title,
    street,
    apartmentsqfeet,
    bedrooms,
    bath,
    parking,
    price,
  } = req.body;
  try {
    const preExistingFlat = await Flat.findOne({
      where: {
        name,
        title,
        street,
        apartmentsqfeet,
        bedrooms,
        bath,
        parking,
        price,
      },
    });
    if (preExistingFlat) {
      const error = new Error("Flat already Exists!");
      error.statusCode = 403;
      return next(error);
    }
    const response = await Flat.create({
      name,
      title,
      street,
      apartmentsqfeet,
      bedrooms,
      bath,
      parking,
      price,
    });
    res.status(201).json({
      message: "Flat details created successfully",
      response,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
