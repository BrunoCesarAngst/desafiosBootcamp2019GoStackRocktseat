// instalar 'yarn add jsonwebtoken'
import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import User from '../models/User';

// importando o arquivo de autentificação
import authConfig from '../../config/auth';

class SessionController {
  // criando a session
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { email, password } = req.body;

    // validando o usuário
    const user = await User.findOne({ where: { email } });

    // não encontrado
    if (!user) {
      return res.status(401).json({ error: 'User not found.' });
    }

    // validar senha
    // o metodo checkPassword criado dentro model de usuário User.js
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    // usuário e senha e senha coretos
    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },

      // o primeiro parametro do metodo sign é o payload pasamos id
      // o segundo e terceiro parametros vem da configuração do arquivo auth.js
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
    // criamos a nova rota em routes.js para acessar essa session
  }
}

export default new SessionController();
