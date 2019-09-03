//e dentro de server.js importar o arquivo app.js e aqui criamos o servidor
//separado da parte que cria/extrutura a aplicação que registra as middlewares
//e as rotas e isso é para facilitar a parte de testes automatizados
//(unitários, funcionais e de integração), pois, não precisará inicializar
//poderemos chamar e fazer os testes diretamente sobre a class App sobre o
//server de express
const app = require('./app')
//após configuramos app para ser acessado atráves de listen na porta 3030

app.listen(3030)

//agora configurarmos as rotas do espress no arquivo routes.js
