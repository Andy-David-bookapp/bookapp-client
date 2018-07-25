'use strict'

var app = app || {};

(function(module){
  const errorView = {};

  errorView.initErrorPage = err => {
    app.showOnly('.errorView');
    $('#error-message').empty();
    $('#error-message').append(app.render('error-template', err) );
  };
  module.View = errorView;
})(app);