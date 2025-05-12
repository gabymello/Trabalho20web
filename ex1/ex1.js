function verificarParImpar() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(numero)) {
      resultado.textContent = "Por favor, digite um número válido!";
      resultado.style.color = "#d32f2f";
      return;
    }
  
    if (numero % 2 === 0) {
      resultado.textContent = `${numero} é PAR.`;
      resultado.style.color = "#2e7d32";
    } else {
      resultado.textContent = `${numero} é ÍMPAR.`;
      resultado.style.color = "#f9a825";
    }
  }
  