import EmberRouter from '@ember/routing/router';
import config from 'css-module-testing/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('test', { path: 'test/:test/:kind' });

  this.route('demo', function () {
    this.route('regular');
  });
});
