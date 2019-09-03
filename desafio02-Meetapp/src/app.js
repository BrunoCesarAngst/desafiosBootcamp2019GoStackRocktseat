/** 
  Nesse arquivo configura-se o servidor express e utizamos classes, pois, faz todo o sentido por estarmos dando nome as coisas.
*/

const express = require('express')
const routes = require('./routes')

//defina-se a class do App
class App {
  //cria-se o metodo contructor, esse, é chamado automaticamente, cada vez que
  //instanciamos/chamamos a class App
  constructor() {
    //define-se uma variável dentro dessa class para receber o express
    this.server = express()

    this.middlewares()
    this.routes()
  }

  //declaramos outros métodos, middlewares e routes.

  middlewares() {
    //aqui se cadastra todas as middleware. Como exemplo da middleware 
    //responsável enviar e receber respostas no formato json de uma API
    this.server.use(express.json())
  }

  routes() {
    //aqui separamos a responsabilidade importando as rotas de um arquivo
    //externo, passando a variável routes que recebe a importação do arquivo
    //routes, para dentro de use, pois, as routes são middlewares
    this.server.use(routes)
  }

  //então passamos esses métodos para o constructor para eles serem chamados,
  //senão não serão executados

}

//para tornar esse arquivo acessível temos que exporta-lo, exportando uma nova
//instância de App dando acesso ao server
module.exports = new App().server

//e dentro server.js importar esse arquivo o App.js
