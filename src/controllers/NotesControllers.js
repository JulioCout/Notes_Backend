const knex = require("../database/knex")

class NotesController{
    async create(req, res){
        const { title, description, tags, links } = request.body;
    }

}

module.exports = NotesController;