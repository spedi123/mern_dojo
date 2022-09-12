const {
    createJoke,
    getAllJokes,
    getJokeById,
    deleteJokeById,
    updateJokeById,
  } = require('../services/jokes.service');
  
  const handleCreateJoke = async (req, res) => {
    console.log('controller: handleCreateJoke req.body:', req.body);
  
    try {
      const Joke = await createJoke(req.body);
      return res.json(Joke);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleGetAllJokes = async (req, res) => {
    try {
      const Jokes = await getAllJokes();
      return res.json(Jokes);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleGetJokeById = async (req, res) => {
    try {
      const Joke = await getJokeById(req.params.id);
      return res.json(Joke);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleDeleteJokeById = async (req, res) => {
    try {
      const Joke = await deleteJokeById(req.params.id);
      return res.json(Joke);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  const handleUpdateJokeById = async (req, res) => {
    try {
      const Joke = await updateJokeById(req.params.id, req.body);
      return res.json(Joke);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  
  module.exports = {
    handleCreateJoke: handleCreateJoke,
    handleGetAllJokes,
    handleGetJokeById,
    handleDeleteJokeById,
    handleUpdateJokeById,
  };