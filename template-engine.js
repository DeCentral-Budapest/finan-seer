module.exports = function(app){
  var handlebars = require('express-handlebars').create({
    extname: '.html',
    defaultLayout: 'main'
  });
  app.engine('html', handlebars.engine);
  app.set('view engine', 'html');
  return handlebars;
}
