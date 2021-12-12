const mongoose = require('mongoose');

const wallet = new mongoose.Schema({
    guildId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    money: {
        type: Number,
        default: 0
    }
});

const walletModule = mongoose.model("wallet", wallet);
module.exports = walletModule;