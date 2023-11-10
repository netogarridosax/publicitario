const Cabecalho = require('../lib/cabecalho');

class AutorView {
    render() {
        return `
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
            </head>
                <body>
                    ${Cabecalho.render()} 
                    <h1>Autor</h1>
                    <p>Nome: Francisco Lourival Garrido Neto</p>
                    <h2>Formações Acadêmicas</h2>
                    <ul>
                        <li>Técnico em Informática para Internet</li>
                        <li>Instituição: Instituto Federal do Ceará (IFCE)</li>
                        <li>Ano: 2023</li>
                    </ul>
                    <h2>Experiências Profissionais</h2>
                    <ul>
                        <li>Função: CB CET</li>
                        <li>Empresa: Exército Brasileiro</li>
                        <li>Ano início: 2017</li>
                    </ul>
                </body>
            </html>
        `;
    }
}

module.exports = AutorView;
