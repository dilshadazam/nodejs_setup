<<<<<<< HEAD
 //packages
import bcrypt from "bcryptjs";

//models
import Loanprovider from "../../../models/loanprovider.js";

//helpers
import { validationErrorHandler } from "../../../helpers/validation-error-handler.js";
// EXPORT FUNCTION NAME FOR ROUTE
export const loanproviderSignup = async (req, res, next) => {
  validationErrorHandler(req, next);
  const { name,email, password,rolemasterId,loanprovidercode } = req.body;
 
  try {
    const lprovider = await Loanprovider.findOne({ where: {loanprovidercode } });
    if (lprovider) {
      const error = new Error("Loan Provider already exists on entered loanprovidercode please write another one");
      error.statusCode = 403;
      return next(error);
    }
    const encryptedPassword = await bcrypt.hash(password, 12);
    console.log(encryptedPassword);
    const result = await Loanprovider.create({
      name,
      email,
      password: encryptedPassword,
      rolemasterId,
      loanprovidercode,
      isLoanproviderActive: true,
      isAuthorized:true,
    });
 
    res.status(201).json({
      msg: `Loan provider name is ${name}, ${email},rolemaster id is =${rolemasterId} and loanprovider code is =${loanprovidercode} Registered successfully`
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
=======
//packages
import bcrypt from "bcryptjs";

//models
import Loanprovider from "../../../models/loanprovider.js";

//helpers
import { validationErrorHandler } from "../../../helpers/validation-error-handler.js";
// EXPORT FUNCTION NAME FOR ROUTE
export const loanproviderSignup = async (req, res, next) => {
  validationErrorHandler(req, next);
  const { name,email, password,rolemasterId,loanprovidercode } = req.body;
 
  try {
    const lprovider = await Loanprovider.findOne({ where: {loanprovidercode } });
    if (lprovider) {
      const error = new Error("Loan Provider already exists on entered loanprovidercode please write another one");
      error.statusCode = 403;
      return next(error);
    }
    const encryptedPassword = await bcrypt.hash(password, 12);
    console.log(encryptedPassword);
    const result = await Loanprovider.create({
      name,
      email,
      password: encryptedPassword,
      rolemasterId,
      loanprovidercode,
      isLoanproviderActive: true,
      isAuthorized:true,
    });
 
    res.status(201).json({
      msg: `Loan provider name is ${name}, ${email},rolemaster id is =${rolemasterId} and loanprovider code is =${loanprovidercode} Registered successfully`
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
>>>>>>> f2e0950c2d27e84702c597a21939b1de08400f7f
