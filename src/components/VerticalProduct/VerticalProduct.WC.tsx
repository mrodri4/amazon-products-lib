import { ProductProperties } from '#enums';
import type { ProductProps } from '#types';

import { WebComponent } from '../WebComponent/WebComponent';
import { VerticalProduct } from './VerticalProduct';

export class VerticalProductWc extends WebComponent<ProductProps> {
  constructor() {
    super(Object.values(ProductProperties));
  }

  protected render(props: ProductProps): void {
    this.root.render(
      <VerticalProduct {...props} />
    );
  }
}

if (!customElements.get('apl-vertical-product')) {
  customElements.define('apl-vertical-product', VerticalProductWc);
}
