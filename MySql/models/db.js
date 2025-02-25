const { raw } = require('body-parser')
const { query } = require('express')
const Sequelize = require('sequelize')

//conexão mysql
const sequelize = new Sequelize('postapp', 'root', 'mateusgostoso128', {
    host: 'localhost',
    dialect: 'mysql',
    query: {raw: true}
})

module.exports = {Sequelize: Sequelize, sequelize: sequelize}