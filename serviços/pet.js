const sequelize = require('../sequelize')

function getTodosPets(){
    return sequelize.query('SELECT * FROM animal');

}

module.exports = {
    getTodosPets
}