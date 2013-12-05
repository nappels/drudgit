define([
  "backbone",
  "app"
],
function(Backbone, app) {
  
  var Dashboard = Backbone.View.extend({
    template: "dashboard",
    el:'#body',

    initialize:function() {
      console.log('dash');
    },
    serialize: function() {
      var context = context || {};
      // context.header = app.headerTitle;

    }
  });
  return Dashboard;
});