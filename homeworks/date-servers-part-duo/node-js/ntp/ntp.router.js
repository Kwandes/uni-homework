import express from "express";
import dns from "node:dns";
import { NtpService } from "./ntp.service.js";
dns.setDefaultResultOrder("ipv4first");

const router = express.Router();

const targetServerPort = 3000;

const ntpService = new NtpService();

/**
 * @openapi
 * /timestamp:
 *   get:
 *     description: Get the timestamp of the api
 *     responses:
 *       200:
 *         description: Timestamp of the api.
 */
router.get("/timestamp", async (req, res) => {
  res.send(ntpService.getCurrentTimestamp());
});

/**
 * @openapi
 * /ntp:
 *   get:
 *     description: Get the timestamp from another server
 *     responses:
 *       200:
 *         description: Timestamp from the NTP server.
 */
router.get("/ntp", async (req, res) => {
  // Enjoy this ugly fetch code since Node is ugly and meh
  const response = await fetch("http://localhost:3000/timestamp");
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return res.send(data);
  } else {
    console.error(response.statusText);
    res.status(500).send("Failed to fetch: " + response.statusText);
  }
});

export { router as NtpRouter };
