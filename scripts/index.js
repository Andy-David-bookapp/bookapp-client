'use strict';
// TODone Review Why was this using var in our kilokolt labs and not using let?
// There is a convention due to historical reasons to use var with iife syntax.
// But - it's certainly ok to yet let, especially in this from-scratch-modern-app.
// var app = app || {};
let app = app || {};

//module here is an anonymous function parameter
//It's also the beginning of IIFE which is used to prevent name collisions.
(function (module) {

  // See the server side js for how this is used to connect to a db
  let productionApiUrl = 'https://ah-dh-bookapp-server.herokuapp.com/';
  let developmentApiUrl = 'http://localhost:3000';

  module.isProduction = /^(?!localhost|127)/.test(window.location.hostname);

  module.ENVIRONMENT = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
  };

  // TODO we need to add the show hide stuff here on module
  // look at single page app lab.
  module.showOnly = (selector) => {
    $('.container').hide();
    $(selector).show();
  };

  module.render = (templateID,data) => {
    if(!module.bookTemplate){
      module.bookTemplate = Handlebars.compile($(`#${templateID}`).text());
    }
    return module.bookTemplate(data);
  }

})(app);// app here is an argument mapping to parameter module. Also, this is IIFE end.