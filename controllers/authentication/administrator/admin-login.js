<<<<<<< HEAD
//packages
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

//models
import Admin from "../../../models/admin.js";

//helpers
import { validationErrorHandler } from "../../../helpers/validation-error-handler.js";

export const administratorLogin = async (req, res, next) => {
  validationErrorHandler(req, next);
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({
      where: {
        email: req.body.email,
        isAdminActive:true,
      },
      raw: true,
    });
    if (!admin) {
      const error = new Error("Admin not found");
      error.statusCode = 404;
      return next(error);
    }
    const isPwdEqual = await bcrypt.compare(password, admin["password"]);
    if (!isPwdEqual) {
      const error = new Error("Wrong Password");
      error.statusCode = 401;
      return next(error);
    }
    const id = admin["id"];
    const name = admin["name"];
    const mail = admin["email"];
    const Last_Login_Time=admin["updatedAt"]
    const token = jwt.sign({ id, email: mail }, process.env.TOKEN_SIGNING_KEY, {
      expiresIn: "1 day",
    });
    const refreshToken = jwt.sign(
      { id, email: mail, name },
      process.env.REFRESH_TOKEN_SIGNING_KEY
    );
    await Admin.update(
      { refreshToken: refreshToken },
      { where: { email, isAdminActive: true } }
    );
    res.status(201).json({
      msg: `Admin ${name} login successful`,
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
import Admin from "../../../models/admin.js";

//helpers
import { validationErrorHandler } from "../../../helpers/validation-error-handler.js";

export const administratorLogin = async (req, res, next) => {
  validationErrorHandler(req, next);
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({
      where: {
        email: req.body.email,
        isAdminActive:true,
      },
      raw: true,
    });
    if (!admin) {
      const error = new Error("Admin not found");
      error.statusCode = 404;
      return next(error);
    }
    const isPwdEqual = await bcrypt.compare(password, admin["password"]);
    if (!isPwdEqual) {
      const error = new Error("Wrong Password");
      error.statusCode = 401;
      return next(error);
    }
    const id = admin["id"];
    const name = admin["name"];
    const mail = admin["email"];
    const token = jwt.sign({ id, email: mail }, process.env.TOKEN_SIGNING_KEY, {
      expiresIn: "1 day",
    });
    const refreshToken = jwt.sign(
      { id, email: mail, name },
      process.env.REFRESH_TOKEN_SIGNING_KEY
    );
    await Admin.update(
      { refreshToken: refreshToken },
      { where: { email, isAdminActive: true } }
    );
    res.status(201).json({
      msg: `Hey Admin ${name} login successful`,
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
