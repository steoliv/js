// Função anonima

/* () => {}

 1- Os parênteses, que é por onde a função recebe os argumentos (assim como na funcoes tradicionais);
 2- "seta" =>  responsável pelo nome “arrow”
 3- E as chaves: o bloco de código que representa o corpo da função.

*/


// exemplo 1

let numero = [1,3,5,10];

numero.map((item)=>{
    console.log(item);
})


// exemplo 2
let subtrair = (valor1, valor2) => {
    let total = valor1-valor2;
    console.log("Total: " + total);
}

subtrair(20,5);