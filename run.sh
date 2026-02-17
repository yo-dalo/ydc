#!/bin/bash

# Path to your project root
PATH_ROOT="/home/yo/Desktop/ydc"

echo "=================================="
echo "Starting XAMPP (Apache + MySQL)..."
echo "=================================="
sudo /opt/lampp/lampp start
echo ""

echo "=============================================="
echo "Starting API, Client, and Admin in parallel..."
echo "=============================================="

# Store process IDs
pids=()

# Start API in background
(cd "$PATH_ROOT/api" && npm run dev) &
pids+=($!)

# Start Client in background
(cd "$PATH_ROOT/client" && npm run dev -- --host) &
pids+=($!)

# Start Admin in background
(cd "$PATH_ROOT/admin" && npm run dev) &
pids+=($!)

echo ""
echo "All services are now running!"
echo "XAMPP    → Apache: http://localhost | phpMyAdmin: http://localhost/phpmyadmin"
echo "API      → usually http://localhost:3000 or 5000"
echo "Client   → usually http://localhost:5173 or 3000"
echo "Admin    → usually http://localhost:5174 or similar"
echo ""
echo "Press Ctrl+C to stop all Node.js servers (XAMPP will remain running)."

# Handle Ctrl+C to stop only the Node.js processes
trap 'echo -e "\n\nStopping API, Client, and Admin servers..."; kill ${pids[@]} 2>/dev/null; echo "Node.js servers stopped. XAMPP is still running."; exit 0' INT

# Keep script running until Ctrl+C
while true; do
    sleep 1
done
