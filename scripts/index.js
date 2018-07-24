'use strict';
var app = app || {};

(function (module) {

  let productionApiUrl = 'https://ah-dh-bookapp-server.herokuapp.com/';
  let developmentApiUrl = 'http://localhost:3000';

  module.isProduction = /^(?!localhost|127)/.test(window.location.hostname);

  module.ENVIRONMENT = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
  };

  function Book(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }
  // TODO should this be outside the iffe?
  Book.all = [];

  Book.prototype.toHtml = function () {
    var template = Handlebars.compile($('#book-template').text());
    return template(this);
  };

  Book.loadAll = bookData => {
    Book.all = bookData.map(element => new Book(element));

  };

  Book.fetchAll = callback => {
    $.get('/books')
      .then(results => {
        Book.loadAll(results);
        callback();
      })
  };

})(app);