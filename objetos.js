//Objetos

let pessoa = { //os valores contidos aqui dentro são chamados de propriedades do objeto pessoa
    nome: "Stefany", 
    idade: 27,
    cidade: "Rio de Janeiro",
    altura: 1.65,
    peso: 65,
    profissao: "Frontend"
}

// exibindo propriedades
console.log("Meu nome é "+pessoa.nome+", minha profissão é "+pessoa.profissao);



// Criando um array com onjetos dentro
let usuarios = [
    {nome: "Stefany", idade: 27, cidade: "Rio de Janeiro"},
    {nome: "João", idade: 30, cidade: "São Paulo"},
    {nome: "Maria", idade: 25, cidade: "Belo Horizont"}
]


// exibindo propriedades de usuários
console.log(usuarios.nome);
