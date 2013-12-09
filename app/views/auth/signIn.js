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
      // this.model.fetch();
    },

    signIn: function() {
      var self = this;
      var user = {};
      user.email = $('.email').val();
      user.password = $('.password').val();
      // user.authenticity_token = '0vApiT/3GApr6Xe/mPfsW57oMs+aL/r3aw2CpTMnM4o=';

      this.model.set(user);

      // console.log(user);

      // this.model.save(null,{
      //   success: function(resp) {
      //     console.log(resp);
      //   },
      //   error: function() {
      //     console.log('error');
      //   }
      // });

      this.model.fetch({
        user: user,
        type: "POST",
        success: function(resp) {
          console.log(resp)
          // self.model.trigger("authentication:logged_in");
          // app.router.navigate('dashboard', {trigger: true});
          // app.sessionActive = true;
        },
        error: function(model, err) {
        }
      });
      return false;
    }
  });
  return SignIn;
});