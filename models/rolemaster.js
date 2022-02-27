<<<<<<< HEAD
import Sequelize from "sequelize";

import sequelize from "../utilities/database.js";

const RoleMaster = sequelize.define("rolemaster", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  rolemastertitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
=======
import Sequelize from "sequelize";

import sequelize from "../utilities/database.js";

const RoleMaster = sequelize.define("rolemaster", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  rolemastertitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
>>>>>>> f2e0950c2d27e84702c597a21939b1de08400f7f
export default RoleMaster;