define([
  "backbone",
  "app",
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
  app,
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

    initialize: function(options) {
      // var layout = new Layout();
      // layout.render();
      this.session = options.session;

      if (!this.session) {
        this.navigate('signIn', {trigger: true});
      }
    },

    // index: function() {
      
    // },

    signIn: function() {
      // if (this.session) {
        // this.navigate('dashboard', {trigger:true});
      // } 
      // else {
        var signInModel = new SignInModel();
        new SignIn({model:signInModel}).render();
      // }
    },

    signUp: function() {
      var signUpModel = new SignUpModel();
      new SignUp({model:signUpModel}).render();
    },

    dashboard: function() {
      // if (this.session) {
        var dashModel = new DashboardModel();
        new Dashboard({model: dashModel});
      // }
      // else {
      //   console.log('no session')
      //   this.navigate('signIn', {trigger: true})
      // }
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
