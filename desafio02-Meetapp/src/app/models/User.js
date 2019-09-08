import Sequelize, { Model } from 'sequelize';

// importando o bcrypt
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    // esse metodo é chamado automaticamente pelo sequelize
    super.init(
      // primeiro parametro os valores recebidos para criação, alteração,...
      {
        // estou chamando o metodo init da class Model
        // e enviamos as colunas que estão dentro da nossa base de dados (tipos)
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        // criando um novo campo
        password: Sequelize.VIRTUAL, // esse campo não existe na base de dados
        // somente no lado do código
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      // segundo parametro
      {
        sequelize,
        // aqui poderia passar outros parametros
      }
      // agora criaremos o arquivo que vai carregar todas as models da
      // aplicação para ela ser conhecida por toda aplicação
    );

    // hooks são trechos de código que são executados de forma automatica
    // baseado em ações que acontecem no model, nesse caso o beforeSave estará
    // rodando antes que seja criado ou editado um usuário
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
    // retornando o model que acabou de ser inicializado
    // daqui em diante vamos criar uma autenticação do usuário criando um
    // SessionController.js na pasta controllers
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
