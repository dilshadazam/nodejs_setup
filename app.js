import path from "path";
// import fs from "fs";
import cluster from "cluster";
import os from "os";
import express from "express";
// import multer from "multer";
import sequelize from "./utilities/database.js";
import helmet from "helmet";
import compression from "compression";

//all routes imported here

const cpu = os.cpus().length;

const port = process.env.PORT || 3300;

const app = express();

if (cluster.isMaster) {
  console.log(`Master  ${process.pid} is running`);
  for (let i = 0; i < cpu; i++) {
    cluster.fork();
  }
  console.log(cpu);
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const __dirname = path.resolve();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(express.static(__dirname));
  // app.use(express.static(path.join(__dirname, "uploaded-pdf")));

  // multer configuration
  // app.use(
  //   multer({
  //     storage: fileStorage,
  //     fileFilter: fileFilter,
  //   }).single("pdf")
  // );

  // app.use(
  //   "/uploaded-pdf",
  //   express.static(path.join(__dirname, "uploaded-pdf"))
  // );

  // app.use(
  //   "/uploaded-image",
  //   express.static(path.join(__dirname, "testportal-img"))
  // );

  //All routes entrypoint here
  // app.use("/auth", authenticationRoutes);
  // app.use("/administrator", administratorRoutes);

  app.use(helmet());
  app.use(compression());

  //central error handler here

  // sync with database
  sequelize
    .sync()
    .then(() => {
      app.listen(port);
      console.log(`✔️  Server listening on port: ${port} ✔️ `);
    })
    .catch((err) => {
      console.log(err);
    });
}
