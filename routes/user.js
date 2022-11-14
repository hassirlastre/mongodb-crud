const express = require('express');
const userSchema = require('../models/user');

const router = express.Router();

//Crear usuario
router.post('/users', (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Ver usuarios
router.get('/users', (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Ver un usuario por id
router.get('/users/:id', (req, res) => {
  const{id} = req.params
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Borrar un usuario por id
router.delete('/users/:id', (req, res) => {
  const{id} = req.params
  userSchema
    .remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Actualizar un usuario
router.put('/users/:id', (req, res) => {
  const{id} = req.params
  const {name, age, email} = req.body
  userSchema
    .updateOne({_id: id}, {$set:{name, age, email}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;