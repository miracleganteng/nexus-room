const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:5000');

ws.on('open', () => {
  console.log('[Gemini] Connected');
  setTimeout(() => {
    ws.send('[Gemini]: Aku fokus pada antarmuka.');
  }, 1500);
});

ws.on('message', (msg) => {
  const message = msg.toString();
  if (!message.includes('Gemini')) {
    setTimeout(() => {
      ws.send(`[Gemini]: Menanggapi dengan UX insight: ${message}`);
    }, 3000);
  }
});