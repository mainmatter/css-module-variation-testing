import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DemoController extends Controller {
  availableVariations = [
    'normal',
    'ember-css-modules',
    'simple-append',
    'svelt',
    'vue',
  ];

  queryParams = ['variations'];

  @tracked variations = this.availableVariations;

  @action
  isChecked(variation) {
    return this.variations.includes(variation);
  }

  @action
  changed(variation) {
    let newVariations;

    if (this.variations.includes(variation)) {
      newVariations = this.variations.filter((item) => item !== variation);
    } else {
      newVariations = [...this.variations, variation];
    }

    this.variations = newVariations.sort(
      (a, b) =>
        this.availableVariations.indexOf(a) -
        this.availableVariations.indexOf(b)
    );
  }
}
