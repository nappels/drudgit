define([
  "backbone",
  "app"
],
function(Backbone, app) {
  var SignIn = Backbone.Model.extend({

    url: '/api/users/sign_in',
    paramRoot: 'user',

    defaults: {
      "email": "",
      "password": ""
    },

    fetch: function(options) {
      options = options || {};
      options.data = options.data || {};
      _.extend(options.data,{
        user: options.user
      });
      Backbone.Model.prototype.fetch.call(this, options);
    }

  });
  return SignIn;
});