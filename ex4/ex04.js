function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacao = document.getElementById("operacao").value;
    const resultado = document.getElementById("resultado");
  
    if (isNaN(num1) || isNaN(num2)) {
      resultado.innerText = "Preencha os dois números corretamente.";
      return;
    }
  
    let res;
  
    switch (operacao) {
      case "soma":
        res = num1 + num2;
        break;
      case "subtracao":
        res = num1 - num2;
        break;
      case "multiplicacao":
        res = num1 * num2;
        break;
      case "divisao":
        if (num2 === 0) {
          resultado.innerText = "Não é possível dividir por zero.";
          return;
        }
        res = num1 / num2;
        break;
      default:
        resultado.innerText = "Operação inválida.";
        return;
    }
  
    resultado.innerText = `Resultado: ${res}`;
  }
  