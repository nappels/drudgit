define([
  "backbone",
  "app"
],
function(Backbone, app) {
  
  var SignUp = Backbone.View.extend({
    template: "signUp",
    el:"#body",

    events: {
      "submit #signUp": "signUp"
    },

    initialize:function() {
      
    },

    signUp: function() {
      var email = this.$('.email').val();
      var password = this.$('.password').val();
      var passwordConfirmation = this.$('.passwordConfirmation').val();

      var data = {
        user: {
          email: email,
          password: password,
          password_confirmation: passwordConfirmation
        },
        commit: "Sign up"
      };

      this.model.set(data);

      // console.log(data)
      this.model.save(null, {
        success:function(resp) {
          var session = {
            userId: resp.id,
            active: true
          };
          app.session.set(session);
          app.tempStorage.set('session', session);
          app.router.navigate("dashboard", {trigger: true});
        }
      });
      // this.model.fetch({
      //   type: "POST", 
      //   user: data,
      //   success: function(resp) {
      //     app.router.navigate('dashboard', {trigger: true});
      //     app.sessionActive = true;
      //   },
      //   error: function(model, err) {
      //   }
      // });

      return false;
    }

  });
  return SignUp;
});