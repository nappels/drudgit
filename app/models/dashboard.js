define([
  "backbone",
  "app"
],
function(Backbone, app) {
  var Dashboard = Backbone.Model.extend({
    // defaults: {
    //   clients: {
    //     total: "",
    //     active: ""
    //   },
    //   projects: {
    //     total: "",
    //     active: "",
    //     complete: ""
    //   }
    // }
    defaults: {
      clients: ""
    }
  });
  return Dashboard;
});