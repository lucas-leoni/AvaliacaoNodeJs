class ServicoAvaliacao {
  errorMessage = 'Favor informar números!';

  Adicao(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error(this.errorMessage);
    }
    return num1 + num2;
  }

  Subtracao(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error(this.errorMessage);
    }
    return num1 - num2;
  }

  Multiplicacao(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error(this.errorMessage);
    }
    return num1 * num2;
  }

  Divisao(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error(this.errorMessage);
    }
    return num1 / num2;
  }

  Exponenciacao(base, expoente) {
    if (isNaN(base) || isNaN(expoente)) {
      throw new Error(this.errorMessage);
    }
    return Math.pow(base, expoente);
  }

  Radiciacao(num) {
    if (isNaN(num)) {
      throw new Error('Favor informar um número!');
    }
    return Math.sqrt(num);
  }
}

module.exports = ServicoAvaliacao;
