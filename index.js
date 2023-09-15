const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/', (req, res) => {
  res.json({ message: 'Funfando!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na url: "http://localhost:${port}/api/"`);
});
