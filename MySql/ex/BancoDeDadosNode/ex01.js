const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', 'mateusgostoso128', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('conectado')
}).catch(function(erro){
    console.log('falha ao se conectar. '+erro)
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

/*
Postagem.create({
    titulo: 'Título',
    conteudo: 'Seu Conteúdo'
})
*/

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: Sequelize.STRING
})

Usuario.create({
    nome: 'Mateus',
    sobrenome: 'Vitor',
    idade: 20,
    email: 'noia2352@gmail.com'
})

//Usuario.sync({force: true})