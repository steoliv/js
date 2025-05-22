//setInterval ->  Executa de tempos em tempos infinitamente

function acao(){
    document.write("Executando...<br>");
}
// primeira maneira de executar
setInterval(acao,1500); //Precisa passar dois parametros ( a função  que você quer chamar e o tempo que é em milisegundos)


//segunda maneira de executar
setInterval(() => {
    document.write("<h3>Executando!!!</h3><br>");
}, 2000)





// setTimeout -> Executa uma vez o que você passar
function acao2(){
    console.log("Executou o setTimeout");
}

setTimeout(acao2,3000);

// assim como o setInterval ele tem as duas maneiras de executar