import express from "express";
import { FilesService } from "./files.service.js";

const router = express.Router();

const filesService = new FilesService();
router.get("/json", async (req, res) => {
  res.send(filesService.getJson());
});
router.get("/yaml", async (req, res) => {
  res.send(filesService.getYaml());
});
router.get("/xml", async (req, res) => {
  res.send(await filesService.getXml());
});
router.get("/csv", async (req, res) => {
  res.send(await filesService.getCsv());
});
router.get("/txt", async (req, res) => {
  res.send(filesService.getTxt());
});

export { router as FilesRouter };
