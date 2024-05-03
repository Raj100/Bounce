const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;



db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

// Define message schema
const messageSchema = new mongoose.Schema({
  sender: String,
  recipient: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Create Express server
const app = express();
const server = http.createServer(app);

// Initialize WebSocket server
const wss = new WebSocket.Server({ server });

// WebSocket connection handler
wss.on('connection', (ws) => {
  console.log('Client connected');

  // Send welcome message to the client
  ws.send(JSON.stringify({ type: 'message', content: 'Welcome to the chat!' }));

  // Message handling
  ws.on('message', async (message) => {
    try {
      const parsedMessage = JSON.parse(message);

      // Save message to the database
      const newMessage = new Message({
        sender: parsedMessage.sender,
        recipient: parsedMessage.recipient,
        content: parsedMessage.content
      });

      await newMessage.save();

      // Broadcast message to all clients
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'message', content: parsedMessage }));
        }
      });
    } catch (error) {
      console.error('Error handling message:', error);
    }
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
