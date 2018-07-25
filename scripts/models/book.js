'use strict';
// TODone Review Why was this using var in our kilokolt labs and not using let?
// There is a convention due to historical reasons to use var with iife syntax.
// But - it's certainly ok to yet let, especially in this from-scratch-modern-app.
// var app = app || {};
let app = app || {};

//module here is an anonymous function parameter
//It's also the beginning of IIFE which is used to prevent name collisions.
(function (module) {

  function Book(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  Book.all = [];

  Book.prototype.toHtml = function () {
    const template = Handlebars.compile($('#book-template').text());
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

  module.Book = Book;//this is updating the global variable app via assignment
})(app);//app here is an argument mapping to parameter module. Also, this is IIFE end.
