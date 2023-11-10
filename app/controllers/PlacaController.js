const PlacaPublicitario = require('../lib/placaPublicitario');
const PlacaPublicitarioDao = require('../lib/placaPublicitarioDao');
const utils = require('../models/ultils')

class PlacaController {

    constructor() {
      this.placaPublicitarioDao = new PlacaPublicitarioDao();
    }

    listar(req, res) {
      let placaPublicitarios = this.placaPublicitarioDao.listar()
      utils.renderizarJSON(res, placaPublicitarios)
    }

    async inserir(req, res) {
      try {
          var body = await utils.getBody(req); 
          let placaPublicitario = new placaPublicitario(body.lado)
          this.placaPublicitarioDao.inserir(placaPublicitario);
          utils.renderizarJSON(res,{ 
              list: this.placaPublicitarioDao.listar(),
              mensagem: 'mensagem_placaPublicitario_cadastrado'
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
        let placaPublicitario = new PlacaPublicitario(body.lado)
        this.placaPublicitarioDao.alterar(body.id, placaPublicitario) 
        utils.renderizarJSON(res,{ 
            list: this.placaPublicitarioDao.listar(),
            mensagem: 'mensagem_placaPublicitario_alterado'
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
        this.placaPublicitarioDao.apagar(body.id) 
        utils.renderizarJSON(res,{ 
            list: this.placaPublicitarioDao.listar(),
            mensagem: 'mensagem_placaPublicitario_excluido'
          });
      } 
      catch (e) {
          utils.renderizarJSON(res, {
              mensagem: e.message
          }, 400);
      }
    }
}

module.exports = PlacaController