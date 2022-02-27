<<<<<<< HEAD
import Sequelize from "sequelize";

import sequelize from "../utilities/database.js";

import rolemaster from "../models/rolemaster.js";


const Loanprovider = sequelize.define("loanprovider", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  rolemasterId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model:rolemaster,
      key: "id",
    },
},
loanprovidercode:{
 type: Sequelize.STRING,
    allowNull: true,
  },
  
  isLoanproviderActive:{
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },

  isAuthorized: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  refreshToken: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

export default Loanprovider;
=======
import Sequelize from "sequelize";

import sequelize from "../utilities/database.js";

import rolemaster from "../models/rolemaster.js";


const Loanprovider = sequelize.define("loanprovider", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  rolemasterId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model:rolemaster,
      key: "id",
    },
},
loanprovidercode:{
 type: Sequelize.STRING,
    allowNull: true,
  },
  
  isLoanproviderActive:{
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },

  isAuthorized: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  refreshToken: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

export default Loanprovider;
>>>>>>> f2e0950c2d27e84702c597a21939b1de08400f7f
