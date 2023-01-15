import './index.css';
import { getLibRequiredLinks } from './utils/required-links';

export * from './components';

getLibRequiredLinks().forEach((link) => {
  document.head.appendChild(link);
});
