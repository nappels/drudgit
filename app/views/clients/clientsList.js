define([
  "backbone",
  "app",
  "./clientModel",
  "models/client"

],
function(Backbone, app, ClientModelView, Client) {
  
  var ClientsList = Backbone.View.extend({
    template: "clientsList",

    initialize:function(options) {
      this.listenTo(this.collection, "reset", this.render);
    },

    add: function(model) {
      this.clientModelView = new ClientModelView({model: model});
      this.$el.find('.clientsBody').append(this.clientModelView.render().el);
    },

    addAll: function() {
      var self = this;

      this.collection.each(function(x) {
        self.add(x);
      });

    },
    afterRender: function() {
      this.addAll();
    }

    // serialize: function() {
    //   var context = this.model.toJSON();
    //   return context;

    // }
  });
  return ClientsList;
});