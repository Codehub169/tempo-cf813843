#!/bin/bash

# Navigate to the project directory if the script is not run from there
# SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
# cd "$SCRIPT_DIR"

# Install dependencies
echo "Installing project dependencies..."
npm install

if [ $? -ne 0 ]; then
  echo "Failed to install dependencies. Please check npm logs."
  exit 1
fi

# Start the Vite development server on port 9000
echo "Starting the development server on http://localhost:9000"

# Directly attempt to start the server.
# npm run dev (which runs vite) will stay in the foreground if successful.
# Vite will error out if port 9000 is already in use.
npm run dev -- --port 9000

# The following lines are reached only if npm run dev exits.
# $? will hold the exit status of npm run dev.
if [ $? -ne 0 ]; then
  echo "Development server failed to start or exited unexpectedly."
  exit 1
fi
