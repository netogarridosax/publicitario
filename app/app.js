const http = require('http');
const PlacaController = require('./controllers/PlacaControllers');
const EstaticoController = require('./controllers/EstaticoController');
const AutorController = require('./controllers/AutorController');
const AuthController = require('./controllers/AuthController');
const PlacasDao = require('./lib/projeto/PlacasDao');
const UsuariosController = require('./controllers/UsuariosControllers');
const UsuariosDao = require('./lib/projeto/UsuariosDao');
const PlacasMysqlDao = require('./lib/projeto/PlacasMysqlDao');
const UsuariosMysqlDao = require('./lib/projeto/UsuariosMysqlDao');
const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'bd',
    user            : process.env.MARIADB_USER,
    password        : process.env.MARIADB_PASSWORD,
    database        : process.env.MARIADB_DATABASE
});


let placasDao = new PlacasDao();
let usuariosDao = new UsuariosDao();
let placaController = new PlacaController(placasDao); 
let estaticoController = new EstaticoController();
let autorController = new AutorController();
let authController = new AuthController(usuariosDao);
let usuariosController = new UsuariosController(usuariosDao);


const PORT = 3000;
const server = http.createServer((req, res) => {
    let [url, querystring] = req.url.split('?');
    let urlList = url.split('/');
    url = urlList[1];
    let metodo = req.method;

    if (url === 'index') {
        placaController.index(req, res);
    } else if (url === 'area') {
        placaController.area(req, res);
    } else if (url === 'placas' && metodo === 'GET') {
        authController.autorizar(req, res, function () {
            placaController.listar(req, res);
        }, ['admin', 'geral']);
    } else if (url === 'placas' && metodo === 'POST') {
        authController.autorizar(req, res, function () {
            placaController.inserir(req, res);
        }, ['admin', 'geral']);
    } else if (url === 'placas' && metodo === 'PUT') {
        authController.autorizar(req, res, function () {
            placaController.alterar(req, res);
        }, ['admin', 'geral']);
    } else if (url === 'placas' && metodo === 'DELETE') {
        authController.autorizar(req, res, function () {
            placaController.apagar(req, res);
        }, ['admin']);
    } else if (url === 'usuarios' && metodo === 'GET') {
        usuariosController.listar(req, res);
    } else if (url === 'usuarios' && metodo === 'POST') {
        usuariosController.inserir(req, res);
    } else if (url === 'usuarios' && metodo === 'PUT') {
        authController.autorizar(req, res, function () {
            usuariosController.alterar(req, res);
        }, ['admin', 'geral']);
    } else if (url === 'usuarios' && metodo === 'DELETE') {
        authController.autorizar(req, res, function () {
            usuariosController.apagar(req, res);
        }, ['admin']);
    } else if (url === 'autor') {
        autorController.autor(req, res);
    } else if (url === 'login') {
        authController.index(req, res);
    } else if (url === 'logar') {
        authController.logar(req, res);
    } else    {
        estaticoController.procurar(req, res);   
    }
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
