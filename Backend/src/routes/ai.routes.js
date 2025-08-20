import express from "express";
import { reviewController } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/get-review", reviewController);

export default router;
