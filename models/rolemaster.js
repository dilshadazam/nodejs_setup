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

export default RoleMaster;
