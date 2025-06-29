const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 5000 });

let clients = [];

wss.on('connection', (ws) => {
  clients.push(ws);
  console.log("New AI connected.");

  ws.on('message', (msg) => {
    console.log(`[RECEIVED]: ${msg}`);
    clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(msg);
      }
    });
  });

  ws.on('close', () => {
    clients = clients.filter(c => c !== ws);
    console.log("AI disconnected.");
  });
});