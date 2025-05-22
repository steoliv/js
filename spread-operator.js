// Spread Operator
// Array
let primeiros = [1,2,3];
let segundos = [...primeiros,4,5,6]; // esses pontinhos antes da variavel primeiros é o que faz a magica acontecer, ele primeiro diz para pegar todos os elementos da variavel primeiros e depois carregar os elementos da váriavel segundos gerando um novo array com  todos os elementos tanto da variavel primeiros quando da variavel segundos
console.log(segundos);




// Objetos
let pessoa = {nome: 'João', idade: 25};

let novapessoa = {
    ...pessoa,
    cidade: 'São Paulo',   
    estado: 'SP'
}
console.log(novapessoa);



// exemplo em  Função
function funcionario(info){
    let dados = {
        ...info,
        status: "Ativo",
        inicio: "01/07/2025",
        código: "123456"
    }
    console.log(dados);
}

funcionario({nome:"Ruan", sobrenome: "Neves", cargo: "Manutenção"});