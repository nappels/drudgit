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
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      };

      this.model.fetch({
        type: "POST", 
        user: data,
        success: function(resp) {
          app.router.navigate('dashboard', {trigger: true});
          app.sessionActive = true;
        },
        error: function(model, err) {
        }
      });

      return false;
    }

  });
  return SignUp;
});