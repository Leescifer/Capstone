import express from "express";
import { connectDB } from './db/config.js';
import dotenv from "dotenv";
import authRoutes from './routes/auth.route.js'

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000

app.use(express.json());

app.use("/api/auth", authRoutes);

connectDB()

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})

