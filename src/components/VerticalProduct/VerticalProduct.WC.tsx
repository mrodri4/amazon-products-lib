import { ProductProperties } from '../../enums/Product.properties';
import type { ProductProps } from '../../types/Product.type';

import { WebComponent } from '../WebComponent/WebComponent';
import { VerticalProduct } from './VerticalProduct';

export class VerticalProductWc extends WebComponent<ProductProps> {
  constructor() {
    super(ProductProperties);
  }

  protected render(props: ProductProps): void {
    this.root.render(
      <VerticalProduct {...props} />
    );
  }
}

customElements.define('apl-vertical-product', VerticalProductWc);
