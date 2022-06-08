//packages
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

//models
import User from "../../../models/user.js";

//helpers
import { validationErrorHandler } from "../../../helpers/validation-error-handler.js";
// EXPORT FUNCTION NAME FOR ROUTE
export const customerLogin = async (req, res, next) => {
  validationErrorHandler(req, next);
  const { loanprovidercode, password } = req.body;
  try {
    const customer = await User.findOne({
      where: {
        loanprovidercode: req.body.loanprovidercode,
        isUserActive: true,
      },
      raw: true,
    });
    if (!customer) {
      const error = new Error("Customer not found");
      error.statusCode = 404;
      return next(error);
    }
    const isPwdEqual = await bcrypt.compare(password, customer["password"]);
    if (!isPwdEqual) {
      const error = new Error("Wrong Password");
      error.statusCode = 401;
      return next(error);
    }
    const id = customer["id"];
    const name = customer["name"];
    const mail = customer["email"];
    const loanprovidercode = customer["loanprovidercode"];
    const token = jwt.sign(
      { id, loanprovidercode: loanprovidercode, email: mail },
      process.env.TOKEN_SIGNING_KEY,
      {
        expiresIn: "1 day",
      }
    );
    const refreshToken = jwt.sign(
      { id, loanprovidercode: loanprovidercode, name },
      process.env.REFRESH_TOKEN_SIGNING_KEY
    );
    await User.update(
      { refreshToken: refreshToken },
      { where: { email, isAdminActive: true } }
    );
    res.status(201).json({
      msg: ` Customer ${name} login successfull`,
      token: token,
      refreshToken: refreshToken,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
