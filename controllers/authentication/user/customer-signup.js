//packages
import bcrypt from "bcryptjs";

//models
import User from "../../../models/user.js";

//helpers
import { validationErrorHandler } from "../../../helpers/validation-error-handler.js";
// EXPORT FUNCTION NAME FOR ROUTE
export const customerSignup = async (req, res, next) => {
  validationErrorHandler(req, next);
  const { name, loanprovidercode, email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email, loanprovidercode } });
    if (user) {
      const error = new Error("Customer already exists ");
      error.statusCode = 403;
      return next(error);
    }
    const encryptedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      name,
      email,
      loanprovidercode,
      password: encryptedPassword,
      isUserActive: true,
    });
    res.status(201).json({
      msg: `Customer ${name} Registered successfull, loanprovidercode is ${loanprovidercode}`,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
