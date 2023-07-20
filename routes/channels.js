// routes/channels.js
const express = require('express');
const router = express.Router();
const Channel = require('../models/Channel');

// List all channels
router.get('/channels', async (req, res) => {
  try {
    const channels = await Channel.find();
    res.json(channels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new channel
router.post('/channels', async (req, res) => {
  const channel = new Channel({
    nom: req.body.nom,
    frequence: req.body.frequence,
    nbre_user: req.body.nbre_user,
    logo: req.body.logo,
  });

  try {
    const newChannel = await channel.save();
    res.status(201).json(newChannel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a channel
router.patch('/channels/:id', async (req, res) => {
  try {
    const updatedChannel = await Channel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedChannel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a channel
router.delete('/channels/:id', async (req, res) => {
  try {
    const deletedChannel = await Channel.findByIdAndRemove(req.params.id);
    res.json(deletedChannel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
