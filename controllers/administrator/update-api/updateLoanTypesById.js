<<<<<<< HEAD
//models
import LoanTypeName from "../../../models/types-of-loan.js";

//helpers
import { validationErrorHandler } from "../../../helpers/validation-error-handler.js";
// EXPORT FUNCTION NAME FOR ROUTE
export const editLoanTypeName = async (req, res, next) => {
  validationErrorHandler(req, next);
  const { loantypename } = req.body;
  try {
    const result = await LoanTypeName.update(
      {
        loantypename,
      },
      {
        where: {
          id: req.params.loantypesnameId,
        },
      }
    );
    if (result[0] === 0) {
      const error = new Error("Loan Type Name not found");
      error.statusCode = 404;
      return next(error);
    }
     //response in postman when data successfully inserted
    res.status(201).json({
      message: "Loan Type Name update successfully",
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
=======
//models
import LoanTypeName from "../../../models/types-of-loan.js";

//helpers
import { validationErrorHandler } from "../../../helpers/validation-error-handler.js";
// EXPORT FUNCTION NAME FOR ROUTE
export const editLoanTypeName = async (req, res, next) => {
  validationErrorHandler(req, next);
  const { loantypename } = req.body;
  try {
    const result = await LoanTypeName.update(
      {
        loantypename,
      },
      {
        where: {
          id: req.params.loantypesnameId,
        },
      }
    );
    if (result[0] === 0) {
      const error = new Error("Loan Type Name not found");
      error.statusCode = 404;
      return next(error);
    }
    res.status(201).json({
      message: "Loan Type Name update successfully",
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
>>>>>>> f2e0950c2d27e84702c597a21939b1de08400f7f
};