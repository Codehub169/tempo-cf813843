import React from 'react';
import { Link } from 'react-router-dom';
import homePageCards from '../data/homePageData.js'; // Import data

// HomePage component
const HomePage = () => {
  return (
    <div 
      className="animate-fadeInDown min-h-[calc(100vh-var(--header-height,6rem))]" // Assuming header height for better full page feel if needed
      style={{
        backgroundImage: `url('http://34.28.45.117:8000/assets/cf948273c7584e5dbe58871d0776e158.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // backgroundAttachment: 'fixed', // Optional: if you want a fixed background effect
      }}
    >
      {/* Page Header */}
      <header className="mb-8 md:mb-12 pt-8"> {/* Added pt-8 for spacing from top if bg is full */}
        <h1 className="font-mono text-4xl md:text-5xl font-semibold text-text-primary mb-2">
          Welcome to the Linux Portal<span className="text-accent-color">.</span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
          Your modern gateway to understanding the world's most powerful open-source operating system. Explore its history, compare it with others, and learn the basics.
        </p>
      </header>

      {/* Content Grid with Info Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {homePageCards.map((card, index) => (
          <Link 
            to={card.link} 
            key={card.id} // Use card.id as key if available and unique, otherwise card.title
            className="info-card block bg-card-bg border border-border-color rounded-xl p-8 backdrop-blur-md transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-glow hover:border-accent-color animate-fadeInUp"
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
