// DATA ATUAL
document.write(`<h3 class="data-completa"> </h3>`);

var dataAtual = document.querySelector('.data-completa');
var data =  new Date(); // data atual

dataAtual.innerHTML = data;



/**************/


// CRIAR UMA DATA ESPECÍFICA
var dataNova = new Date("Sep 5, 1993");

console.log("Minha data personalizada é: "+dataNova.getDate()+"/"+(dataNova.getMonth()+1)+"/"+dataNova.getFullYear());



// Dias da semana 
var diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']; //Criando array com os dias da semana

console.log("Dia da semana: "+diasSemana[data.getDay()]); // Pegando o elemento do array que está na posição do dia


// Explicando cada um
console.log(data.getDay()); // Dia da semana em numeros ( começa no domindo = 0 e termina no sábado = 6)
console.log(data.getDate());// Dia do mês
console.log(data.getMonth()); // Número do mês começa no 0 e termina no 11
console.log(data.getFullYear()); // Ano
console.log(data.getHours()); // Horas
console.log(data.getMinutes()); //Minutos
console.log(data.getSeconds()); //Segundos
console.log(data.getMilliseconds()); //Milisegundos
