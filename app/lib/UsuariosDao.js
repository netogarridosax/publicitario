class UsuariosDao {
    constructor() {
        this.usuarioss = [];
    }

    listar() {
        return this.usuarioss;
    }

    inserir(usuarios) {
        this.validar(usuarios);
        this.usuarioss.push(usuarios);
    }

    alterar(id, usuarios) {
        if(id == null || id == undefined || this.usuarioss[id] == undefined)
            throw new Error('id_usuarios_invalido');
        this.validar(usuarios);
        this.usuarioss[id] = usuarios;
    }

    apagar(id) {
        if(id == null || id == undefined || this.usuarioss[id] == undefined)
            throw new Error('id_usuarios_invalido');
        this.usuarioss.splice(id, 1);
    }

    validar(usuarios) {
        if (usuarios.area < 0) {
            throw new Error('mensagem_area_invalida');
        }
    }
}

module.exports = UsuariosDao;