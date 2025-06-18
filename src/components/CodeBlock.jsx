import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; // A theme similar to VS Code dark

// Component for displaying syntax-highlighted code blocks with a copy button
const CodeBlock = ({ codeString, language = 'bash', showLineNumbers = false }) => {
  const [isCopied, setIsCopied] = useState(false);

  // Function to handle copying code to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset copied state after 2 seconds
    }).catch(err => {
      console.error('Failed to copy code: ', err);
    });
  };

  // Custom style for the syntax highlighter to match the theme
  const customStyle = {
    ...vscDarkPlus,
    'pre[class*="language-"]': {
      ...vscDarkPlus['pre[class*="language-"]'],
      backgroundColor: 'var(--code-bg)', // Use CSS variable for background
      border: 'none',
      padding: '1rem',
      margin: 0,
      fontSize: '0.95rem',
      lineHeight: '1.5',
    },
    'code[class*="language-"]': {
        ...vscDarkPlus['code[class*="language-"]'],
        fontFamily: 'var(--font-mono)', // Use Fira Code font
    },
    // Attempt to style tokens similar to HTML preview, may require specific theme or more granular control
    '.comment': { color: 'var(--text-secondary)', fontStyle: 'italic' }, 
    '.operator': { color: 'var(--accent-color)' }, // Example: prompt color
    '.keyword': { color: '#79c0ff' }, // Example: command color
    '.variable': { color: '#a5d6ff' }, // Example: argument color
    '.string': { color: 'var(--text-secondary)' } // Example: output color
  };

  return (
    <div className="code-block bg-code-bg border border-border-color rounded-lg font-mono text-sm relative my-4 shadow-md">
      {/* Header for the code block (e.g., language name, copy button) */}
      <div className="code-block-header px-4 py-2 bg-sidebar-bg border-b border-border-color flex justify-between items-center text-text-secondary text-xs">
        <span>{language}</span>
        <button 
          onClick={handleCopy}
          className="copy-button bg-transparent border border-border-color text-text-secondary px-2 py-1 rounded-md hover:text-text-primary hover:border-accent-color transition-colors duration-200"
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      
      {/* Syntax highlighter component */}
      <SyntaxHighlighter 
        language={language} 
        style={customStyle} 
        showLineNumbers={showLineNumbers}
        wrapLines={true}
        wrapLongLines={true}
      >
        {codeString.trim()}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
