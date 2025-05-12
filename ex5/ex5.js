function verificarIdade() {
    const anoNascimento = document.getElementById("anoNascimento").value;
    const resultado = document.getElementById("resultado");
  
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - parseInt(anoNascimento);
  
    if (!anoNascimento || isNaN(idade) || idade < 0 || idade > 120) {
      resultado.innerText = "Digite um ano válido.";
      return;
    }
  
    let classificacao = "";
  
    if (idade < 18) {
      classificacao = "menor de idade";
    } else if (idade < 60) {
      classificacao = "adulto(a)";
    } else {
      classificacao = "idoso(a)";
    }
  
    resultado.innerText = `Você tem ${idade} anos e é ${classificacao}.`;
  }
  