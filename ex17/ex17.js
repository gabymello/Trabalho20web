function verificarPrimo() {
  const num = parseInt(document.getElementById("numero").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(num) || num < 1) {
    resultado.textContent = "Digite um número inteiro positivo.";
    resultado.style.color = "red";
    return;
  }

  if (num === 1) {
    resultado.textContent = "1 não é um número primo.";
    resultado.style.color = "orange";
    return;
  }

  let ehPrimo = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      ehPrimo = false;
      break;
    }
  }

  if (ehPrimo) {
    resultado.textContent = `${num} é um número primo!`;
    resultado.style.color = "green";
  } else {
    resultado.textContent = `${num} não é um número primo.`;
    resultado.style.color = "red";
  }
}
