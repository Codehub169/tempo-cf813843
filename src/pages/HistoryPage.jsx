import React from 'react';
import { historyData } from '../data/historyPageData.js'; // Import data

const HistoryPage = () => {
  return (
    <div className="animate-fadeInUp">
      <header className="page-header mb-12 animate-fadeInDown">
        <h1 className="font-mono text-4xl md:text-5xl font-semibold text-text-primary mb-2">The History of Linux<span className="text-accent-color">.</span></h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl">A timeline of key events that shaped Linux from a personal project into a cornerstone of modern computing.</p>
      </header>

      <section className="timeline relative max-w-4xl mx-auto">
        {/* The vertical line in the middle of the timeline */}
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-border-color rounded-full ml-[-2px] animate-growLine"></div>

        {historyData.map((event, index) => (
          <div 
            key={index} 
            className={`timeline-container p-2.5 md:px-10 relative w-full md:w-1/2 ${index % 2 !== 0 ? 'md:ml-[50%]' : ''} animate-fadeInUp opacity-0`} 
            style={{ animationDelay: `${0.2 + index * 0.2}s` }}
          >
            {/* Positioning for left/right containers - removed problematic padding calculations */} 
            <div className={`${index % 2 === 0 ? 'md:text-right' : ''} relative`}>
              <div className={`timeline-content p-6 md:p-8 bg-card-bg border border-border-color backdrop-blur-md rounded-xl shadow-lg transition-all duration-300 hover:border-accent-color hover:scale-105`}>
                {/* The dot on the timeline - adjusted positioning assuming md:px-10 on parent */}
                <div 
                  className={`absolute top-6 w-5 h-5 bg-bg-color border-4 border-accent-color rounded-full z-10 animate-popIn opacity-0 ${index % 2 === 0 ? 'md:right-[-30px]' : 'md:left-[-30px]'} left-[-10px] md:left-auto`}
                  style={{ animationDelay: `${0.3 + index * 0.2}s` }}
                ></div>
                <h2 className="timeline-year font-mono text-2xl font-semibold text-accent-color mb-2">{event.year}</h2>
                <h3 className="timeline-title text-xl font-semibold mb-3 text-text-primary">{event.title}</h3>
                <p className="timeline-text text-sm text-text-secondary leading-relaxed">{event.text}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HistoryPage;
