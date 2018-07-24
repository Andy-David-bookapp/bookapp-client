'use strict';
// TODO Review Why was this using var in our kilokolt labs and not using let?
var app = app || {};

//module here is an anonymous function parameter
//It's also the beginning of IIFE which is used to prevent name collisions.
(function (module) {

  let productionApiUrl = 'https://ah-dh-bookapp-server.herokuapp.com/';
  let developmentApiUrl = 'http://localhost:3000';

  module.isProduction = /^(?!localhost|127)/.test(window.location.hostname);

  module.ENVIRONMENT = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
  };

  // TODO we need to add the show hide stuff here on module

})(app);//app here is an argument mapping to parameter module. Also, this is IIFE end.