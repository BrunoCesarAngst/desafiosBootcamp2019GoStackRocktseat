import * as Yup from 'yup';
// o yup não tem export default, por isso se traz tudo do yup

import User from '../models/User';

class UserController {
  async store(req, res) {
    // esquema de validação informando como objeto no seguinte formato
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    // validando se o corpo da requisição o req.body bate com as validações
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    // const user = await User.create(req.body);
    // retornar para o frontend só informações necessárias
    const { id, name, email, provider } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  // criando a rota de alteração de usuário
  // mas, não faz sentido ser acessada por não logados
  async update(req, res) {
    // esquema de validação informando como objeto no seguinte formato
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      // se o usuario informa a senha antiga então é uma alteração
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        // quando o oldPassword for preenchida o campo seguinte deve ser informado
        .when('oldPassword', (oldPassword, field) =>
          // se oldPassword preenchida ? quero password obrigatório : se não, não
          oldPassword ? field.required() : field
        ),
      // campo para confirmação do usuário
      // quando o password estiver preenchido
      confirmPassword: Yup.string().when('password', (password, field) =>
        // se password preenchido ? quero os valores iguais entre password e
        // confirmPassword : se não, não
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    // validando se o corpo da requisição o req.body bate com as validações
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    // buscando o email e senha atual no corpo da requisição
    const { email, oldPassword } = req.body;

    // buscando o usuário que quer ser editado
    const user = await User.findByPk(req.userId);

    // vericicando a mudança de email
    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    // verificando senha atual e se quer alterar a senha
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    // atualizando o usuário
    const { id, name, provider } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
  // criando a rota em routes.js
}

// apartir daqui vamos gerar um hash da senha com uma extesão
// 'yarn add bcryptjs' e vamos para model de usuario User.js

// validando dados de entrada
// schema validation com yup 'yarn add yup'

export default new UserController();
