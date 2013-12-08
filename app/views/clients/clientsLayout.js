define([
  "backbone",
  "app",
  "./clientsList",
  "collections/clients"

],
function(Backbone, app, ClientsList, ClientColl) {
  
  var ClientsLayout = Backbone.View.extend({
    template: "clientsLayout",
    el:'#body',

    // views: {
    //   "client": new ClientModelView({model: this.clientModel})
    // },

    events: {
      // "click .add client": "addClient",
      // "click .add project": "addProject"
    },

    initialize:function(options) {
      this.clientsColl = new ClientColl();
      this.clientsList = new ClientsList({collection: this.clientsColl});
    },

    getClientsList: function() {
      this.clientsColl.fetch({reset: true});
      this.$el.find('.clientsTable').html(this.clientsList.render().el)
    },

    afterRender: function() {
      this.getClientsList();
    }

    // serialize: function() {
    //   var context = this.model.toJSON();
    //   return context;

    // }
  });
  return ClientsLayout;
});