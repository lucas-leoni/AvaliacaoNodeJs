const ServicoAvaliacao = require('../services/avaliacao');

const servico = new ServicoAvaliacao();

class ControllerAvaliacao {
  /* Somar(req, res) {
    try {
      const result = servico.Somar(req.body.num1, req.body.num2);
      res.status(200).json({
        message: `resultado: ${result}`,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  } */
}

module.exports = ControllerAvaliacao;
