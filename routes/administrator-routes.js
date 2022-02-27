<<<<<<< HEAD
import express from "express";


//BODY VALIDATOR IMPORT 
import { body } from "express-validator";


// CREATE DATA

//Add interest rate by loanprovider specific

import {createInterestRate} from "../controllers/administrator/create-api/create-interest-rate.js";

import {createLoanTypesName} from "../controllers/administrator/create-api/create-loan-types.js";

import {createRoleMaster} from "../controllers/administrator/create-api/create-rolemaster.js";

import {createLoanInterestRate} from "../controllers/administrator/create-api/createLoaneTypeInterestName.js";
//FETCH DATA

//Here i am importing FetchCustomerBasic info  function into routing file for generate routes
import {getCustomerBasicInfo} from "../controllers/administrator/fetch-api/fetch-basicinfo-cust.js";



//Here i am importing FetchCustomerKyc Completed info  function into routing file for generate routes
import {getSingleCustKycData} from "../controllers/administrator/fetch-api/fetch-kyc-customer.js";

//FETCH ALL LOAN TYPES
import {getAllLoanTypes} from "../controllers/administrator/fetch-api/fetch-all-loantypes.js";

//FETCH ALL ROLEMASTERS
import {getAllRoleMatster} from "../controllers/administrator/fetch-api/fetch-all-rolemaster.js";

//FETCH ALL LOAN PROVIDER LIST BY ROLEMASTER ID 
import {getAllLoanProviderbyrolemaster} from "../controllers/administrator/fetch-api/fetch-all-loanproviderby-rolemasterid.js";


//FETCH LOAN TYPE INTEREST RATE DETAILS
import {getAllLoanInterestNames} from "../controllers/administrator/fetch-api/fetch-all-loanInterest.js";


//UPDATE DATA


//edit loan type name
import {editLoanTypeName} from "../controllers/administrator/update-api/updateLoanTypesById.js";

// edit rolemaster by rolemaster id 
import {editRoleMaster} from "../controllers/administrator/update-api/update-rolemaster.js";

//DELETE API 
import {deleteLoantypeNmae} from "../controllers/administrator/delete-api/delete-LoantypeById.js";


//middlewares
import { isAdministrator } from "../middleware/is-admin.js";

//router 
const router = express.Router();


  //ADD ROLE MASTER
router.post(
  "/add-rolemaster",
  isAdministrator,createRoleMaster
);


//ADD LOAN TYPES NAME
  router.post(
    "/add-loantypes-name",
    isAdministrator,createLoanTypesName
  );

//ADD LOAN INTEREST NAME RATE OF INETEREST AND PENALTY OF THAT PERTICULAR INETREST CALCULAR NAME 
router.post(
  "/add-loaninterestname",
  isAdministrator,createLoanInterestRate
);

 // //ADD INTEREST RATE BY SPECIFIC LOANPROVIDER
  router.post("/add-interest-rate",isAdministrator,createInterestRate)


//UPDATE LOAN TYPES NAME
router.put(
  "/editloantypename/:loantypesnameId",
  isAdministrator,
  editLoanTypeName
);


//UPDATE ROLE MATSER BY ROLE MASTER ID 

router.put("/edit-rolemaster/:rolemasterId",isAdministrator,editRoleMaster)

//FETCH DATA 

//GET ALL basic information of  Customer
router.get("/fecthcustomerbasicinfo", isAdministrator, getCustomerBasicInfo);

//GET KYC COMPLETED CUSTOMER INFO SEACRCH BY CUSTOMER UNIQUE ID 
router.get("/fetch-one-kyc-customer-basic-info/:customerUniqueNo", isAdministrator, getSingleCustKycData);
//GET ALL LOAN TYPES BY LOANTITLE ID 
router.get("/fetcalltypesloans",getAllLoanTypes); 
//GET ALL ROLEMASTERS LIST 
router.get("/fetch-all-rolemaster-list",isAdministrator,getAllRoleMatster)
//GET ALL LIST OF LOAN PROVIDER ACCORDING TO ROLEMASTER 
router.get("/fetch-all-list-of-loanprovider-by-rolemaster/:rolemasterId",isAdministrator,getAllLoanProviderbyrolemaster)

//GET ALL LIST OF LOAN INTEREST BY LOANTYPES
router.get("/fetch-all-loaninterestrate/:loantypesnameId",isAdministrator,getAllLoanInterestNames)

//DELETE ROUTES

//DELETE LOANTYPES NAME BY LOANTYPESNAME ID 
router.delete("/delete-loantype/:loantypesnameId",isAdministrator,deleteLoantypeNmae)

