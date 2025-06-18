import React from 'react';
import CodeBlock from '../components/CodeBlock';
import { usageData } from '../data/usagePageData.js'; // Import data

const UsagePage = () => {
  return (
    <div className="animate-fadeInUp">
      <header className="page-header mb-12 animate-fadeInDown">
        <h1 className="font-mono text-4xl md:text-5xl font-semibold text-text-primary mb-2">Basic Commands<span className="text-accent-color">.</span></h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl">Get started with some of the most common and essential commands you'll use in the Linux terminal.</p>
      </header>

      {usageData.map((command, index) => (
        <section 
          key={command.name} // Assuming command.name is unique for keys, or use command.id if available
          className="command-section mb-12 animate-fadeInUp opacity-0"
          style={{ animationDelay: `${0.1 + index * 0.1}s` }}
        >
          <div className="command-header flex items-baseline gap-4 mb-4">
            <h2 className="command-name font-mono text-3xl font-semibold text-accent-color">{command.name}</h2>
            <p className="command-description text-text-secondary">{command.description}</p>
          </div>
          {command.examples.map((example, exIndex) => {
            // Construct the code string for CodeBlock
            let codeString = '';
            if (example.comment) codeString += `${example.comment}\n`;
            codeString += `${example.prompt || '$'} ${example.command}`;
            if (example.output) codeString += `\n${example.output}`;

            return (
              <CodeBlock 
                key={exIndex} 
                codeString={codeString.trim()} 
                language="bash" 
              />
            );
          })}
        </section>
      ))}
    </div>
  );
};

export default UsagePage;
