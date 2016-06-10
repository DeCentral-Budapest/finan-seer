'use strict';

class Main {

  index(req, res) {
    res.render('index', {title: 'Home'});
  }

  err(req, res) {
    throw new Error('Some huge problem');
  }

}

module.exports = new Main();
