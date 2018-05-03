const playersController = require('../controllers').players;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the FortNite API',
  }));

  app.post('/api/players', playersController.create);
};
