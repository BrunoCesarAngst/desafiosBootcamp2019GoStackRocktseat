const { Router } = require('express')
//começamos importando do {} express somente o Router 
//que é uma forma para separar a parte de roteamento do express em outro
//arquivo

//declaramos uma variável 
const routes = new Router()
//e então exportamos essas rotas com module.exports = routes

//definindo uma primeira rota acessando a rota raiz '/'
routes.get('/', (req, res) =>{
  return res.json({ message: 'Hello World' })
})

module.exports = routes