export default router;
=======
import express from "express";

import { body } from "express-validator";


// CREATE DATA

// Here i am importing createCustomer function into routing file for generate routes
import {createCustomer} from "../controllers/administrator/create-api/create-cust-kyc.js";


import {createLoanTypesName} from "../controllers/administrator/create-api/create-loan-types.js";

import {createRoleMaster} from "../controllers/administrator/create-api/create-rolemaster.js";

//FETCH DATA

//Here i am importing FetchCustomerBasic info  function into routing file for generate routes
import {getCustomerBasicInfo} from "../controllers/administrator/fetch-api/fetch-basicinfo-cust.js";

//Here i am importing FetchCustomerBasic  info by customerUniqueId function into routing file for generate routes
import {getSingleCustData} from "../controllers/administrator/fetch-api/fetch-single-customerbyuniquid.js";

//Here i am importing FetchCustomerBasic info  function into routing file for generate routes
import {getCustomerKycInfo} from "../controllers/administrator/fetch-api/fetch-all-kyc-customer.js";

//Here i am importing FetchCustomerKyc Completed info  function into routing file for generate routes
import {getSingleCustKycData} from "../controllers/administrator/fetch-api/fetch-kyc-customer.js";

//FETCH ALL LOAN TYPES
import {getAllLoanTypes} from "../controllers/administrator/fetch-api/fetch-all-loantypes.js";

//FETCH ALL ROLEMASTERS
import {getAllRoleMatster} from "../controllers/administrator/fetch-api/fetch-all-rolemaster.js";
//UPDATE DATA

//Here i am importing UpdateCustomerKyc in Customer Table  function into routing file for generate routes
import{updateCustomerKyc} from "../controllers/administrator/update-api/cust-kyc-update.js";


//edit loan type name
import {editLoanTypeName} from "../controllers/administrator/update-api/updateLoanTypesById.js";

// edit rolemaster by rolemaster id 
import {editRoleMaster} from "../controllers/administrator/update-api/update-rolemaster.js";

//DELETE API 
import {deleteLoantypeNmae} from "../controllers/administrator/delete-api/delete-LoantypeById.js";


//middlewares
import { isAdministrator } from "../middleware/is-admin.js";

//router
const router = express.Router();

//add customer information in first meeting API

//ADD ROLE MASTER


router.post(
    "/add-customer-basic-info",
    isAdministrator,createCustomer
  );
  
router.post(
  "/add-rolemaster",
  isAdministrator,createRoleMaster
);



  router.post(
    "/add-loantypes-name",
    isAdministrator,createLoanTypesName
  );

//UPDATE EXAM CATEGORY NAME
router.put(
  "/customer-kyc/:customerUniqueNo",
  isAdministrator,
  updateCustomerKyc
);


//UPDATE LOAN TYPES NAME
router.put(
  "/editloantypename/:loantypesnameId",
  isAdministrator,
  editLoanTypeName
);


//UPDATE ROLE MATSER BY ROLE MASTER ID 

router.put("/edit-rolemaster/:rolemasterId",isAdministrator,editRoleMaster)
//FETCH DATA 

//GET ALL basic information of  Customer
router.get("/fecthcustomerbasicinfo", isAdministrator, getCustomerBasicInfo);
//GET ALL basic information of  Customer by cusdtomeruniquid
router.get("/fetch-one-customer-basic-info/:customerUniqueNo", isAdministrator, getSingleCustData);
//GET CUSTOMER BASIC INFO SEARCH BY CUSTOMER UNIQUE ID
router.get("/fetch-kyc-completed-customers-list", isAdministrator, getCustomerKycInfo);
//GET KYC COMPLETED CUSTOMER INFO SEACRCH BY CUSTOMER UNIQUE ID 
router.get("/fetch-one-kyc-customer-basic-info/:customerUniqueNo", isAdministrator, getSingleCustKycData);
//GET ALL LOAN TYPES BY LOANTITLE ID 
router.get("/fetch-all-loantypes", isAdministrator, getAllLoanTypes);
//GET ALL ROLEMASTERS LIST 
router.get("/fetch-all-rolemaster-list",isAdministrator,getAllRoleMatster)



//DELETE ROUTES
//DELETE LOANTYPES NAME BY LOANTYPESNAME ID 
router.delete("/delete-loantype/:loantypesnameId",isAdministrator,deleteLoantypeNmae)

export default router;
>>>>>>> f2e0950c2d27e84702c597a21939b1de08400f7f
