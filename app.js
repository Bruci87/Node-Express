const express = require("express");

const app = express();
const port = 3000;
app.use(express.json());
let produtos = [];
app.get("/api/listarProdutos", (req, res) => {
  res.status(200).json(produtos);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`application started at http://localhost:${port}`);
});

app.post("/api/criarProdutos", (req, res) => {
  const { nome, preco } = req.body;
  const produto = { id: produtos.length + 1, nome, preco };
  produtos.push(produto);
  res.status(201).json(produto);
});