define([
  "backbone",
  "app"
],
function(Backbone, app) {
  var Client = Backbone.Model.extend({
    url: '/api/clients.json',

    defaults: {
      name: "",
      email:"",
      phone: "",
      notes: ""
    }
  });
  return Client;
});