'use strict';

var app = app || {};

var bookView = {};

(function () {
  bookView.initIndexPage = () => {
    app.Book.all.forEach(a => $('#books').append(a.toHtml()));
  };
})(app);