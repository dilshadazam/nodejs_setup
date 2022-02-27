<<<<<<< HEAD
//models
import RoleMaster from "../../../models/rolemaster.js";
// EXPORT FUNCTION NAME FOR ROUTE
export const getAllRoleMatster = async (req, res, next) => {
  
  try {
    const Result = await RoleMaster.findAll({
     
      attributes: [ "id","rolemastertitle","createdAt"],
      raw: true,
    });
     //response in postman when data successfully inserted
    res.status(200).json({
      message: `Fetched all type of Role Master `,
      Result,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
=======
//models
import RoleMaster from "../../../models/rolemaster.js";
// EXPORT FUNCTION NAME FOR ROUTE
export const getAllRoleMatster = async (req, res, next) => {
  
  try {
    const Result = await RoleMaster.findAll({
     
      attributes: [ "id","rolemastertitle","createdAt"],
      raw: true,
    });
    res.status(200).json({
      message: `Fetched all type of Role Master `,
      Result,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
>>>>>>> f2e0950c2d27e84702c597a21939b1de08400f7f
};