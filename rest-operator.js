//  REst operator -> Se você não sabe a quantidados de paramentros e argumentos ele te ajudará muito

// 1 exemplo
function convidados(...nomes){
    console.log(nomes);
}

convidados("Sara","Rafaela", "Silvana", "Lara");


// 2 exemplo
function sorteio(...numeros){
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length); // Gerar um numero aleatório(math.random()) com base no tamanho da lista numeros(numero.length) e inteiro(math.floor())
    console.log("O número sorteado foi "+numeros[numeroGerado]);
}

sorteio(1,2,5,8,9,75,36,54,25);