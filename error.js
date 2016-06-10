'use strict';

class Error {

  notFound(req, res) {
    console.log('Not found: ' + req.url);
    res.status(404);
    res.render('404', {title: 'Not found'})
  }

  serverError(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500', {title: 'Server error'});
  }

}

module.exports = new Error();
