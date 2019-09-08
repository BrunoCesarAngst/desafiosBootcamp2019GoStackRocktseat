import { Router } from 'express';
// começamos importando do {} express somente o Router
// que é uma forma para separar a parte de roteamento do express em outro
// arquivo

// só para testar pois essa não é a lógica
// import User from './app/models/User';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

// middleware de autenticação
import authMiddleware from './app/middlewares/auth';

// declaramos uma variável
const routes = new Router();
// e então exportamos essas rotas com module.exports = routes

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// o middleware poderia ser local, mas, faremos ser global, estando nessa
// posição só valerá para as rotas que vem depois.
routes.use(authMiddleware);

routes.put('/users', UserController.update);
// mas essa rota só pode ser acessada com usuários logados, para isso fazemos
// uso das middlewares criando a pasta e configurando um arquivo de auth.js

// definindo uma primeira rota para teste acessando a rota raiz '/'
// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Bruno',
//     email: 'q@a@c',
//     password_hash: '1234',
//   });

//   return res.json(user);
// daqui partimos para a feature de criação registro de usuários de nossa aplicação criando UserController.js na pasta controllers.

// return res.json({ message: 'Hello World' });
// no terminal roda-se a aplicação 'node src/server.js', que é o arquivo que
// instância o nosso servidor e pelo browser acessa-se 'localhost:3030'
// que mostrará a message!
// após vamos fazer umas alterações na configuração do sistema, detalhes no
// arquivo 'creating.txt'.
// });

export default routes;
