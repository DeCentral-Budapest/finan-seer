var express = require('express');
var app = express();

var handlebars = require('./template-engine')(app);

var port =  3000;
app.set('port', port);

require('./routes')(app);

app.listen(port, function() {
  console.log('Express started on http://localhost:' + port + '/ press Ctrl+C to terminate.');
});
