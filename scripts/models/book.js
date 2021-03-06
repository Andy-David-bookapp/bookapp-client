'use strict';
// TODone Review Why was this using var in our kilokolt labs and not using let?
// There is a convention due to historical reasons to use var with iife syntax.
// But - it's certainly ok to yet let, especially in this from-scratch-modern-app.
var app = app || {};
// let app = app || {}; //T TODO update comments above cause let does not work here.

//module here is an anonymous function parameter
//It's also the beginning of IIFE which is used to prevent name collisions.
(function (module) {

  function Book(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  Book.createBook = bookData => {
    $.post(`${app.ENVIRONMENT.apiUrl}/api/v1/books`, bookData)
      .then( () => page('/'))
      .catch()
  };

Book.all = [];

Book.prototype.toHtml = function () {
  const template = Handlebars.compile($('#book-template').text());
  return template(this);
};

Book.loadAll = bookData => {
  Book.all = bookData.map(element => new Book(element));
};
// TODone We need to update route to use api/v1/books
Book.fetchAll = callback => {
  $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books`)
    .then(results => {
      Book.loadAll(results);
      callback(); // TODO will this invoke our app. Refer to lab 11 last bullet; how to support.
    })
};

module.Book = Book;//this is updating the global variable app via assignment
})
(app);//app here is an argument mapping to parameter module. Also, this is IIFE end.
