// FIND -> buscar alguma coisa
let listagem = [5,3,"stefany","Heitor"];

let resultado = listagem.find((item) => {
    if(item === "stefany"){
     return console.log("Entrou na condição. Item encontrado com sucesso!")   
    }
})

// FILTER ->  Filtrar alguma coisa dentro do array
let palavras = ["Amor", "Heitor","Felicidade", "Amizade", "Saúde", "Respeito", "Heitor"];
    let resultadoFilter = palavras.filter((item) =>{
        return item === "Heitor";
    });

    console.log(resultadoFilter);