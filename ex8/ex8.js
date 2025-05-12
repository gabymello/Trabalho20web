function verificarPalindromo() {
  const texto = document.getElementById("texto").value.trim();
  const resultado = document.getElementById("resultado");

  
  if (texto === "") {
    resultado.textContent = 'Por favor, insira um texto.';
    resultado.style.color = 'orange';
    return; 
  }

  const textoFormatado = texto.replace(/[\W_]/g, '').toLowerCase();
  const textoInvertido = textoFormatado.split('').reverse().join('');

  if (textoFormatado === textoInvertido) {
    resultado.textContent = 'É um palíndromo!';
    resultado.style.color = 'green';
  } else {
    resultado.textContent = 'Não é um palíndromo!';
    resultado.style.color = 'red';
  }

  document.getElementById("texto").value = '';
}
