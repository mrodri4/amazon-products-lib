import type { ProductProps } from '#types';
import { BuyCta } from '../BuyCta/BuyCta';

export function VerticalProduct(props: ProductProps) {
  const {
    bestseller,
    cta = 'Comprar en Amazon',
    label,
    image,
    url,
    tag,
    price
  } = props;

  return (
    <div className='apl-border-[1px] apl-rounded-sm apl-px-3 apl-py-4 apl-max-w-sm apl-relative'>
      {
        (typeof bestseller === 'number') && (
          <span className='apl-font-semibold apl-text-xs apl-uppercase apl-absolute apl-top-2 -apl-left-2 apl-p-1 apl-bg-cyan-300'>Bestseller nº {bestseller}</span>
        )
      }
      <a
        className='apl-block apl-mb-4'
        href={url}
        title={label}
        rel="nofollow noopener sponsored noreferrer"
        target="_blank">
        <img decoding="async" src={image} alt={label} />
      </a>
      <div>
        <a
          className='amazon-product-title'
          href={url}
          title={label}
          rel="nofollow noopener sponsored noreferrer"
          target="_blank">
          {label}
        </a>
        <div className='apl-flex apl-items-center apl-justify-between apl-my-4'>
          <a
            className='apl-inline-block'
            href={`https://www.amazon.es/gp/prime${tag ? `/?tag=${tag}` : ''}`}
            title="Amazon Prime"
            rel="nofollow noopener sponsored noreferrer"
            target="_blank">
            <i className='amazon-prime-icon' />
          </a>
          <span className='amazon-product-price'>{price}</span>
        </div>
      </div>
      <BuyCta text={cta} url={url} />
    </div>
  );
}
