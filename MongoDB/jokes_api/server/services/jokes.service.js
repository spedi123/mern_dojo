const { Joke } = require('../models/jokes.model');

const createJoke = async (data) => {
  console.log('service: createJoke');

  const joke = await Joke.create(data);
  return joke;
};

const getAllJokes = async () => {
  const jokes = await Joke.find();
  return jokes;
};

const getJokeById = async (id) => {
  const joke = await Joke.findById(id);
  return joke;
};

const deleteJokeById = async (id) => {
  const joke = await Joke.findByIdAndDelete(id);
  return joke;
};

const updateJokeById = async (id, data) => {
  const joke = await Joke.findByIdAndUpdate(id, data, {
    runValidators: true,
    new: true,
  });

  return joke;
};

module.exports = {
  createJoke: createJoke,
  getAllJokes,
  getJokeById,
  deleteJokeById,
  updateJokeById,
};