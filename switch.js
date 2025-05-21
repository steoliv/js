//switch = casos

document.write(`<h2>Escolha um item</h2>
                <ol>
                    <li>Suco</li>
                    <li>Água</li>
                    <li>Sorvete</li>
                    <li>Solicitar a presença de um garçom</li>
                </ol>
                <button onclick="pedir()">Pedir</button>`
); //Incluindo HTML com js


function pedir(){
    var valor = prompt("Digite um valor");

    switch(Number(valor)){ //Number(valor) converte o valor que o usuário digitou ,que no casa é uma string, em numero

        case 1:
            alert("Você pediu um suco");
            break;
        case 2: 
            alert("Você pediu água");
            break;
        case 3:
            alert("Você pediu sorvete");
            break;
        case 4:
            alert("Você solicitou a presença de um garçom");
            break;
        default:
            alert("Você precisa escolher uma opção valida entre 1 a 4");

    }
}