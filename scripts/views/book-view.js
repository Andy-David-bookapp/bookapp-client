'use strict';
// TODO Review Why was this using var in our kilokolt labs and not using let?
var app = app || {};

//It's also the beginning of IIFE which is used to prevent name collisions.
(function (module) {
  const bookView = {};
  bookView.initIndexPage = () => {
    app.Book.all.forEach(a => $('#books').append(a.toHtml()));
  };

  module.bookView = bookView;//this is updating the global variable app via assignment
})(app);//app here is an argument mapping to parameter module. Also, this is IIFE end.