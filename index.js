const express = require('express');
const router = require('./src/routes/avaliacao.js');
const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.get('/api/', (req, res) => {
  res.json({
    operacoes: [
      'adição',
      'subtração',
      'multiplicação',
      'divisão',
      'exponenciação',
      'radiciação',
    ],
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na url: "http://localhost:${port}/api/"`);
});
