define([
  "backbone",
  "views/layout/baseView",
  "views/auth/signIn",
  "models/signIn",
  "views/auth/signUp",
  "models/signUp",
  "views/dashboard/dashboard",
  "models/dashboard",
  "views/clients/clientsLayout",
  "collections/clients",
  "views/clients/newClient",
  "models/client"
],
function(
  Backbone,
  Layout,
  SignIn,
  SignInModel,
  SignUp,
  SignUpModel,
  Dashboard,
  DashboardModel,
  Clients,
  ClientsCollection,
  NewClient,
  ClientModel
) {

  // Defining the application router.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index",
      "signIn": "signIn",
      "signUp": "signUp",
      "dashboard": "dashboard",
      "clients": "clients",
      "addClient": "addClient"
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
      var dashModel = new DashboardModel();
      new Dashboard({model: dashModel}).render();
    },

    clients: function() {
      new Clients().render();
    },

    addClient: function() {
      var clientModel = new ClientModel();
      new NewClient({model: clientModel}).render();
    }
  });

  return Router;
});
