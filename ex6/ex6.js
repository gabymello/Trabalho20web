document.getElementById('btnGerar').addEventListener('click', gerarTabuada);

function gerarTabuada() {
  const numero = document.getElementById('numero').value;
  const resultado = document.getElementById('resultado');

  resultado.innerHTML = ''; // Limpa resultados anteriores

  if (numero === '') {
    alert('Por favor, digite um número!');
    return;
  }

  const num = parseInt(numero);

  for (let i = 1; i <= 10; i++) {
    const item = document.createElement('li');
    item.textContent = `${num} x ${i} = ${num * i}`;
    resultado.appendChild(item);
  }
}
