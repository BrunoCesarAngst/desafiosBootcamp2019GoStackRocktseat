# Desafio 01. Conceitos do NodeJS

Uma aplicação do zero utilizando Express.

Essa aplicação será utilizada para armazenar projetos e suas tarefas.

![Iniciando o server](https://github.com/BrunoCesarAngst/desafiosBootcamp2019GoStackRocktseat/blob/master/desafio01-projetosETarefas/image/Iniciando%20o%20server)

## Rotas

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

![Listando os projetos criados](https://github.com/BrunoCesarAngst/desafiosBootcamp2019GoStackRocktseat/blob/master/desafio01-projetosETarefas/image/Listando%20os%20projetos%20criados)
![Resultado final](https://github.com/BrunoCesarAngst/desafiosBootcamp2019GoStackRocktseat/blob/master/desafio01-projetosETarefas/image/Resultado%20final)

- `POST /projects`: A rota recebe `id` e `title` dentro corpo de cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`; 

![Criando o primeiro projeto](https://github.com/BrunoCesarAngst/desafiosBootcamp2019GoStackRocktseat/blob/master/desafio01-projetosETarefas/image/Criando%20o%20primeiro%20projeto)
![Criando o segundo projeto](https://github.com/BrunoCesarAngst/desafiosBootcamp2019GoStackRocktseat/blob/master/desafio01-projetosETarefas/image/Criando%20o%20segundo%20projeto)

- `PUT /projects/:id`: A rota altera apenas o título do projeto com o `id` presente nos parâmetros da rota;

![Alterando título do projeto](https://github.com/BrunoCesarAngst/desafiosBootcamp2019GoStackRocktseat/blob/master/desafio01-projetosETarefas/image/Alterando%20t%C3%ADtulo%20do%20projeto)

- `DELETE /projects/:id`: A rota deleta o projeto com o `id` presente nos parâmetros da rota;

![Deletando um projeto](https://github.com/BrunoCesarAngst/desafiosBootcamp2019GoStackRocktseat/blob/master/desafio01-projetosETarefas/image/Deletando%20um%20projeto)

- `POST /projects/:id/tasks`: A rota receber um campo `title` e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;

![Criando uma tarefa no projeto principal](https://github.com/BrunoCesarAngst/desafiosBootcamp2019GoStackRocktseat/blob/master/desafio01-projetosETarefas/image/Criando%20uma%20tarefa%20no%20projeto%20principal)
![Criando tarefas no segundo projeto](https://github.com/BrunoCesarAngst/desafiosBootcamp2019GoStackRocktseat/blob/master/desafio01-projetosETarefas/image/Criando%20tarefas%20no%20segundo%20projeto)

