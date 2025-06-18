// Data for the info cards on the HomePage
// Icons are base64 encoded SVGs from the HTML preview for now.
// These will ideally be replaced with imports from actual SVG files in src/assets/icons/

const homePageCards = [
  {
    id: 'history',
    title: 'The Journey',
    description: "Travel back in time to uncover the origins of Linux, from a student's hobby project to a global powerhouse.",
    link: '/history',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1OGE2ZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PHBvbHlsaW5lIHBvaW50cz0iMTIgNiAxMiAxMiAxNiAxNCIvPjwvc3ZnPg=='
  },
  {
    id: 'differences',
    title: 'The Showdown',
    description: 'See how Linux stacks up against other major operating systems like Windows and macOS in a clear, feature-by-feature comparison.',
    link: '/differences',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1OGE2ZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxsaW5lIHgxPSIxOCIgeTE9IjIwIiB4Mj0iNiIgeTI9IjgiLz48bGluZSB4MT0iNiIgeTE9IjIwIiB4Mj0iMTgiIHkyPSI4Ii8+PC9zdmc+'
  },
  {
    id: 'usage',
    title: 'The Command Line',
    description: 'Get hands-on with the terminal. Learn essential commands and start your journey to becoming a power user.',
    link: '/usage',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1OGE2ZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjQgMTcgOCAyMSAyMCA5Ii8+PHBvbHlsaW5lIHBvaW50cz0iNCAxMiA4IDE1IiB5Mj0iMTIiLz48L3N2Zz4='
  }
];

export default homePageCards;
