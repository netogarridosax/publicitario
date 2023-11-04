const { parse } = require('querystring');
const CalcularPlacaView = require('../views/calcularplacaViews');

class CalcularPlacaController {
    constructor() {
        this.view = new CalcularPlacaView();
    }

    calcularPlaca(req, res) {
        if (req.method === 'POST') {
            let corpoTexto = '';
            req.on('data', function (pedaco) {
                corpoTexto += pedaco;
            });

            req.on('end', () => {
                const dadosDoFormulario = parse(corpoTexto);
                let nome = dadosDoFormulario.nome;
                let lado = parseFloat(dadosDoFormulario.lado);
                let area = (5 / 4) * Math.pow(lado, 2) * (1 / Math.tan(Math.PI / 5));

                const data = {
                    nome,
                    lado,
                    area
                };

                const html = this.view.render(data);
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(html);
                res.end();
            });
        } else {
            res.writeHead(405, { 'Content-Type': 'text/html' });
            res.write('<h1>Método não permitido</h1>');
            res.end();
        }
    }
}

module.exports = CalcularPlacaController;
