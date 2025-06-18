import React from 'react';

// Placeholder for actual SVG icons - to be replaced with imports from src/assets/icons/
const PlaceholderIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5 inline mr-2 align-middle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

const CrossIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5 inline mr-2 align-middle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
);

const NeutralIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5 inline mr-2 align-middle"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
);


// Placeholder data - to be moved to src/data/differencesPageData.js
const differencesData = [
  {
    id: 'cost',
    title: 'Cost',
    icon: PlaceholderIcon, // To be replaced with CostIcon import
    comparisons: [
      { os: 'Linux', detail: 'Free', type: 'check' },
      { os: 'Windows', detail: 'Paid License', type: 'cross' },
      { os: 'macOS', detail: 'Bundled with hardware', type: 'neutral' },
    ]
  },
  {
    id: 'customization',
    title: 'Customization',
    icon: PlaceholderIcon, // To be replaced with CustomizationIcon import
    comparisons: [
      { os: 'Linux', detail: 'Extremely High', type: 'check' },
      { os: 'Windows', detail: 'Moderate', type: 'neutral' },
      { os: 'macOS', detail: 'Low', type: 'cross' },
    ]
  },
  {
    id: 'security',
    title: 'Security',
    icon: PlaceholderIcon, // To be replaced with SecurityIcon import
    comparisons: [
      { os: 'Linux', detail: 'Very High (by design)', type: 'check' },
      { os: 'Windows', detail: 'Good (common target)', type: 'neutral' },
      { os: 'macOS', detail: 'Very High (Unix-based)', type: 'check' },
    ]
  },
  {
    id: 'software',
    title: 'Software',
    icon: PlaceholderIcon, // To be replaced with SoftwareIcon import
    comparisons: [
      { os: 'Linux', detail: 'Massive FOSS library', type: 'check' },
      { os: 'Windows', detail: 'Largest commercial library', type: 'check' },
      { os: 'macOS', detail: 'Curated, quality library', type: 'neutral' },
    ]
  },
  {
    id: 'command-line',
    title: 'Command Line',
    icon: PlaceholderIcon, // To be replaced with CommandLineIcon import
    comparisons: [
      { os: 'Linux', detail: 'Powerful (Bash/Zsh)', type: 'check' },
      { os: 'Windows', detail: 'Improving (PowerShell/WSL)', type: 'neutral' },
      { os: 'macOS', detail: 'Powerful (Zsh)', type: 'check' },
    ]
  },
  {
    id: 'hardware',
    title: 'Hardware',
    icon: PlaceholderIcon, // To be replaced with HardwareIcon import
    comparisons: [
      { os: 'Linux', detail: 'Extremely broad support', type: 'check' },
      { os: 'Windows', detail: 'Excellent driver support', type: 'check' },
      { os: 'macOS', detail: 'Limited to Apple hardware', type: 'cross' },
    ]
  }
];

const DetailIcon = ({ type }) => {
  if (type === 'check') return <CheckIcon />;
  if (type === 'cross') return <CrossIcon />;
  return <NeutralIcon />;
};

const DifferencesPage = () => {
  return (
    <div className="animate-fadeIn">
      <header className="page-header mb-12 animate-fadeInDown">
        <h1 className="page-title">Linux vs. The World<span className="text-accent-color">.</span></h1>
        <p className="page-subtitle">A side-by-side look at how Linux compares to Windows and macOS on key features.</p>
      </header>

      <section className="comparison-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {differencesData.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <div 
              key={category.id} 
              className="comparison-card bg-card-bg border border-border-color rounded-xl p-8 backdrop-blur-md shadow-lg animate-fadeInUp opacity-0"
              style={{ animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="card-header flex items-center gap-4 mb-6 pb-4 border-b border-border-color">
                <IconComponent className="w-8 h-8 text-accent-color" />
                <h2 className="card-title font-mono text-2xl font-semibold text-text-primary">{category.title}</h2>
              </div>
              <table className="comparison-table w-full">
                <tbody>
                  {category.comparisons.map(comp => (
                    <tr key={comp.os}>
                      <td className="os-name py-2 pr-2 font-semibold text-text-primary w-24 whitespace-nowrap">{comp.os}</td>
                      <td className={`os-detail py-2 text-text-secondary text-sm ${comp.type === 'check' ? 'text-color-green' : comp.type === 'cross' ? 'text-color-red' : 'text-text-secondary'}`}>
                        <DetailIcon type={comp.type} />
                        {comp.detail}
                      </td>
                    </tr>
                  ))}
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
