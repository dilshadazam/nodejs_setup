import express from "express";

import { body } from "express-validator";

import { adminSignup } from "../controllers/authentication/administrator/admin-signup.js";

import { administratorLogin } from "../controllers/authentication/administrator/admin-login.js";

import { loanproviderSignup } from "../controllers/authentication/loanprovider/loanprovider-signup.js";

import { loanproviderLogin } from "../controllers/authentication/loanprovider/loanprovider-login.js";

import { customerSignup } from "../controllers/authentication/user/customer-signup.js";

import { customerLogin } from "../controllers/authentication/user/customer-login.js";

const router = express.Router();
import { isAdministrator } from "../middleware/is-admin.js";
import { isCompany } from "../middleware/is-company.js";

//ADMIN LOGIN USING EMAIL + PASSWORD
router.post(
  "/administrator/signup",
  [
    body("name").trim().not().isEmpty().withMessage("Name is required"),
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Should be in a valid email format"),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Minimum 6 characters"),
  ],
  adminSignup
);

//ADMIN LOGIN USING EMAIL + PASSWORD
router.post(
  "/administrator/login",
  [
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Should be in a valid email format"),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Minimum 6 characters"),
  ],
  administratorLogin
);

//LOAN PROVIDER signup by admin
router.post(
  "/loanprovider/loanprovider-signup",
  [
    body("name").trim().not().isEmpty().withMessage("Name is required"),
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Should be in a valid email format"),
    body("loanprovidercode")
      .trim()
      .not()
      .isEmpty()
      .withMessage("loanprovidercode is required"),
    body("rolemasterId")
      .not()
      .isEmpty()
      .withMessage("rolemasterId is required"),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Minimum 6 characters"),
  ],
  isAdministrator,
  loanproviderSignup
);

//LOAN PROVIDER login by it self
router.post(
  "/loanprovider/longin",
  [
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Should be in a valid email format"),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Minimum 6 characters"),
  ],
  loanproviderLogin
);

//customer signup by admin
router.post(
  "/administrator/customerbyadmin-signup",
  [
    body("name").trim().not().isEmpty().withMessage("Name is required"),
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Should be in a valid email format"),
    body("loanprovidercode")
      .trim()
      .not()
      .isEmpty()
      .withMessage("loanprovidercode is required"),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Minimum 6 characters"),
  ],
  isAdministrator,
  customerSignup
);

//customer signup by company
router.post(
  "/company/customerbycompany-signup",
  [
    body("name").trim().not().isEmpty().withMessage("Name is required"),
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Should be in a valid email format"),
    body("loanprovidercode")
      .trim()
      .not()
      .isEmpty()
      .withMessage("loanprovidercode is required"),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Minimum 6 characters"),
  ],
  isCompany,
  customerSignup
);

//customer login by it self
router.post(
  "/user/longin",
  [
    body("loanprovidercode")
      .trim()
      .not()
      .isEmpty()
      .withMessage("loanprovidercode is required"),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Minimum 6 characters"),
  ],
  customerLogin
);

export default router;
