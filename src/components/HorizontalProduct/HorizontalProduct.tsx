import type { ProductProps } from '#types';
import { BuyCta } from '../BuyCta/BuyCta';

export function HorizontalProduct(props: ProductProps) {
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
    <div className='apl-border-[2px] apl-box-border apl-rounded-sm apl-px-6 apl-py-10 apl-max-w-lg apl-relative apl-flex'>
      {
        (typeof bestseller === 'number') && (
          <span className='apl-font-semibold apl-text-xs apl-uppercase apl-absolute apl-top-2 -apl-left-2 apl-p-1 apl-bg-cyan-300'>Bestseller nº {bestseller}</span>
        )
      }
      <a
        className='apl-block apl-mr-8 apl-max-w-[40%]'
        href={url}
        title={label}
        rel="nofollow noopener sponsored noreferrer"
        target="_blank">
        <img decoding="async" src={image} alt={label} />
      </a>
      <div className='apl-flex apl-flex-col apl-min-h-full apl-justify-between'>
        <a
          className='amazon-product-title apl-mt-0'
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
        <BuyCta text={cta} url={url} />
      </div>
    </div>
  );
}
