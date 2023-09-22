const ServicoAvaliacao = require('../services/avaliacao');
const servico = new ServicoAvaliacao();

class ControllerAvaliacao {
  Adicao(req, res) {
    try {
      const result = servico.Adicao(req.body.num1, req.body.num2);
      res.status(200).json({
        result: result,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  Subtracao(req, res) {
    try {
      const result = servico.Subtracao(req.body.num1, req.body.num2);
      res.status(200).json({
        result: result,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  Multiplicacao(req, res) {
    try {
      const result = servico.Multiplicacao(req.body.num1, req.body.num2);
      res.status(200).json({
        result: result,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  
  Divisao(req, res) {
    try {
      const result = servico.Divisao(req.body.num1, req.body.num2);
      res.status(200).json({
        result: result,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  Exponenciacao(req, res) {
    try {
      const result = servico.Exponenciacao(req.body.base, req.body.expoente);
      res.status(200).json({
        result: result,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  Radiciacao(req, res) {
    try {
      const result = servico.Radiciacao(req.body.num);
      res.status(200).json({
        result: result,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = ControllerAvaliacao;
