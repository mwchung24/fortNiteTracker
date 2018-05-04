const playersController = require('../controllers').players;
const https = require('https');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the FortNite API',
  }));

  app.post('/api/players', playersController.create);
  app.get('/api/players', playersController.list);
  app.get('/playerStats', (req, res) => {
    console.log(req.body);
  });
};
