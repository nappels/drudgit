define([
  "backbone",
  "app"
],
function(Backbone, app) {
  
  var Aside = Backbone.View.extend({
    template: "aside",

    events: {
      "click .logout": "logout" 
    },

    initialize: function() {
      this.listenTo(this.model, "change", this.render);
      this.listenTo(app.session, "change", this.render);
      if (app.session.get('active')) {
        this.getUser();
      }
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

    logout: function() {
      var successHandler = function() {
        app.tempStorage.clear('session');
        app.session.set('active', false);
        app.router.navigate('signIn', {trigger: true});
      };
      $.ajax({
        url: '/api/logout',
        success: successHandler
      });
    },
    // afterRender: function() {
    //   console.log('aside render')
    // },
    serialize: function() {
      var model = this.model.toJSON();
      return this.model.toJSON();
    }
  });
  return Aside;
});