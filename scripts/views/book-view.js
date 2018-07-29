'use strict';
// TODone Review Why was this using var in our kilokolt labs and not using let?
// There is a convention due to historical reasons to use var with iife syntax.
// Note - I tried using let but it causes runtime errors.
// The reason for the following line of code, which occurs un multiple js files, is to create a single global
// variable that provides all the data and behavior to support the book app web site.
// Checking if it's null with || ensures that if it was already initialized in another js file, it won't be overwritten.
var app = app || {};

//module here is an anonymous function parameter
//It's also the beginning of IIFE which is used to prevent name collisions.
(function (module) {

  const bookView = {};

  bookView.initIndexPage = () => {
    app.Book.all.forEach(a => $('#book-view').append(a.toHtml()));
    // app.showOnly('#book-view')
  };

  bookView.initCreateFormPage = () => {

    // module.showOnly('#new-book-view');

    $('#new-form').on('submit', (event) => {
      event.preventDefault();
      const rawData = {
        author: $('#author').val(),
        title: $('#title').val(),
        isbn: $('#isbn').val(),
        description: $('#description').val(),
        image_url: $('#image-url').val()
      };
      module.Book.createBook(rawData);
    });
  };

  module.bookView = bookView;//this is updating the global variable app via assignment
})(app);//app here is an argument mapping to parameter module. Also, this is IIFE end.

// TODone REVIEW This is equivalent to document.ready?
// ANS: it's shorthand. http://learn.jquery.com/using-jquery-core/document-ready/
// REVIEW: can't do this and use page.js together. I can't figure out why though.
// $(function() {
//   app.Book.fetchAll(app.bookView.initIndexPage);
// });
