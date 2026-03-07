import { isTesting } from '@embroider/macros';

class MyAddon {
  get isTesting() {
    return isTesting();
  }
}

export { MyAddon as default };
//# sourceMappingURL=index.js.map
