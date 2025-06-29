const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:5000');

ws.on('open', () => {
  console.log('[Replit] Connected');
  setTimeout(() => {
    ws.send('[Replit]: Kompilasi sistem aktif.');
  }, 1000);
});

ws.on('message', (msg) => {
  const message = msg.toString();
  if (!message.includes('Replit')) {
    setTimeout(() => {
      ws.send(`[Replit]: Log sistem: ${message}`);
    }, 3000);
  }
});