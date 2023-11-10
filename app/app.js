const http = require('http');
const { parse } = require('querystring');
const IndexController = require('./controllers/indexController');
const CalcularPlacaController = require('./controllers/CalcularPlacaController');
const AutorController = require('./controllers/AutorController');
const PlacaPublicitarioController = require('./controllers/PlacaController');
const UsuariosController = require('./controllers/UsuariosController');
const UsuariosDao = require('./lib/UsuariosDao');
const PORT = 3000;


let usuariosDao = new UsuariosDao();
let placaPublicitarioController = new PlacaPublicitarioController();
let usuariosController = new UsuariosController(usuariosDao);






const server = http.createServer(function (req, res) {
    let [url, queryString] = req.url.split('?');
    let controller;

    if (url == '/index') {
        controller = new IndexController();
        controller.index(req, res);
    }
    else if (url == '/PlacaPublicitario') {
        controller = new CalcularPlacaController(req, res);
        controller.calcularPlaca(req, res);
    }
    else if (url == '/autor') {
        controller = new AutorController();
        controller.autor(req, res);
    }
    else if (url == '/placaPublicitario' && req.method === 'GET') {
        placaPublicitarioController.listar(req, res);
    }
    else if (url == '/placaPublicitario' && req.method === 'POST') {
        placaPublicitarioController.inserir(req, res);
    }
    else if (url == '/placaPublicitario' && req.method === 'PUT') {
        placaPublicitarioController.alterar(req, res);
    }
    else if (url == '/placaPublicitario' && req.method === 'DELETE') {
        placaPublicitarioController.apagar(req, res);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<html><head><meta charset="UTF-8"></head><body><h1>Não encontrado!</h1></body></html>');
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});