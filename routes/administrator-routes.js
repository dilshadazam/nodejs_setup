import express from "express";

import { body } from "express-validator";

//
//middlewares
import { isAdministrator } from "../middleware/is-admin.js";

const router = express.Router();

export default router;
