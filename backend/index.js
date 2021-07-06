import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
mongoose.connect(
  process.env.MONGODB_URL ||
    "mongodb+srv://admin:admin@cluster0.aqd2k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use("/api/users", userRouter);

app.use("/api/products", productRouter);

app.use("/api/orders", orderRouter);

app.get("/api/config/paypal", (req, res) => {
  res.send(
    process.env.PAYPAL_CLIENT_ID ||
      "AQQJyY2WtvdYpAYFfpMLQhrLcgSMOlmL-2VcXXAsOp8uRnUluXwG_zNo8KHZK3ezLorhE41SPQhFgL2s"
  );
});

app.get("/", (req, res) => {
  res.send("Server is ready . . .");
});

const PORT = process.env.PORT || 5000;

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`);
});
