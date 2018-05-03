const Player = require('../models').Player;

module.exports = {
  create(req, res) {
    console.log(req.body);
    return Player
      .create({
        username: req.body.username,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
};
