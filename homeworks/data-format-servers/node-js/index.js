"use strict";

import express, { json } from "express";
import { FilesRouter } from "./files/files.router.js";

const serverPort = 3001;
const targetServerPort = 3000;

const app = express();
app.use(json());

app.use(express.static("public"));

app.use("/files", FilesRouter);

app.get("/healthcheck", (req, res) => {
  return res.send({ status: "Running", serverPort, targetServerPort });
});

app.listen(serverPort, () => {
  console.log({ message: "The server is running on port " + serverPort });
});
