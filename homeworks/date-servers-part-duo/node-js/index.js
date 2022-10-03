"use strict";

import express, { json } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { NtpRouter } from "./ntp/ntp.router.js";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Not your business",
      version: "0.0.0.0.0.3",
    },
  },
  apis: ["**/*router.js", "./index.js"],
};

const openapiSpecification = swaggerJSDoc(swaggerOptions);

const app = express();
app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));
app.use(express.json());

const serverPort = 3001;
const targetServerPort = 3000;

app.use(json());

app.use(express.static("public"));

app.use(NtpRouter);

/**
 * @openapi
 * /healthcheck:
 *   get:
 *     description: Get the status of the api.
 *     responses:
 *       200:
 *         description: Status of the api.
 */
app.get("/healthcheck", (req, res) => {
  return res.send({ status: "Running", serverPort, targetServerPort });
});

app.listen(serverPort, () => {
  console.log({ message: "Date-Time server is running on port " + serverPort });
});
