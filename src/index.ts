import { isTesting } from '@embroider/macros';

export default class MyAddon {
  get isTesting () {
    return isTesting();
  }
}
