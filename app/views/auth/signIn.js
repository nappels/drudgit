define([
  "backbone",
  "app"
],
function(Backbone, app) {
	
  var SignIn = Backbone.View.extend({
    template: "signIn",
    el:"#body",

    events: {
      "submit #signIn": "signIn"
    },

    initialize:function() {
      this.listenTo(app.session, "change", this.render);
    },

    signIn: function() {
      var self = this;
      var data = {
        user: {
          email: $('.email').val(),
          password: $('.password').val(),
          remember_me: "0",
        },
        commit: "Sign in"
      };

      this.model.set(data);

      this.model.save(null,{
        success: function(resp) {
          var session = {
            userId: resp.id,
            active: true
          };
          app.session.set(session);
          app.tempStorage.set('session', session);
          app.router.navigate("dashboard", {trigger: true});
        },
        error: function() {
          console.log('error');
        }
      });
      return false;
    }
  });
  return SignIn;
});