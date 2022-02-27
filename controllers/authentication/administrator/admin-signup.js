<<<<<<< HEAD
//packages
import bcrypt from "bcryptjs";

//models
import Admin from "../../../models/admin.js";

//helpers
import { validationErrorHandler } from "../../../helpers/validation-error-handler.js";

export const adminSignup = async (req, res, next) => {
  validationErrorHandler(req, next);
  const { name,email, password } = req.body;
 
  try {
    const admin = await Admin.findOne({ where: { email } });
    if (admin) {
      const error = new Error("This email already exists in database");
      error.statusCode = 403;
      return next(error);
    }
    const encryptedPassword = await bcrypt.hash(password, 12);
    console.log(encryptedPassword);
    const result = await Admin.create({
      name,
      email,
      password: encryptedPassword,
      isAdminActive: true,
      isAuthorized:true,
    });
   
    res.status(201).json({
      msg: `Admin Registered successfully`
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
import Admin from "../../../models/admin.js";

//helpers
import { validationErrorHandler } from "../../../helpers/validation-error-handler.js";

export const adminSignup = async (req, res, next) => {
  validationErrorHandler(req, next);
  const { name,email, password } = req.body;
 
  try {
    const admin = await Admin.findOne({ where: { email } });
    if (admin) {
      const error = new Error("This email already exists in database");
      error.statusCode = 403;
      return next(error);
    }
    const encryptedPassword = await bcrypt.hash(password, 12);
    console.log(encryptedPassword);
    const result = await Admin.create({
      name,
      email,
      password: encryptedPassword,
      isAdminActive: true,
      isAuthorized:true,
    });
   
    res.status(201).json({
      msg: `Admin Registered successfully`
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
>>>>>>> f2e0950c2d27e84702c597a21939b1de08400f7f
