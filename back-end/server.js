import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv/config";
import userRoute from './routes/userRoute.js';
import itemRoute from './routes/itemRoutes.js';

const app = express();

app.use(express.json())
   .use('/user', userRoute)
   .use('/api/items', itemRoute);

app.get("/", (req, res) => res.send("Server Started"));

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(5000, () => console.log("DB Connected And Server Started."));
    })
    .catch(console.log);
