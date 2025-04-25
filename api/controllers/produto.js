import { db } from "../config/db.js"; // importe da conecao do banco


//GET: Funcao para consulta dos os produtos
export const visualizarProdutos = (_, res) => {
    const q = "SELECT * FROM produto"; // variavel que recebe um comando de selecao do SQL

    // Metodo que executa a consulta ao banco
    db.query(q, (err, data) => { // recebe a consulta SQL, e uma funcao de callback que executa quando a consulta terminar

        //Tratamento de erros
        if (err) return res.json(err); // retorna o eror em JSOM

        // retorna status 200 (OK), converte os dados do banco (data) para JSON e envia como resposta
        return res.status(200).json(data);
    });
};



//POST: funcao para cadastrar os produtos ao banco
export const cadastrarProdutos = (req, res) => {
    // variavei que recebe comando SQL para adicionar um produto
    const q = "INSERT INTO produto(`nome`, `descrição`, `quantidade`) VALUES(?)";  // O *?* e um placeholder que sera substituido pelos valores reais

    //Array com os valores para inserir, os valores sao estraidos do corpo da requisicao (req.body)
    const values = [
        req.body.nome,
        req.body.descricao,
        req.body.quantidade
    ];

    // metodo que executa a criacao do produto
    db.query(q, [values], (err) => {

        //Tratamento de erros 
        if (err) return res.json(err); // retorna o erro em JSOM

        // Retorna status 200 (OK), mostra uma mensagem de confirmacao da criacao em Json
        return res.status(200).json("Produto criado com sucesso.");
    });
};


// Funcao para atualizar um registro de um produto
export const atualizarProdutos = (req, res) => {
    const q = "UPDATE produto SET `nome` = ?, `descrição` = ?, `quantidade` = ? WHERE `id_produto` = ?";

    const values = [
        req.body.nome,
        req.body.descricao,
        req.body.quantidade
    ];

    db.query(q, [...values, req.params.id_produto], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Produto atualizado com sucesso");
    });
};