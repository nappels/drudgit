define([
  "backbone",
  "app",
  "views/layout/header",
  "views/layout/body"
],
function(Backbone, app, Header, Body) {
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