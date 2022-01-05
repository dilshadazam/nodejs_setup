import Sequelize from "sequelize";

import sequelize from "../utilities/database.js";

const Flat = sequelize.define("flat", {
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
  title: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  street: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  apartmentsqfeet: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  bedrooms: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  bath: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  parking: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  price: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

export default Flat;
