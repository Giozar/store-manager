import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/product.routes.js";
import authRoutes from "./routes/auth.routes.js";
import providerRoutes from "./routes/provider.routes.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());


app.use("/api", authRoutes)
app.use("/api", providerRoutes)
app.use("/api", productRoutes)

export default app;
