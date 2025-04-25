import express from "express";
import { visualizarProdutos, cadastrarProdutos, atualizarProdutos } from "../controllers/produto.js";

const router = express.Router();

router.get("/", visualizarProdutos);

router.post("/criarprods", cadastrarProdutos);

router.put("/:id_produto", atualizarProdutos);



export default router;