import Component from '@glimmer/component';
import { isTesting } from '@embroider/macros';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

class MyComponent extends Component {
  get isTesting() {
    return isTesting();
  }
  static {
    setComponentTemplate(precompileTemplate("{{this.isTesting}}", {
      strictMode: true
    }), this);
  }
}

export { MyComponent as default };
//# sourceMappingURL=my-component.js.map
