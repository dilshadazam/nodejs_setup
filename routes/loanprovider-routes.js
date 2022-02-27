import express from "express";

//BODY VALIDATOR IMPORT 
import { body } from "express-validator";


// Here i am importing createCustomer function into routing file for generate routes
import {createCustomer} from "../controllers/loanprovider/create-api/create-cust-kyc.js";


import {getAllMySignupCustomer} from "../controllers/loanprovider/fetch-api/fetchMyAllCustomers.js";
//Here i am importing FetchCustomerBasic  info by customerUniqueId function into routing file for generate routes
import {getSingleCustData} from "../controllers/loanprovider/fetch-api/fetch-single-customerbyuniquid.js";
//Here i am importing FetchCustomerBasic info  function into routing file for generate routes
import {getCustomerKycInfo} from "../controllers/loanprovider/fetch-api/fetch-all-kyc-customer.js";
//FETCH ALL LOAN TYPES
import {getAllLoanTypes} from "../controllers/administrator/fetch-api/fetch-all-loantypes.js";

//Here i am importing UpdateCustomerKyc in Customer Table  function into routing file for generate routes
import{updateCustomerKyc} from "../controllers/loanprovider/update-api/cust-kyc-update.js";

//router 
const router = express.Router();

//MIDDLEWARE OF LOANPROVIDER
import {isLoanprovider} from "../middleware/is-loanprovider.js";


//GET CUSTOMERS LIST PERTICULAR LOANPROVIDER 
router.get("/fetchAllCustomerByLoanproviderAccount", isLoanprovider, getAllMySignupCustomer);
//GET ALL basic information of  Customer by cusdtomeruniquid
router.get("/fetch-one-customer-basic-info/:customerUniqueNo", isLoanprovider, getSingleCustData);

//GET CUSTOMER BASIC INFO SEARCH BY CUSTOMER UNIQUE ID
router.get("/fetch-kyc-completed-customers-list", isLoanprovider, getCustomerKycInfo);



//GET ALL LOAN TYPES BY LOANTITLE ID 
router.get("/fetch-all-loantypesloanprovider", isLoanprovider, getAllLoanTypes);

router.post(
    "/add-customer-basic-info",
    isLoanprovider,createCustomer
  );

 
  //UPDATE EXAM CATEGORY NAME
router.put(
  "/customer-kyc/:customerUniqueNo",
  isLoanprovider,
  updateCustomerKyc
);


export default router;