class PlacaPublicitarioDao {
    constructor() {
        this.placaPublicitarios = [];
    }

    listar() {
        return this.placaPublicitarios;
    }

    inserir(placaPublicitario) {
        this.validar(placaPublicitario);
        this.placaPublicitarios.push(placaPublicitario);
    }

    alterar(id, placaPublicitario) {
        if(id == null || id == undefined || this.placaPublicitarios[id] == undefined)
            throw new Error('id_placaPublicitario_invalido');
        this.validar(placaPublicitario);
        this.placaPublicitarios[id] = placaPublicitario;
    }

    apagar(id) {
        if(id == null || id == undefined || this.placaPublicitarios[id] == undefined)
            throw new Error('id_placaPublicitario_invalido');
        this.placaPublicitarios.splice(id, 1);
    }

    validar(placaPublicitario) {
        if (placaPublicitario.area < 0) {
            throw new Error('mensagem_area_invalida');
        }
    }
}

module.exports = PlacaPublicitarioDao;