import express from "express";
import { NtpService } from "./ntp.service.js";

const router = express.Router();

const ntpService = new NtpService();
router.get("/timestamp", async (req, res) => {
  res.send(ntpService.getCurrentTimestamp());
});

export { router as NtpRouter };
