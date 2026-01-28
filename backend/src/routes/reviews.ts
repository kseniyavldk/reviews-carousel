import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

router.get("/", (_req, res) => {
  const filePath = path.join(__dirname, "../data/reviews.json");
  const file = fs.readFileSync(filePath, "utf-8");
  const reviews = JSON.parse(file);

  res.json(reviews);
});

export default router;
