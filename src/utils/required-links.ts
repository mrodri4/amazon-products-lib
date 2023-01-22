export function getLibRequiredLinks(): HTMLLinkElement[] {
  return Object.entries({
    montserrat:
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap',
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
