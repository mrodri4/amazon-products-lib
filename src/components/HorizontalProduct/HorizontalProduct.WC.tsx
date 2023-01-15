import type { ProductProps } from '../../types/Product.type';

import { WebComponent } from '../WebComponent/WebComponent';
import { HorizontalProduct } from './HorizontalProduct';

export class HorizontalProductWc extends WebComponent<ProductProps> {
  constructor() {
    super(['image', 'url', 'label', 'price']);
  }

  protected render(props: ProductProps): void {
    this.root.render(
      <HorizontalProduct {...props} />
    );
  }
}

customElements.define('apl-vertical-product', HorizontalProductWc);
