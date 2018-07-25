'use strict';
// TODone Review Why was this using var in our kilokolt labs and not using let?
// There is a convention due to historical reasons to use var with iife syntax.
// But - it's certainly ok to yet let, especially in this from-scratch-modern-app.
var app = app || {};
// let app = app || {};

//module here is an anonymous function parameter
//It's also the beginning of IIFE which is used to prevent name collisions.
(function (module) {
  const bookView = {};
  bookView.initIndexPage = () => {
    app.Book.all.forEach(a => $('#books').append(a.toHtml()));
  };

  module.bookView = bookView;//this is updating the global variable app via assignment
})(app);//app here is an argument mapping to parameter module. Also, this is IIFE end.