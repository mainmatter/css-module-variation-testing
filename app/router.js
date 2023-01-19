import EmberRouter from '@ember/routing/router';
import config from 'css-module-testing/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('test', function () {
    this.route('regular', function () {
      this.route('normal');
      this.route('ember-css-modules');
      this.route('vue');
      this.route('svelt');
      this.route('simple-append');
    });
  });

  this.route('demo', function () {
    this.route('regular');
  });
});
