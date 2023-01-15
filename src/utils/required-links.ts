export function getLibRequiredLinks(): HTMLLinkElement[] {
  return Object.entries({
    styles: 'http://127.0.0.1:8080/style.css'
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
