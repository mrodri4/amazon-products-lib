import { ProductProperties } from '#enums';
import type { ProductProps } from '#types';

import { WebComponent } from '../WebComponent/WebComponent';
import { HorizontalProduct } from './HorizontalProduct';

export class HorizontalProductWc extends WebComponent<ProductProps> {
  constructor() {
    super(Object.values(ProductProperties));
  }

  protected render(props: ProductProps): void {
    this.root.render(
      <HorizontalProduct {...props} />
    );
  }
}

if (!customElements.get('apl-horizontal-product')) {
  customElements.define('apl-horizontal-product', HorizontalProductWc);
}
