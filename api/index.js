import express from "express";
import userRoutes from "./routes/produtos.js";
import cors from "cors";
const PORT = 3030;

const api = express();

api.use(express.json());
api.use(cors());

api.use("/", userRoutes);

api.listen(PORT, () => {
    console.log(`Servidor escutando em http://localhost:${PORT}`)
});