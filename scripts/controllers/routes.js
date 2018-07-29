'use strict';

page('/', ctx => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/new', ctx => app.bookView.initCreateFormPage());
// page('/books/:book_id', ctx => app.book.fetchOne(ctx, app.bookView.initDetailPage));
page();
