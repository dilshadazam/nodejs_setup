import Sequelize from "sequelize";

import sequelize from "../utilities/database.js";
import interestname from "../models/loaneIntrstName.js";

const LoanInteresRate = sequelize.define("interestrate", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,

  },
  interestnameId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
        model:interestname,
        key: "id",
  },},
  
  rateofinterest: {
    type: Sequelize.DOUBLE,
    allowNull: true,
  },

  penaltyrate: {
    type: Sequelize.DOUBLE,
    allowNull: true,
  },
 

});

export default LoanInteresRate;
