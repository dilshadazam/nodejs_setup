<<<<<<< HEAD
import Sequelize from "sequelize";

import sequelize from "../utilities/database.js";


const LoanTypesName = sequelize.define("loantypesname", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  loantypename: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

=======
import Sequelize from "sequelize";

import sequelize from "../utilities/database.js";


const LoanTypesName = sequelize.define("loantypesname", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  loantypename: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

>>>>>>> f2e0950c2d27e84702c597a21939b1de08400f7f
export default LoanTypesName;