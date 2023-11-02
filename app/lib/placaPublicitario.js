class PlacaPublicitario {
    calcularPlaca(lado) {
        return (5 / 4) * lado * lado * (1 / Math.tan(Math.PI / 5));
    }
}

module.exports = PlacaPublicitario;
