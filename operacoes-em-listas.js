// MAP -> percorerr todo um array
let lista = ["Sara", "Heitor", "Bento", "Ruan"];

lista.map((item, index) => {
    console.log(`Item ${index + 1}: ${item}`);
})


// REDUCE -> Ele busca reduzir um array

let numeros = [5, 3, 2, 5];

let total = numeros.reduce((acumulador, numero, indice, original) =>{
    console.log(`${acumulador} - total até o momento`);
    console.log(`${numero} - valor atual`);
    console.log(`${indice} - posição atual`);
    console.log(`${original} - array original`);
    console.log('------------------------');

    return acumulador += numero;

})

console.log("Total de REDUCE: "+total);