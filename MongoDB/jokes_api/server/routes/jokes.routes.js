const express = require('express');

const {
  handleCreateJoke,
  handleGetAllJokes,
  handleGetJokeById,
  handleDeleteJokeById,
  handleUpdateJokeById,
} = require('../controllers/jokes.controller');

const router = express.Router();

router.post('/new', handleCreateJoke);
router.get('/:id', handleGetJokeById);
router.get('/', handleGetAllJokes);
router.delete('/delete/:id', handleDeleteJokeById);
router.put('/update/:id', handleUpdateJokeById);

module.exports = { JokeRouter: router };