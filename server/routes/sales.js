import express from "express";
import { getSales } from "../controllers/sales.js";

export const router = express.Router();

router.get("/sales", getSales);

export default router;