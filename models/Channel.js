// models/Channel.js
const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  frequence: { type: String, required: true },
  nbre_user: { type: Number, required: true },
  logo: { type: String, required: true },
});

const Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel;
