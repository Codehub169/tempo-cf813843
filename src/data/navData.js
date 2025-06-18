// Navigation data for the Sidebar
// Icons are base64 encoded SVGs from the HTML preview for now.
// These will ideally be replaced with imports from actual SVG files in src/assets/icons/

const navData = [
  {
    name: 'Home',
    path: '/',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4Yjk0OWUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJtMyA5IDktNyA5IDcgMCAxMS0xOCB6Ii8+PHBhdGggZD0ibTkgMjIgMCA2Ii8+PC9zdmc+',
    activeIconFilter: 'brightness(0) invert(0.1)' // Example filter for active state
  },
  {
    name: 'History',
    path: '/history',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4Yjk0OWUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwb2x5bGluZSBwb2ludHM9IjEyIDYgMTIgMTIgMTYgMTQiLz48L3N2Zz4=',
    activeIconFilter: 'brightness(0) invert(0.1)'
  },
  {
    name: 'Differences',
    path: '/differences',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4Yjk0OWUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48bGluZSB4MT0iMTgiIHkxPSIyMCIgeDI9IjYiIHkyPSI4Ii8+PGxpbmUgeDE9IjYiIHkxPSIyMCIgeDI9IjE4IiB5Mj0iOCIvPjwvc3ZnPg==',
    activeIconFilter: 'brightness(0) invert(0.1)'
  },
  {
    name: 'Usage',
    path: '/usage',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4Yjk0OWUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI0IDE3IDggMjEgMjAgOSIvPjxwb2x5bGluZSBwb2ludHM9IjQgMTIgOCAxNSAxNSAiLz48L3N2Zz4=',
    activeIconFilter: 'brightness(0) invert(0.1)'
  }
];

export default navData;
