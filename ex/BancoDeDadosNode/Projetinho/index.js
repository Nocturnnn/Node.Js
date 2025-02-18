const express = require('express')
const app = express()
const handlenars = require('express-handlebars')
const Sequelize = require('sequelize')

// Config
   //template Engine
   app.engine('handlebars', handlenars({defaultLayout: 'main'}))
   app.set('view engine', 'handlebars')

   //conexão mysql
   const sequelize = new Sequelize('sistemadecadastro', 'root', 'mateusgostoso128', {
    host: 'localhost',
    dialect: 'mysql'
})

app.listen(8081, function(){
    console.log('o sevidor está rodando na url localhost:8081')
})