<<<<<<< HEAD
//models
import LoantypeName from "../../../models/types-of-loan.js";

//helpers
import { validationErrorHandler } from "../../../helpers/validation-error-handler.js";
// EXPORT FUNCTION NAME FOR ROUTE
export const deleteLoantypeNmae = async (req, res, next) => {
  validationErrorHandler(req, next);
  try {
    const result = await LoantypeName.destroy({
      where: {
        id: req.params.loantypesnameId,
      },
    });
    if (result[0] === 0) {
      const error = new Error("loan types not found");
      error.statusCode = 404;
      return next(error);
    }
    res.status(201).json({
      message: "Loan type Deleted successfull",
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
=======
//models
import LoantypeName from "../../../models/types-of-loan.js";

//helpers
import { validationErrorHandler } from "../../../helpers/validation-error-handler.js";
// EXPORT FUNCTION NAME FOR ROUTE
export const deleteLoantypeNmae = async (req, res, next) => {
  validationErrorHandler(req, next);
  try {
    const result = await LoantypeName.destroy({
      where: {
        id: req.params.loantypesnameId,
      },
    });
    if (result[0] === 0) {
      const error = new Error("loan types not found");
      error.statusCode = 404;
      return next(error);
    }
    res.status(201).json({
      message: "Loan type Deleted successfull",
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
>>>>>>> f2e0950c2d27e84702c597a21939b1de08400f7f
};