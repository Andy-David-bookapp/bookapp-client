'use strict'

var app = app || {};

(function(module){

  const errorView = {};

  errorView.initErrorPage = error => {

    const template = Handlebars.compile($('#error-template').text());

    app.hide($('.container'));
    $('#error-message').empty();
    $('#error-message').append(template(error));
    app.showOnly($('#error-view'));
  };
  module.errorView = errorView;

})(app);