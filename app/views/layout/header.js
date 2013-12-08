define([
  "backbone",
  "app",
  "views/layout/nav"
],
function(Backbone, app, Nav) {
	
  var Header = Backbone.View.extend({
    template: "header",
    tagName: "header",

    views: {
      "nav": new Nav()
    },

    initialize:function() {
      console.log('header');
    },
    renderSubviews: function() {
      this.$el.find('.navWrapper').html(this.views.nav.render().el);
    },
    afterRender: function() {
      this.renderSubviews();
    },
    serialize: function() {
      var context = context || {};
      // context.header = app.headerTitle;

    }
  });
  return Header;
});