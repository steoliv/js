
var area = document.getElementById('area');
var btnEntrar = document.querySelector(".btn-entrar");

// Função entrar na conta
function entrar(){
    var nome = prompt("Qual seu nome?");

    if(nome === "" || nome === null){ // Condicional caso o nome seja vazio ou nulo
        alert("Ops! aldo deu errado!");
        area.innerHTML = "Informe seu nome para prosseguir!";
    }else{
        area.innerHTML = "Bem vindo " + nome + " "; // Caso o usuárop tenha escrito algo inclui texto e nome no h2

        btnEntrar.style = "display: none"; //Esconder btn entrar quando estiver logado

        let btnSair = document.createElement("button");// CRiando btn sair
        btnSair.innerHTML = "Sair";
        btnSair.onclick = sair;

        area.appendChild(btnSair); // Incluindo btn dentro do h2
    }
}


// Função sair da conta
function sair(){
    alert("Até mais!");
    area.innerHTML = "Você saiu da conta";
    btnEntrar.style = "display: blockk"; //exibir btn entrar quando estiver deslogado

}



// Função media

function media( num1, num2){
    var nota = (num1 + num2)/2;

    if(nota >7){
        console.log("Parabéns você está aprovado! " + nota);
    }else{
        console.log("Sinto muito. Você está reprovado! " + nota);
    }
}