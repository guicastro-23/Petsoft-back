const sequelize = require('../sequelize');

function getTodosClientes() {
    return sequelize.query('SELECT * FROM cliente');
}

module.exports = {
    getTodosClientes
}