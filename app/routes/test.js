import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class TestRegularRoute extends Route {
  @service store;
  model(params) {
    return this.store.findRecord('demos', `${params.test}/${params.kind}`);
  }
}
