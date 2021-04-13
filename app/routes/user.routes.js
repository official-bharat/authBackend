const verifyToken = require('../controllers/VerifyToken');

module.exports = (app) => {
  const users = require('../controllers/user.controllers');

  // Create a new Note
  app.post('/users', users.create);

  // Retrieve all users
  app.get('/users', users.findAll);

  // Retrieve a single Note with noteId
  app.get('/users/:userId', verifyToken, users.findOne);

  // Update a Note with userId
  app.put('/users/:userId', verifyToken, users.update);

  // Delete a Note with userId
  app.delete('/users/:userId', verifyToken, users.delete);

  app.get('/login', users.login);
};
