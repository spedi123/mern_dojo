const mongoose = require('mongoose'); 

const PlayerSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, '{PATH} is required.'],
        minlength: [2, '{PATH} must be at least {MINLENGTH} characters.'],
    },
    position: {
        type: String,
        required: [true, '{PATH} is required.'],
        minlength: [2, '{PATH} must be at least {MINLENGTH} characters.'],
    },
    gameStatus:{
        gameOne: String,
        gameTwo: String,
        gameThree: String
    }
}, { timestamps: true });

const Player = mongoose.model("Player", PlayerSchema);

module.exports = { Player: Player};