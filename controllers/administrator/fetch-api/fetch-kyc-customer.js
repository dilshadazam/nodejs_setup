<<<<<<< HEAD
//models
import Customer from "../../../models/customer.js";
// EXPORT FUNCTION NAME FOR ROUTE
export const getSingleCustKycData = async (req, res, next) => {
  const customerUniqueNo = req.params.customerUniqueNo;
  try {
    const Result = await Customer.findAll({
      where: {
        customerUniqueNo,
      },
      attributes: [ "f_name","l_name","company_name","email","gender", "contact_no","d_o_b","city","student","employee","self_employed","pan_no","adhar_no", "createdAt"],
      raw: true,
    });
     //response in postman when data successfully inserted
    res.status(200).json({
      message: `KYC Customer information by customer Unique No =${customerUniqueNo}`,
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
import Customer from "../../../models/customer.js";
// EXPORT FUNCTION NAME FOR ROUTE
export const getSingleCustKycData = async (req, res, next) => {
  const customerUniqueNo = req.params.customerUniqueNo;
  try {
    const Result = await Customer.findAll({
      where: {
        customerUniqueNo,
      },
      attributes: [ "f_name","l_name","company_name","email","gender", "contact_no","d_o_b","city","student","employee","self_employed","pan_no","adhar_no", "createdAt"],
      raw: true,
    });
    res.status(200).json({
      message: `KYC Customer information by customer Unique No =${customerUniqueNo}`,
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