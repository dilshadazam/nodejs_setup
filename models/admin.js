<<<<<<< HEAD
import Sequelize from "sequelize";

import sequelize from "../utilities/database.js";

import Rolemaster from "../models/rolemaster.js";

const Admin = sequelize.define("admin", {
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
  isAdminActive: {
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

export default Admin;
=======
import Sequelize from "sequelize";

import sequelize from "../utilities/database.js";

import Rolemaster from "../models/rolemaster.js";

const Admin = sequelize.define("admin", {
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
  isAdminActive: {
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

export default Admin;
>>>>>>> f2e0950c2d27e84702c597a21939b1de08400f7f
