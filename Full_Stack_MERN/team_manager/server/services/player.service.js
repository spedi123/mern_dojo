const { Player } = require('../models/player.model');

const createPlayer = async (data) => {
  console.log('service: createPlayer');

  const player = await Player.create(data);
  return player;
};

const getAllPlayers = async () => {
  const players = await Player.find();
  return players;
};

const getPlayerById = async (id) => {
  const player = await Player.findById(id);
  return player;
};

const deletePlayerById = async (id) => {
  const player = await Player.findByIdAndDelete(id);
  return player;
};

const updatePlayerById = async (id, data) => {
  const player = await Player.findByIdAndUpdate(id, data, {
    // Re-run validations.
    runValidators: true,
    // Return the updated Player.
    new: true,
  });

  return player;
};


module.exports = {
  createPlayer,
  getAllPlayers,
  getPlayerById,
  deletePlayerById,
  updatePlayerById,
};