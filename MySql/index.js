const express = require('express')
const app = express()
const handlenars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

// Config
   //template Engine
   app.engine('handlebars', handlenars.engine({defaultLayout: 'main',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoMethodsByDefault: true
    }
   }))
   app.set('view engine', 'handlebars')

   //BodyParser
   app.use(bodyParser.urlencoded({extended: false}))
   app.use(bodyParser.json())

//Rotas
app.get('/', function(req, res){
    Post.findAll().then(function(posts){
        res.render('home', {posts: posts})
    })
})

app.get('/cad', function(req, res){
    res.render('formulario')
})

app.post('/add', function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send('Houve um erro ' +erro)
    })
})

app.get('/deletar/:id', function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send('Postagem deletada')
    }).catch(function(erro){
        res.send('esta postagem não existe')
    })
})

app.listen(8081, function(){
    console.log('o sevidor está rodando na url localhost:8081')
})