define([
  "backbone",
  "app"
],
function(Backbone, app) {
  
  var NewClient = Backbone.View.extend({
    template: "NewClient",
    el:'#body',

    events: {
      "submit #newClient": "save"
    },

    // initialize: function() {
    //   console.log(app.session.get('user_id'))  
    // },

    save: function() {
      var newClient = {};
      newClient.name = $('.name').val();
      newClient.email = $('.email').val();
      newClient.phone = $('.number').val();
      newClient.notes = $('.notes').val();


      this.model.set(newClient);

      this.model.save(null,{
        success: function(resp) {
          app.router.navigate("clients", {trigger: true});
        },
        error: function() {
          console.log('error');
        }
      });

      return false;
    }

  });
  return NewClient;
});