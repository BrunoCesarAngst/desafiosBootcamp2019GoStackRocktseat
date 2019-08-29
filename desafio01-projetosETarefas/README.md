# Desafio 01. Conceitos do NodeJS

Uma aplicação do zero utilizando Express.

Essa aplicação será utilizada para armazenar projetos e suas tarefas.

![Iniciando o server]()

## Rotas

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

![Listando os projetos criados]()
![Resultado final]()

- `POST /projects`: A rota recebe `id` e `title` dentro corpo de cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`; 

![Criando o primeiro projeto]()
![Criando o segundo projeto]()

- `PUT /projects/:id`: A rota altera apenas o título do projeto com o `id` presente nos parâmetros da rota;

![Alterando título do projeto]()

- `DELETE /projects/:id`: A rota deleta o projeto com o `id` presente nos parâmetros da rota;

![Deletando um projeto]()

- `POST /projects/:id/tasks`: A rota receber um campo `title` e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;

![Criando uma tarefa no projeto principal]()
![Criando tarefas no segundo projeto]()

