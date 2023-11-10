const Usuario = require('../lib/usuario');
const UsuariosDao = require('../lib/UsuariosDao');
const utils = require('../models/ultils')

class UsuarioController {

    constructor() {
      this.usuariosDao = new UsuariosDao();
    }

    listar(req, res) {
      let usuarios = this.usuariosDao.listar()
      utils.renderizarJSON(res, usuarios)
    }

    async inserir(req, res) {
      try {
          var body = await utils.getBody(req); 
          let usuario = new usuario(body.lado)
          this.usuariosDao.inserir(usuario);
          utils.renderizarJSON(res,{ 
              list: this.usuariosDao.listar(),
              mensagem: 'mensagem_usuario_cadastrado'
          });
      } 
      catch (e) {
          utils.renderizarJSON(res, {
              mensagem: e.message
          }, 400);
      }
    }

    async alterar(req, res) {
      
      try {
        var body = await utils.getBody(req);
        let usuario = new Usuario(body.lado)
        this.usuariosDao.alterar(body.id, usuario) 
        utils.renderizarJSON(res,{ 
            list: this.usuariosDao.listar(),
            mensagem: 'mensagem_usuario_alterado'
          });
      } 
      catch (e) {
          utils.renderizarJSON(res, {
              mensagem: e.message
          }, 400);
      }
    }

    async apagar(req, res){
      try {
        var body = await utils.getBody(req);
        this.usuariosDao.apagar(body.id) 
        utils.renderizarJSON(res,{ 
            list: this.usuariosDao.listar(),
            mensagem: 'mensagem_usuario_excluido'
          });
      } 
      catch (e) {
          utils.renderizarJSON(res, {
              mensagem: e.message
          }, 400);
      }
    }
}

module.exports = UsuarioController