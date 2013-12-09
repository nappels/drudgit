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
      console.log('layout');
    },

    renderSubviews: function() {
      var userModel = new User();
      console.log(userModel)
      var aside = new Aside({model: userModel});

      this.$el.find('#aside').html(aside.render().el);

      this.$el.find('#header').html(this.views.header.render().el);
      this.$el.find('#body').html(this.views.body.render().el);
    },

    afterRender:function() {
      this.renderSubviews();
    },

    serialize: function() {
      return {
        user: "noah"
      };
    }
  });
  return Layout;
});