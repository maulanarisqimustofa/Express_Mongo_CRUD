const mongoose = require("mongoose");

const pokemonScheme = new mongoose.Schema({
    number: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    types: {
        type: Array,
        required: true,
    },
});
module.exports = mongoose.model("Pokemon", pokemonScheme);