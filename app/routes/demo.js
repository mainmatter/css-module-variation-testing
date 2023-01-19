import Route from '@ember/routing/route';

export default class DemoBasicRoute extends Route {
  model(params) {
    return params;
  }
}
