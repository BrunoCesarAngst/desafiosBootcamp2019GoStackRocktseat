const express = require('express')

const server = express()

server.use(express.json())

let numeroDeRequi = 0

const projects = []
// { id: '1', title: 'Novo projeto', tasks: [] }

server.use((req, res, next) => {
  console.time('Request')

  console.log(`Metodo: ${req.method}; URL: ${req.url}`)

  next()

  console.timeEnd('Request')
})

function checaProjetoExistente(req, res, next) {
  const { id } = req.params

  const project = projects.find(p => p.id == id)

  if (!project) {
    return res.status(400).json({ error: 'Projeto não encontrado' })
  }
  return next()
}

function quantasRequiFeitas (req, res, next) {
  numeroDeRequi++
  
  console.log(`Total de requisições: ${numeroDeRequi}`)

  return next()
}

server.use(quantasRequiFeitas)

server.get('/projects', (req, res) => {

  return res.json(projects)
})

server.get('/projects/:index', (req, res) => {
  const { index } = req.params

  return res.json(projects[index])
})

server.post('/projects', (req, res) => {
  const { id, title } = req.body

  const project = {
    id,
    title,
    tasks: []
  }

  projects.push(project)

  return res.json(project)
})

server.put('/projects/:id', checaProjetoExistente, (req, res) => {
  const { id } = req.params

  const { title } = req.body

  const project = projects.find(p => p.id == id)
  // esses métodos localizam um elemento após uma condição ser verificada
  // p é um elemento
  // p.id é o índice
  // id é o array

  project.title = title

  return res.json(project)
})

server.delete('/projects/:id', checaProjetoExistente, (req, res) => {
  const { id } = req.params

  const projectIndex = projects.findIndex(p => p.id == id)
  // retorna o valor do primeiro elemento que atende uma condição


  projects.splice(projectIndex, 1)

  return res.send()
})

server.post('/projects/:id/tasks', checaProjetoExistente, (req, res) => {
  const { id } = req.params

  const { title } = req.body

  const project = projects.find(p => p.id == id)
  console.log(project)
  project.tasks.push(title)

  return res.json(project)
})

server.listen(3333)
