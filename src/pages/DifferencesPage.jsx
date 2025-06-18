import React from 'react';
import { differencesData } from '../data/differencesPageData.js'; // Import data

// Helper icons for comparison details
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[1.125rem] h-[1.125rem] inline mr-2 align-middle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

const CrossIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[1.125rem] h-[1.125rem] inline mr-2 align-middle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
);

const NeutralIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[1.125rem] h-[1.125rem] inline mr-2 align-middle"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
);

const DetailIcon = ({ type }) => {
  if (type === 'check') return <CheckIcon />;
  if (type === 'cross') return <CrossIcon />;
  return <NeutralIcon />;
};

const DifferencesPage = () => {
  return (
    <div className="animate-fadeInUp">
      <header className="page-header mb-12 animate-fadeInDown">
        <h1 className="font-mono text-4xl md:text-5xl font-semibold text-text-primary mb-2">Linux vs. The World<span className="text-accent-color">.</span></h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl">A side-by-side look at how Linux compares to Windows and macOS on key features.</p>
      </header>

      <section className="comparison-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {differencesData.map((category, index) => {
          const IconComponent = category.icon; // Icon is now an imported React component
          return (
            <div 
              key={category.id} 
              className="comparison-card bg-card-bg border border-border-color rounded-xl p-8 backdrop-blur-md shadow-lg animate-fadeInUp opacity-0"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="card-header flex items-center gap-4 mb-6 pb-4 border-b border-border-color">
                <IconComponent className="w-8 h-8 text-accent-color" />
                <h2 className="card-title font-mono text-2xl font-semibold text-text-primary">{category.title}</h2>
              </div>
              <table className="comparison-table w-full">
                <tbody>
                  {category.comparisons.map(comp => {
                    let detailTextColorClass = 'text-text-secondary';
                    if (comp.type === 'check') {
                      detailTextColorClass = 'text-color-green';
                    } else if (comp.type === 'cross') {
                      detailTextColorClass = 'text-color-red';
                    }
                    return (
                    <tr key={comp.os}>
                      <td className="os-name py-2 pr-2 font-semibold text-text-primary w-24 whitespace-nowrap">{comp.os}</td>
                      <td className={`os-detail py-2 text-sm ${detailTextColorClass}`}>
                        <DetailIcon type={comp.type} />
                        {comp.detail}
                      </td>
                    </tr>
                  );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default DifferencesPage;
