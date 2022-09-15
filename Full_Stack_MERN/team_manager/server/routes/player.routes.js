const express = require('express');

const {
  handleCreatePlayer,
  handleGetAllPlayers,
  handleGetPlayerById,
  handleDeletePlayerById,
  handleUpdatePlayerById,
} = require('../controllers/player.controller');

const router = express.Router();

router.post('/', handleCreatePlayer);
router.post('/many', handleCreateManyPlayers);
router.get('/:id', handleGetPlayerById);
router.get('/', handleGetAllPlayers);
router.delete('/:id', handleDeletePlayerById);
router.put('/:id', handleUpdatePlayerById);

module.exports = { playerRouter: router };