// Navigation data for the Sidebar
// Icons are imported from actual SVG files in src/assets/icons/
import homeIconUrl from '../assets/icons/homeIcon.svg';
import historyIconUrl from '../assets/icons/historyIcon.svg';
import differencesIconUrl from '../assets/icons/differencesIcon.svg';
import usageIconUrl from '../assets/icons/usageIcon.svg';

const navData = [
  {
    name: 'Home',
    path: '/',
    icon: homeIconUrl,
  },
  {
    name: 'History',
    path: '/history',
    icon: historyIconUrl,
  },
  {
    name: 'Differences',
    path: '/differences',
    icon: differencesIconUrl,
  },
  {
    name: 'Usage',
    path: '/usage',
    icon: usageIconUrl,
  }
];

export default navData;
