const playersController = require('../controllers').players;
const https = require('https');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the FortNite API',
  }));

  app.post('/api/players', playersController.create);
  app.get('/api/players', playersController.list);
  app.post('/playerStats', (req, res) => {
    let username = req.body.username;
    let platform = req.body.platform;

    // Bring in the Fortnite module
    const Client = require('fortnite');
    // Create an instance of the client with your API Key
    const fortnite = new Client('5748dae0-3485-4775-9286-fa0682ff04ce');

    // Get stats of a player
    fortnite.user(username, platform).then((response) => {
      res.send(response);
    });
  });
};
