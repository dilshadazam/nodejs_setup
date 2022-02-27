<<<<<<< HEAD
import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "interestcalculator",
  "root",
  "SEQ@passw0rd1234",
  {
    dialect: "mysql",
    host: "localhost",
    logging: false,
  },
  {
    pool: {
      max: 100,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export default sequelize;
=======
import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "interestcalculator",
  "root",
  "SEQ@passw0rd1234",
  {
    dialect: "mysql",
    host: "localhost",
    logging: false,
  },
  {
    pool: {
      max: 100,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export default sequelize;
>>>>>>> f2e0950c2d27e84702c597a21939b1de08400f7f
