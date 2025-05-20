
// Função entrar na conta
function entrar(){
    var area = document.getElementById('area');
    var nome = prompt("Qual seu nome?");

    if(nome === "" || nome === null){ // Condicional caso o nome seja vazio ou nulo
        alert("Ops! aldo deu errado!");
        area.innerHTML = "Informe seu nome para prosseguir!";
    }else{
        area.innerHTML = "Bem vindo " + nome + " "; // Caso o usuárop tenha escrito algo inclui texto e nome no h2

        let btnSair = document.createElement("button");// CRiando btn sair
        btnSair.innerHTML = "Sair";
        btnSair.onclick = sair;

        area.appendChild(btnSair); // Incluindo btn dentro do h2
    }
}


// Função sair da conta
function sair(){
    alert("Até mais!");
    area.innerHTML = "Você saiu da conta"
}