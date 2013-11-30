define([
  "backbone",
  "app",
  "modules/layout/header",
  "modules/layout/body"
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
      this.insertView(this.views.header);
      this.insertView(this.views.body);
    },

    beforeRender:function() {
      this.renderSubviews();
    },

    serialize: function() {
      return {
        user: "noah"
      }
    }
  });
  return Layout;
});