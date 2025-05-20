var nome = prompt("Qual seu nome?")
var sobreNome = prompt("Qual seu sobrenome?");

var nota1 = parseInt(prompt("Primeira nota"));
var nota2 = parseInt(prompt("Segunda nota"));

var media = (nota1 + nota2)/2;

document.write("<h1> Olá mundo!</h1>");
document.write("<p>  Meu nome é <b>" + nome + " </b>e eu estou estudando JS </p>");
document.write("<p> Minha média é: " + media + "</p>");