import jwt from 'jsonwebtoken';
import { promisify } from 'util';

// importando o arquivo para acessar o segredo
import authConfig from '../../config/auth';

// exportando a middleware e importando em routes.js
export default async (req, res, next) => {
  // buscando o token
  const authHeader = req.headers.authorization;

  // testando a presença do token
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  // usando essa desestruturação pegarei só a informação do token
  const [, token] = authHeader.split(' ');

  // pode retornar algum erro
  try {
    // utilizando promisify uma função que transforma um função callback em
    // async await
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    // incluindo o id do usuário dentro do req para facilitar a identificação
    // do id respectivo ao token do usuário
    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ errro: 'Token invalid' });
  }

  // return next();
};
