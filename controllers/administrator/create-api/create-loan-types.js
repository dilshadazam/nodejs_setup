<<<<<<< HEAD
//models
import LoanTypes from "../../../models/types-of-loan.js";

import {validationErrorHandler} from "../../../helpers/validation-error-handler.js";
// EXPORT FUNCTION NAME FOR ROUTE
export const createLoanTypesName = async (req, res, next) => {
  validationErrorHandler(req, next);
  const {loantypename} = req.body;
  try {
    const preExistingLoanTypesName = await LoanTypes.findOne({
      where: {
        loantypename
      }
    });
    if (preExistingLoanTypesName) {
      const error = new Error('This Loan type name is already Exists!');
      error.statusCode = 403;
      return next(error);
    }
    const response = await LoanTypes.create({
      loantypename,
      isActive: true,

    });
     //response in postman when data successfully inserted
    res.status(201).json({
      message: "Loan type Name create successfully !!",
      response
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
=======
//models
import LoanTypes from "../../../models/types-of-loan.js";

import {validationErrorHandler} from "../../../helpers/validation-error-handler.js";
// EXPORT FUNCTION NAME FOR ROUTE
export const createLoanTypesName = async (req, res, next) => {
  validationErrorHandler(req, next);
  const {loantypename} = req.body;
  try {
    const preExistingLoanTypesName = await LoanTypes.findOne({
      where: {
        loantypename
      }
    });
    if (preExistingLoanTypesName) {
      const error = new Error('This Loan type name is already Exists!');
      error.statusCode = 403;
      return next(error);
    }
    const response = await LoanTypes.create({
      loantypename,
      isActive: true,

    });
    res.status(201).json({
      message: "Loan type Name create successfully !!",
      response
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
>>>>>>> f2e0950c2d27e84702c597a21939b1de08400f7f
};