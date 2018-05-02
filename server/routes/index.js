const usersController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the FortNite API',
  }));

  app.post('/api/users', usersController.create);
};
