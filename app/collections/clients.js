define([
  "backbone",
  "app",
  "models/client"
],
function(Backbone, app, Client) {
  var Clients = Backbone.Collection.extend({
    model: Client,
    url: '/api/clients.json'
  });
  return Clients;
});