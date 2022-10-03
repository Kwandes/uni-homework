"use strict";

import express, { json } from "express";
import { NtpRouter } from "./ntp/ntp.router.js";

const serverPort = 3001;
const targetServerPort = 3000;

const app = express();
app.use(json());

app.use(express.static("public"));

app.use(NtpRouter);

app.get("/healthcheck", (req, res) => {
  return res.send({ status: "Running", serverPort, targetServerPort });
});

app.listen(serverPort, () => {
  console.log({ message: "Date-Time server is running on port " + serverPort });
});
