define([
  "backbone",
  "app",
  "collections/clients"
],
function(Backbone, app, Clients) {
  
  var Dashboard = Backbone.View.extend({
    template: "dashboard",
    el:'#body',

    events: {
      "click .add.client": "addClient"
    },

    initialize:function(options) {
      this.clientsColl = new Clients();

      this.listenTo(this.model, "change", this.render);
      this.listenTo(app.session, "change", this.render);

      if (!app.session.get('active')) {
        app.router.navigate('signIn', {trigger: true});
      }

      this.modelSet();
    },

    modelSet: function(resp) {
      var self = this;

      var modelObj = {};
      modelObj.clients = {};
      modelObj.projects = {};

      this.clientsColl.fetch({
        success: function(resp) {
          modelObj.clients.total = resp.length;

          self.model.set(modelObj);
        }
      });
    },

    addClient: function() {
      app.router.navigate('addClient', {trigger: true});
    },

    serialize: function() {
      var context = this.model.toJSON();
      return context;

    }
  });
  return Dashboard;
});