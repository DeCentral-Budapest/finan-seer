module.exports = function(app) {
  var main = require('./main');
  var serveStatic = require('serve-static');
  var error = require('./error');

  app.get('/', main.index);
  app.get('/err', main.err);

  app.use(serveStatic(__dirname + '/static'));

  app.use(error.notFound);
  app.use(error.serverError);
}
