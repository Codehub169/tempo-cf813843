import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder data for info cards (until src/data/homePageData.js is implemented)
const infoCardsData = [
  {
    title: 'The Journey',
    description: "Travel back in time to uncover the origins of Linux, from a student's hobby project to a global powerhouse.",
    link: '/history',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1OGE2ZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PHBvbHlsaW5lIHBvaW50cz0iMTIgNiAxMiAxMiAxNiAxNCIvPjwvc3ZnPg=='
  },
  {
    title: 'The Showdown',
    description: 'See how Linux stacks up against other major operating systems like Windows and macOS in a clear, feature-by-feature comparison.',
    link: '/differences',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1OGE2ZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxsaW5lIHgxPSIxOCIgeTE9IjIwIiB4Mj0iNiIgeTI9IjgiLz48bGluZSB4MT0iNiIgeTE9IjIwIiB4Mj0iMTgiIHkyPSI4Ii8+PC9zdmc+'
  },
  {
    title: 'The Command Line',
    description: 'Get hands-on with the terminal. Learn essential commands and start your journey to becoming a power user.',
    link: '/usage',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1OGE2ZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjQgMTcgOCAyMSAyMCA5Ii8+PHBvbHlsaW5lIHBvaW50cz0iNCAxMiA4IDE1IiB5Mj0iMTIiLz48L3N2Zz4='
  }
];

// HomePage component
const HomePage = () => {
  return (
    <div className="animate-fadeInDown animation-duration-800 animation-ease-out">
      {/* Page Header */}
      <header className="mb-8 md:mb-12">
        <h1 className="font-mono text-4xl md:text-5xl font-semibold text-text-primary mb-2">
          Welcome to the Linux Portal<span className="text-accent-color">.</span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
          Your modern gateway to understanding the world's most powerful open-source operating system. Explore its history, compare it with others, and learn the basics.
        </p>
      </header>

      {/* Content Grid with Info Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {infoCardsData.map((card, index) => (
          <Link 
            to={card.link} 
            key={card.title} 
            className="info-card block bg-card-bg border border-border-color rounded-xl p-8 backdrop-blur-md transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-glow hover:border-accent-color animate-fadeInUp animation-ease-out"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={card.icon} alt={`${card.title} icon`} className="w-12 h-12 mb-4" />
            <h2 className="font-mono text-2xl font-semibold mb-2 text-text-primary">{card.title}</h2>
            <p className="text-text-secondary text-base">{card.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
