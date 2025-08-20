import express from "express";
import aiRouter from "./routes/ai.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/ai", aiRouter);

export default app;
