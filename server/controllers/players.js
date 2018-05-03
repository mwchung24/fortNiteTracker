const Player = require('../models').Player;

module.exports = {
  create(req, res) {
    return Player
      .create({
        username: req.body.username,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Player
      .all()
      .then(players => res.status(200).send(players))
      .catch(error => res.status(400).send(error));
  },
};
