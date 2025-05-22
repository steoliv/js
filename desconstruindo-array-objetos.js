// Desconstruindo Objetos

let pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
    empresa: 'qualquer',
    cargo: 'dev'
}

const {nome, cargo, sobrenome, empresa} = pessoa; //pegar propriedade do objeto

console.log(nome);
console.log(sobrenome);
console.log(empresa);
console.log(cargo);




// Desconstruindo Array

let nomes =["João", "Pedro", "Heitor"];

let {0:mateus, 1:pedro} = nomes; // Primeira maneira -> pega a oposição do elemento no arrai e atribui um novo nome mas não altera o valor do elemento no array

console.log(mateus); // mateus é o primeiro elemento do array que tem o valor de João
console.log(pedro); //pedro é o segundo elemento do array


let [primeironome, segundonome] = nomes;
console.log(primeironome); //primeironome é o primeiro elemento do array que tem o valor de João
console.log(segundonome); //segundonome é o segundo elemento do array que tem o valor de pedro