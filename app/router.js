define([
  "backbone",
  "views/layout/baseView",
  "views/auth/signIn",
  "models/signIn",
  "views/auth/signUp",
  "models/signUp",
  "views/dashboard/dashboard"
],
function(
  Backbone,
  Layout,
  SignIn,
  SignInModel,
  SignUp,
  SignUpModel,
  Dashboard
) {

  // Defining the application router.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index",
      "signIn": "signIn",
      "signUp": "signUp",
      "dashboard": "dashboard"
    },

    initialize: function() {
      var layout = new Layout();
      layout.render();
    },

    index: function() {
      
    },

    signIn: function() {
      var signInModel = new SignInModel();
      new SignIn({model:signInModel}).render();
    },

    signUp: function() {
      var signUpModel = new SignUpModel();
      new SignUp({model:signUpModel}).render();
    },

    dashboard: function() {
      new Dashboard().render();
    }
  });

  return Router;
});
