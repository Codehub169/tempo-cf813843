// Data for the info cards on the HomePage
// Icons are imported from actual SVG files in src/assets/icons/
import historyIconUrl from '../assets/icons/historyIcon.svg';
import differencesIconUrl from '../assets/icons/differencesIcon.svg';
import usageIconUrl from '../assets/icons/usageIcon.svg';

const homePageCards = [
  {
    id: 'history',
    title: 'The Journey',
    description: "Travel back in time to uncover the origins of Linux, from a student's hobby project to a global powerhouse.",
    link: '/history',
    icon: historyIconUrl
  },
  {
    id: 'differences',
    title: 'The Showdown',
    description: 'See how Linux stacks up against other major operating systems like Windows and macOS in a clear, feature-by-feature comparison.',
    link: '/differences',
    icon: differencesIconUrl
  },
  {
    id: 'usage',
    title: 'The Command Line',
    description: 'Get hands-on with the terminal. Learn essential commands and start your journey to becoming a power user.',
    link: '/usage',
    icon: usageIconUrl
  }
];

export default homePageCards;
