import React from 'react';
import CodeBlock from '../components/CodeBlock';

// Placeholder data - to be moved to src/data/usagePageData.js
const usageData = [
  {
    id: 'ls',
    name: 'ls',
    description: 'List directory contents.',
    examples: [
      {
        comment: '# List files in the current directory',
        command: 'ls',
        output: 'Documents  Downloads  Music  Pictures  Videos'
      },
      {
        comment: '# List all files, including hidden ones, in long format',
        command: 'ls -la',
        output: 'drwxr-xr-x 1 user user 4096 Oct 26 10:00 .\ndrwxr-xr-x 1 user user 4096 Oct 25 09:00 ..\n-rw-r--r-- 1 user user  220 Oct 25 09:00 .bash_logout'
      }
    ]
  },
  {
    id: 'cd',
    name: 'cd',
    description: 'Change the current directory.',
    examples: [
      {
        comment: '# Navigate into the \'Documents\' directory',
        command: 'cd Documents',
        prompt: '$'
      },
      {
        comment: '# Go back to the parent directory',
        command: 'cd ..',
        prompt: '~/Documents$'
      },
      {
        comment: '# Go to your home directory',
        command: 'cd',
        prompt: '/some/other/path$'
      }
    ]
  },
  {
    id: 'pwd',
    name: 'pwd',
    description: 'Print the name of the current working directory.',
    examples: [
      {
        prompt: '~/Documents/Projects$',
        command: 'pwd',
        output: '/home/user/Documents/Projects'
      }
    ]
  },
  {
    id: 'mkdir',
    name: 'mkdir',
    description: 'Make directories.',
    examples: [
      {
        comment: '# Create a new directory named \'new-project\'',
        command: 'mkdir new-project'
      },
      {
        comment: '# Create nested directories',
        command: 'mkdir -p path/to/my/app'
      }
    ]
  },
  {
    id: 'cat',
    name: 'cat',
    description: 'Concatenate and display files.',
    examples: [
      {
        comment: '# Display the content of a file',
        command: 'cat readme.txt',
        output: 'Hello, this is a readme file.\nIt contains important information.'
      }
    ]
  },
  {
    id: 'sudo',
    name: 'sudo',
    description: 'Execute a command as another user (typically the superuser).',
    examples: [
      {
        comment: '# Install a package using the system\'s package manager',
        command: 'sudo apt-get install htop',
        output: '[sudo] password for user: ********'
      }
    ]
  }
];

const UsagePage = () => {
  return (
    <div className="animate-fadeIn">
      <header className="page-header mb-12 animate-fadeInDown">
        <h1 className="page-title">Basic Commands<span className="text-accent-color">.</span></h1>
        <p className="page-subtitle">Get started with some of the most common and essential commands you'll use in the Linux terminal.</p>
      </header>

      {usageData.map((command, index) => (
        <section 
          key={command.id} 
          className="command-section mb-12 animate-fadeInUp opacity-0"
          style={{ animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'forwards' }}
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
