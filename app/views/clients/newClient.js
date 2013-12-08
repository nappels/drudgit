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
      
    // },

    save: function() {
      var newClient = {};

      newClient.name = 'Another Client';
      // newClient.name = $('.name').val();
      newClient.email = 'nappel@aquto.com';
      // newClient.email = $('.email').val();
      newClient.phone_number = '6178777254';
      // newClient.phone = $('.number').val();
      newClient.notes = 'Test notes';
      // newClient.notes = $('.notes').val();

      this.model.set(newClient);

      // console.log(this.model.toJSON());
      this.model.save(null,{
        success: function(resp) {
          console.log(resp);
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