define([
  "backbone",
  "app"

],
function(Backbone, app) {
  
  var ClientModel = Backbone.View.extend({
    template: "clientModel",
    tagName: "tr"
  });
  return ClientModel;
});