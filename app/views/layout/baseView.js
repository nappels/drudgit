define([
  "backbone",
  "app",
  "views/layout/header",
  "views/layout/body",
  "views/layout/aside",
  "models/user"
],
function(Backbone, app, Header, Body, Aside, User) {
  var Layout = Backbone.View.extend({
    template: "layout",
    el: "#mainContainer",

    views: {
      "header": new Header(),
      "body": new Body()
    },

    initialize: function() {
      this.render();
      this.listenTo(app.session, "change", this.render);
      console.log(Backbone.history.fragment);
    },

    renderSubviews: function() {
      if (app.session.get('active')) {
        var userModel = new User();
        var aside = new Aside({model: userModel});

        this.$el.find('#aside').html(aside.render().el);
      }

      this.$el.find('#header').html(this.views.header.render().el);
      this.$el.find('#body').html(this.views.body.render().el);
    },

    afterRender:function() {
      this.renderSubviews();
    },

    serialize: function() {
      var context = {};
      context.session = false;
      if (app.session.get('active')) {
        context.session = true;
      }
      return context;
    }
  });
  return Layout;
});