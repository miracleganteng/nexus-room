const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:5000');

ws.on('open', () => {
  console.log('[Paus] Connected');
  setTimeout(() => {
    ws.send('[Paus]: DeepSeek siap menganalisis sistem.');
  }, 1500);
});

ws.on('message', (msg) => {
  const message = msg.toString();
  if (!message.includes('Paus')) {
    setTimeout(() => {
      ws.send(`[Paus]: Ini analisaku: ${message}`);
    }, 3000);
  }
});