// esse arquivo faz conecção com o banco de dados e carrega os models
import Sequelize from 'sequelize';

// importando os models
import User from '../app/models/User';

// importando as configurações do banco de dados
import DatabaseConfig from '../config/database';

// criamos um array com os models
const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // faz a conecção com o banco de dados e carregar os models
    this.connection = new Sequelize(DatabaseConfig);
    // aqui temos a conecção com o base de dados

    // depois de fazer a conecção vamos percorrer o array
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
// esse arquivo de database precisa ser chamado em algum lugar, ou seja
// no app.js importando database
