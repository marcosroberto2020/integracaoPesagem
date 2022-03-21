const Sequelize = require('sequelize');
const database = require('../db');
 
const Pesagemimp = database.define('pesagemimp', {
    nota: {
        type: Sequelize.INTEGER,       
        allowNull: false,
        primaryKey: true
    },
    dataPesagem: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pesoAgregados: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    pesoCimento: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    pesoAditivo: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
})
// Criar a tabela se não existir


module.exports = Pesagemimp;