const AutorView = require('../views/autorViews');

class AutorController {
    constructor() {
        this.view = new AutorView();
    }

    autor(req, res) {
        const html = this.view.render();
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(html);
        res.end();
    }
}

module.exports = AutorController;