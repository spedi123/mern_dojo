const { Joke } = require('../models/jokes.model');

const createJoke = async (data) => {
  console.log('service: createJoke');

  const Joke = await Joke.create(data);
  return Joke;
};

const getAllJokes = async () => {
  const Jokes = await Joke.find();
  return Jokes;
};

const getJokeById = async (id) => {
  const Joke = await Joke.findById(id);
  return Joke;
};

const deleteJokeById = async (id) => {
  const Joke = await Joke.findByIdAndDelete(id);
  return Joke;
};

const updateJokeById = async (id, data) => {
  const Joke = await Joke.findByIdAndUpdate(id, data, {
    runValidators: true,
    new: true,
  });

  return Joke;
};

module.exports = {
  createJoke: createJoke,
  getAllJokes,
  getJokeById,
  deleteJokeById,
  updateJokeById,
};