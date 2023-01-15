import classNames from 'classnames';

import type { BuyCtaProps } from '../../types/BuyCta.type';

import './BuyCta.css';

export function BuyCta(props: BuyCtaProps) {
  const {
    size = 'md',
    text = 'Comprar en Amazon',
    url
  } = props;

  return (
    <a
      className={classNames(
        'amazon-cta',
        size
      )}
      href={url}
      title={text}
      rel="nofollow noopener sponsored noreferrer"
      target="_blank">
      {text}
    </a>
  );
}
