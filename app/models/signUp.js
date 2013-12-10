define([
  "backbone",
  "app"
],
function(Backbone, app) {
  var SignIn = Backbone.Model.extend({

    url: '/api/users.json',
    paramRoot: 'user',

    defaults: {
      user: {
        email: "",
        password: "",
        password_confirmation: ""  
      }
    }

    // fetch: function(options) {
    //   options = options || {};
    //   options.data = options.data || {};
    //   _.extend(options.data,{
    //     user: options.user
    //   });
    //   Backbone.Model.prototype.fetch.call(this, options);
    // }

    // toJSON: function() {
    //   var userObj = {
    //     user: _.clone(this.defaults)
    //   };
    //   return userObj;
    // }

  });
  return SignIn;
});