let tempo = 0; 
let cronometroAtivo = false; 
let intervalo;

function iniciarCronometro() {
    if (!cronometroAtivo) {
        cronometroAtivo = true;
        intervalo = setInterval(function() {
            tempo++;
            atualizarRelogio();
        }, 1000); 
    }
}

function pausarCronometro() {
    clearInterval(intervalo); 
    cronometroAtivo = false;
}

function zerarCronometro() {
    clearInterval(intervalo);
    cronometroAtivo = false;
    tempo = 0; 
    atualizarRelogio();
}

function atualizarRelogio() {
   
    let minutos = Math.floor(tempo / 60);
    let segundos = tempo % 60;

   
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;

    
    document.getElementById("tempo").textContent = minutos + ":" + segundos;
}