import Customer from "../../../models/customer.js";
import pkg from "formidable";
const { formidable } = pkg;
import fs from "fs";

import { validationErrorHandler } from "../../../helpers/validation-error-handler.js";

export const updateCustomerKyc= async (req, res, next) => {
  validationErrorHandler(req, next);
  try {
    const form = formidable();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({
          status: "Failure",
          msg: "Some error occured " + err.message,
        });
      }
      //if file access then forward it to next step otherwise not

      if (Object.keys(files).length === 0) {
        const data = await Customer.update({
            pan_no: fields.pan_no,
            adhar_no: fields.adhar_no,
            customerUniqueNo:fields.customerUniqueNo,
        });
        return res.status(201).json({
          msg: "Kyc update successfully without image",
          data,
        });
      }
      let oldPath = files.customerImg.filepath;
      let newPath = `customerImg/${files.img_path.originalFilename}`;
      fs.rename(oldPath, newPath, async (err) => {
        if (err) {
          return res.status(400).json({
            status: "Failure",
            msg: "Failed to upload image. " + err.message,
          });
        }

        // here my file has been uploaded successfully
        // here we can Update the Kyc
        const data = await Customer.update({
            pan_no: fields.pan_no,
            adhar_no: fields.adhar_no, 
            imag_path: newPath,
            customerUniqueNo:fields.customerUniqueNo,
        });

        res.status(201).json({
          msg: "Image upload successfully",
          data,
        });
      });
    });
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};