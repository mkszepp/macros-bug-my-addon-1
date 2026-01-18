import Component from '@glimmer/component';
import { isTesting } from '@embroider/macros';

export interface Signature {
  Element: HTMLElement;
}

export default class MyComponent extends Component<Signature> {
  get isTesting() {
    return isTesting();
  }

  <template>{{this.isTesting}}</template>
}
