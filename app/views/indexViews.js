class IndexView {
    render() {
        return `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
          <meta charset="UTF-8">
        </head>
        <body>
            <h1>Problema: Cálculo da Área de um Letreiro Publicitário em forma de pentágono.</h1>
            <p><strong>Descrição do problema:</strong></p>
            <p>Calcule a área de um letreiro publicitário em forma de pentágono. Se a área for maior que 20 metros quadrados, é um letreiro grande. Se for menor que 20 metros quadrados, é um letreiro pequeno.</p>
                <form action="PlacaPublicitario" method="post">
                    <label>
                        <span>Nome</span>
                        <input name="nome">
                    </label>
                    <label>
                        <span>Lado do Pentágono</span>
                        <input name="lado">
                    </label>
                    <button>Calcular</button>
                </form>
            <h4><footer>Desenvolvido por <a href="/autor">Desenvolvido por: Garrido</a></footer><h4>
        </body>
        </html>
      `;
    }
}

module.exports = IndexView;