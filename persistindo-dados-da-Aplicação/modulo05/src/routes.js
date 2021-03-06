const express = require('express')
const routes = express.Router()
const instructors = require('./app/controllers/instructors')
const members = require('./app/controllers/members')

routes.get('/', function(req, res){
    return res.redirect("/instructors")
})
routes.get('/instructors', instructors.index)
routes.get('/instructors/create', instructors.create) 
routes.get('/instructors/:id/edit', instructors.edit)
routes.get('/instructors/:id', instructors.show)
routes.post('/instructors', instructors.post)
// http verbs
// GET : Receber Resouce
// Post : Criar um Novo Resouce com dados enviados
// PUT : Atualizar resource
// DELET : Deletar Resource
routes.put("/instructors", instructors.put)
routes.delete("/instructores", instructors.delete)

// Menbros

routes.get('/members', members.index)
routes.get('/members/create', members.create)
routes.get('/members/:id/edit', members.edit)
routes.get('/members/:id', members.show)
routes.post('/members', members.post)

// http verbs
// GET : Receber Resouce
// Post : Criar um Novo Resouce com dados enviados
// PUT : Atualizar resource
// DELET : Deletar Resource

routes.put("/members", members.put)

routes.delete("/instructores", members.delete)

module.exports = routes