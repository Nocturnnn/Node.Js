const express = require('express')
const app = express()
//rotas
//Obs: só é possivel enviar o send uma vez
app.get('/', function(req, res){
    res.sendFile(__dirname + "../../Html/index.html")
})

app.get('/sobre', function(req, res){
    res.send('minha página sobre')
})

app.get('/ola/:nome', function(req, res){
    res.send('<h1> Olá, '+ req.params.nome + '.</h1>')
})

//sempre essa função deve ser a ultima do código
app.listen(8081, function(){
    console.log('sevidor rodando na url http://localhost:8081')
    console.log(__dirname)
})
//acessar peelo google 'localhost:porta'