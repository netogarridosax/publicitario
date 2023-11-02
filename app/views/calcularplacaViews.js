const ejs = require('ejs');

class CalcularPlacaView {
    render(data) {
        const template = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
          <meta charset="UTF-8">
        </head>
        <body>
            <h1>Explicação da conta</h1>
            <p>A área de um pentágono regular pode ser calculada usando a fórmula:</p>
            <p><strong>Área = (5/4) * lado^2 * (1 / tan(π/5))</strong></p>
            <p>- <strong>lado</strong>: Comprimento de um lado do pentágono.</p>
            <p>- <strong>π</strong>: Número Pi (aproximadamente 3.14159).</p>
            <p>- <strong>tan(π/5)</strong>: Tangente do ângulo π/5 (36 graus), metade do ângulo central de um pentágono regular.</p>
            <p>- <strong>(5/4)</strong>: Constante de conversão.</p>
            <p>A fórmula calcula a área multiplicando o comprimento do lado pelo seu quadrado e pela tangente do ângulo π/5. O resultado é a área do pentágono.</p>
            <h1>Resposta:</h1>
            <p>Nome inserido: <%= nome %></p>
            <p>Lado do pentágono inserido: <%= lado %></p>
            <p>Área do pentágono: <%= area.toFixed(2) %> metros quadrados</p>
            <% if (area > 20) { %>
                <p>É uma placa grande.</p>
            <% } else { %>
                <p>É uma placa pequena.</p>
            <% } %>
            <h4><footer>Desenvolvido por <a href="/autor">Desenvolvido por: Garrido</a></footer><h4>
        </body>
        </html>
      `;

      return ejs.render(template, data);
    }
}

module.exports = CalcularPlacaView;
