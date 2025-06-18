import React from 'react';

// Placeholder data - to be moved to src/data/historyPageData.js
const historyData = [
  {
    year: "1991",
    title: "The Genesis",
    text: "Linus Torvalds, a 21-year-old student at the University of Helsinki, announces his new, free operating system kernel, a 'hobby' that would later become Linux."
  },
  {
    year: "1992",
    title: "GPLv2 License",
    text: "The Linux kernel is relicensed under the GNU General Public License (GPLv2), a crucial step that ensures it remains free and open-source forever."
  },
  {
    year: "1993",
    title: "First Major Distributions",
    text: "Slackware and Debian are born, two of the oldest surviving Linux distributions that made Linux more accessible to a wider audience."
  },
  {
    year: "1996",
    title: "Tux the Penguin",
    text: "Tux, the iconic penguin mascot, is officially adopted. The idea came from Linus Torvalds himself, creating a friendly face for the operating system."
  },
  {
    year: "1998",
    title: "Corporate Adoption",
    text: "Major tech companies like IBM and Oracle announce support for Linux, signaling its arrival as a serious contender in the enterprise server market."
  },
  {
    year: "2004",
    title: "The Rise of Ubuntu",
    text: "Canonical releases Ubuntu, a Debian-based distribution focused on usability and ease-of-use, which becomes massively popular on desktops."
  },
  {
    year: "2008",
    title: "Android is Born",
    text: "Google launches Android, an open-source mobile operating system built on top of the Linux kernel, making Linux the dominant OS on smartphones."
  },
  {
    year: "2012-Present",
    title: "Cloud and Beyond",
    text: "Linux becomes the undisputed king of cloud computing, powering the vast majority of servers on AWS, Google Cloud, and Azure. It also powers IoT devices, supercomputers, and more."
  }
];

const HistoryPage = () => {
  return (
    <div className="animate-fadeIn">
      <header className="page-header mb-12 animate-fadeInDown">
        <h1 className="page-title">The History of Linux<span className="text-accent-color">.</span></h1>
        <p className="page-subtitle">A timeline of key events that shaped Linux from a personal project into a cornerstone of modern computing.</p>
      </header>

      <section className="timeline relative max-w-4xl mx-auto">
        {/* The vertical line in the middle of the timeline */}
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-border-color rounded_full ml-[-2px] animate-growLine" style={{ animationFillMode: 'forwards' }}></div>

        {historyData.map((event, index) => (
          <div 
            key={index} 
            className={`timeline-container p-2.5 md:px-10 relative w-full md:w-1/2 animate-fadeInUp opacity-0`} 
            style={{ animationDelay: `${0.2 + index * 0.2}s`, animationFillMode: 'forwards' }}
          >
            {/* Positioning for left/right containers */}
            <div className={`${index % 2 === 0 ? 'md:text-right md:pr-[calc(50%+20px)]' : 'md:left-1/2 md:pl-[calc(50%+20px)]'} relative`}>
              <div className={`timeline-content p-8 bg-card-bg border border-border-color backdrop-blur-md rounded-xl shadow-lg transition-all duration-300 hover:border-accent-color hover:scale-105`}>
                {/* The dot on the timeline */}
                <div 
                  className={`absolute top-6 w-5 h-5 bg-bg-color border-4 border-accent-color rounded-full z-10 animate-popIn opacity-0 ${index % 2 === 0 ? 'md:right-[-30px]' : 'md:left-[-30px]'} left-[-10px] md:left-auto`}
                  style={{ animationDelay: `${0.3 + index * 0.2}s`, animationFillMode: 'forwards' }}
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
