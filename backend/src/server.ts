import express from "express";
import cors from "cors";
import reviewsRouter from "./routes/reviews";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/api/reviews", reviewsRouter);

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
