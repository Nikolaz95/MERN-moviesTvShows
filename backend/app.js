import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/errors.js";
import cookieParser from "cookie-parser";
const app = express();

//handle uncaught exceptions
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err}`);
    console.log(`Shutting down  due to uncaught exceptions`);
    process.exit(1);
})


dotenv.config({ path: 'backend/config/config.env' });

//connect with MongoDB database
connectDatabase();

// JSON request bodies
app.use(express.json());
// cookieParser
app.use(cookieParser());


// Import All Routes
import productRoutes from "./router/products.js";
import authRoutes from "./router/auth.js"

app.use("/api", productRoutes)
app.use("/api", authRoutes)


//Import error midleware
app.use(errorMiddleware)

const server = app.listen(process.env.PORT, () => {
    console.log(`Server start on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});


//handle unhandle promise promise rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err}`);
    console.log(`Shutting down server due to Unhandled Promise Rejection`);
    server.close(() => {
        process.exit(1);
    });
});