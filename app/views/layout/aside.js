define([
  "backbone",
  "app"
],
function(Backbone, app) {
  
  var Aside = Backbone.View.extend({
    template: "aside",

    initialize: function() {
      this.listenTo(this.model, "change", this.render);
      this.getUser();
    },

    getUser: function() {
      var self = this;
      this.model.fetch({
        success: function() {
          self.getGravatar();
        }
      });
    },

    getGravatar: function() {
      var self = this;
      $.ajax({
        url: '/api/users/gravatar?email=' + self.model.get('email'),
        success: function(resp) {
          self.model.set('gravatarUrl', resp.imageUrl);
        }
      });
    },
    // afterRender: function() {
    //   console.log('aside render')
    // },
    serialize: function() {
      var model = this.model.toJSON();
      console.log(model);
      return this.model.toJSON();
    }
  });
  return Aside;
});