const express = require("express");
const { randomUUID } = require("crypto");
const { request } = require("http");

const app = express();



app.use(express.json());

const products = [];

/**
 * POST => Inserir um dado
 * GET => Buscar um dado
 * PUT => Alterar um dado
 * DELETE => Remover um dado
 */


/**
 * Body => Sempre que eu quiser enviar dados para minha aplicação
 * PARAMS => /products/251551510212  parametros de rota
 * QUERY => /produtcs? id=250052050515510&value=0525151 parametros que vem na query, mas não são obrigatorios 
 *   */

app.post("/products", (request, response) => {
    //Nome e preço

    const {name, price} = request.body;

    const product = {
        name, 
        price,
        id: randomUUID(),
    };

    products.push(product);

    return response.json(product);

});

app.get("/products", (request, response) => {
    return response.json(products);
});


app.put("/products", (request, response) => {
    return response.json(products);
})


app.listen(5050, () => console.log("Servidor está rodando"));


