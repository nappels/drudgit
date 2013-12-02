define([
  "backbone",
  "views/layout/baseView",
  "views/auth/signIn",
  "models/signIn",
  "views/auth/signUp",
  "models/signUp"
],
function(
  Backbone,
  Layout,
  SignIn,
  SignInModel,
  SignUp,
  SignUpModel
) {

  // Defining the application router.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index",
      "signin": "signIn",
      "signup": "signup"
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

    signup: function() {
      var signUpModel = new SignUpModel();
      new SignUp({model:signUpModel}).render();
    }
  });

  return Router;
});
