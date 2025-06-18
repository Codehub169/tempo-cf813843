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

# Check if port 9000 is already in use
if lsof -Pi :9000 -sTCP:LISTEN -t >/dev/null ; then
    echo "Port 9000 is already in use. Please free the port or configure a different one."
    # Optionally, you can try to kill the process using the port:
    # kill -9 $(lsof -Pi :9000 -sTCP:LISTEN -t)
    # echo "Attempted to free port 9000."
    # echo "Retrying to start the server..."
    # npm run dev -- --port 9000
else
    npm run dev -- --port 9000
fi

if [ $? -ne 0 ]; then
  echo "Failed to start the development server."
  exit 1
fi
