const express = require('express')
const app = express()
const handlenars = require('express-handlebars')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

// Config
   //template Engine
   app.engine('handlebars', handlenars.engine({defaultLayout: 'main'}))
   app.set('view engine', 'handlebars')

   //BodyParser
   app.use(bodyParser.urlencoded({extended: false}))
   app.use(bodyParser.json())

   //conexão mysql
   const sequelize = new Sequelize('sistemadecadastro', 'root', 'mateusgostoso128', {
    host: 'localhost',
    dialect: 'mysql'
})
//Rotas
app.get('/cad', function(req, res){
    res.render('formulario')
})

app.post('/add', function(req, res){
    res.send('texto: '+req.body.titulo+' conteudo: '+req.body.conteudo)
})

app.listen(8081, function(){
    console.log('o sevidor está rodando na url localhost:8081')
})