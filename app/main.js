// Break out the application running from the configuration definition to
// assist with testing.
require(["config"], function() {
  // Kick off the application.
  require(["app", "router", "models/session", "views/layout/baseView"], function(app, Router, Session, Layout) {
    // Define your master router on the application namespace and trigger all
    // navigation from this instance.
    app.session = new Session();

    var storedSession = JSON.parse(window.localStorage.getItem('session')) || {};
    if (storedSession.active) {
      app.session.set('active', true);
    }

    app.router = new Router({
      layout: new Layout(),
      session: app.session.get('active')
    });

    // Trigger the initial route and enable HTML5 History API support, set the
    // root folder to '/' by default.  Change in app.js.
    Backbone.history.start({ pushState: true, root: app.root });
  });
});
