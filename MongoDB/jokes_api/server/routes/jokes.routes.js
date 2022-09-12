const express = require('express');

const {
  handleCreateJoke,
  handleGetAllJokes,
  handleGetJokeById,
  handleDeleteJokeById,
  handleUpdateJokeById,
} = require('../controllers/Joke.controller');

const router = express.Router();

router.post('/api/jokes/new', handleCreateJoke);
router.get('/api/jokes/:_id', handleGetJokeById);
router.get('/api/jokes', handleGetAllJokes);
router.delete('/api/jokes/delete/:_id', handleDeleteJokeById);
router.put('/api/jokes/update/:_id', handleUpdateJokeById);

module.exports = { JokeRouter: router };