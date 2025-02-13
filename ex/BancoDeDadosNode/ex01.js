const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', 'umtapanagostosa', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('conectado')
}).catch(function(erro){
    console.log('falha ao se conectar. '+erro)
})