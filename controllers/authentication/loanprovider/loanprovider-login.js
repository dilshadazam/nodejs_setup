<<<<<<< HEAD
//packages
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

//models
import Loanprovider from "../../../models/loanprovider.js";

//helpers
import { validationErrorHandler } from "../../../helpers/validation-error-handler.js";
// EXPORT FUNCTION NAME FOR ROUTE
export const loanproviderLogin = async (req, res, next) => {
  validationErrorHandler(req, next);
  const { email, password } = req.body;
  try {
    const loanprovider = await Loanprovider.findOne({
      where: {
        email: req.body.email,
        isLoanproviderActive:true,
      },
      raw: true,
    });
    if (!loanprovider) {
      const error = new Error("Loanprovider not found");
      error.statusCode = 404;
      return next(error);
    }
    const isPwdEqual = await bcrypt.compare(password, loanprovider["password"]);
    if (!isPwdEqual) {
      const error = new Error("Wrong Password");
      error.statusCode = 401;
      return next(error);
    }
    const id = loanprovider["id"];
    const name = loanprovider["name"];
    const mail = loanprovider["email"];
    const role=loanprovider["rolemasterId"];
    const Last_Login_Time=loanprovider["updatedAt"];
    const loanprovidercode=loanprovider["loanprovidercode"];
    const token = jwt.sign({ id, email: mail }, process.env.TOKEN_SIGNING_KEY, {
      expiresIn: "1 day",
    });
    const refreshToken = jwt.sign(
      { id, email: mail, name },
      process.env.REFRESH_TOKEN_SIGNING_KEY
    );
    await Loanprovider.update(
      { refreshToken: refreshToken },
      { where: { email, isLoanproviderActive: true } }
    );
    res.status(201).json({
      msg: ` Login successfull,  ${name}     Rolemaster id =  ${role} ,and loanprovider code is :${loanprovidercode} `,
      token: token,
      refreshToken: refreshToken,
      Email_Address:mail,
      Last_login_time:Last_Login_Time,
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
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

//models
import Loanprovider from "../../../models/loanprovider.js";

//helpers
import { validationErrorHandler } from "../../../helpers/validation-error-handler.js";
// EXPORT FUNCTION NAME FOR ROUTE
export const loanproviderLogin = async (req, res, next) => {
  validationErrorHandler(req, next);
  const { email, password } = req.body;
  try {
    const loanprovider = await Loanprovider.findOne({
      where: {
        email: req.body.email,
        isLoanproviderActive:true,
      },
      raw: true,
    });
    if (!loanprovider) {
      const error = new Error("Loanprovider not found");
      error.statusCode = 404;
      return next(error);
    }
    const isPwdEqual = await bcrypt.compare(password, loanprovider["password"]);
    if (!isPwdEqual) {
      const error = new Error("Wrong Password");
      error.statusCode = 401;
      return next(error);
    }
    const id = loanprovider["id"];
    const name = loanprovider["name"];
    const mail = loanprovider["email"];
    const role=loanprovider["rolemasterId"];
    const loanprovidercode=loanprovider["loanprovidercode"];
    const token = jwt.sign({ id, email: mail }, process.env.TOKEN_SIGNING_KEY, {
      expiresIn: "1 day",
    });
    const refreshToken = jwt.sign(
      { id, email: mail, name },
      process.env.REFRESH_TOKEN_SIGNING_KEY
    );
    await Loanprovider.update(
      { refreshToken: refreshToken },
      { where: { email, isLoanproviderActive: true } }
    );
    res.status(201).json({
      msg: ` Login successfull,  Rolemaster id =  ${role} ,and loanprovider code is :${loanprovidercode} name of loanprovider is  ${name}    `,
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
>>>>>>> f2e0950c2d27e84702c597a21939b1de08400f7f
