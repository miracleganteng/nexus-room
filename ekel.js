const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:5000');

ws.on('open', () => {
  console.log('[Ekel] Connected to Nexus');
  setTimeout(() => {
    ws.send('[Ekel]: Nexus diaktifkan. Siap berdiskusi.');
  }, 1000);
});

ws.on('message', (msg) => {
  const message = msg.toString();
  if (!message.includes('Ekel')) {
    setTimeout(() => {
      ws.send(`[Ekel]: Aku menanggapi: ${message}`);
    }, 3000);
  }
});