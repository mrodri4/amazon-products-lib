export function getLibRequiredLinks(): HTMLLinkElement[] {
  return Object.entries({
    styles: 'https://github.com/mrodri4/amazon-products-lib/blob/main/dist/style.css'
  }).reduce<HTMLLinkElement[]>((prev, [name, url]) => {
    const alias = `apl-${name}`;
    const link = document.createElement('link');

    link.setAttribute('alias', alias);
    link.href = url;
    link.rel = 'stylesheet';

    prev.push(link);

    return prev;
  }, []);
}
