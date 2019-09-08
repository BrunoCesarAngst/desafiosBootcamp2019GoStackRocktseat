module.exports = {
  // configurando as credenciais
  dialect: 'postgres', // instalando yarn add pg pg-hstore
  host: 'localhost', // para encontrar a base de dados
  port: 5433, // para encontrar a port compartilhada
  username: 'postgres',
  password: 'docker',
  database: 'meetapp',
  define: {
    timestamps: true, // são as colunas createAt e updateAt, criação e alteração de cada registro
    underscored: true,
    underscoredAll: true,
    // usar o padrão underscore para tabelas e colunas ex. user_groups
  },
};

// vamos criar a nossa primeira migration indo na pasta migrations e rodando o comando yarn sequelize migration:create --name=create-users
