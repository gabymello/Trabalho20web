function contar() {
    const inicio = Number(document.getElementById('inicio').value);
    const fim = Number(document.getElementById('fim').value);
    let passo = Number(document.getElementById('passo').value);
    const resultado = document.getElementById('resultado');
    
    resultado.innerHTML = '';
  
    if (!inicio || !fim || !passo) {
      resultado.innerHTML = 'Por favor, preencha todos os campos corretamente.';
      return;
    }
  
    if (passo <= 0) {
      passo = 1;
    }
  
    let contagem = '';
    if (inicio < fim) {
      for (let i = inicio; i <= fim; i += passo) {
        contagem += `${i}  `;
      }
    } else {
      for (let i = inicio; i >= fim; i -= passo) {
        contagem += `${i} `;
      }
    }
  
    contagem += '';
    resultado.innerHTML = contagem;
  }
  