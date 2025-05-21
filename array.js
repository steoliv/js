var lista = ["Lucas", "José", "Maria", 1500, 3698, "Ana"]

console.log(lista);

lista.length; // quantidade de elementos contidos na loista
lista[0]; // acessa o primeiro elemento da lista
lista[3]; // acessa o quarto elemento da lista
lista.indexOf("Maria"); // Devolve a posição do item que ele encontrou, por exemplo mania na posição 2
lista.indexOf("Ruan")// Nesse caso ele retorna -1 porque ele não encontra o Pedro
lista.push("João"); // adiciona um novo elemento na lista
lista.pop(); // remove o último elemento da lista
lista.shift(); // remove o primeiro elemento da lista
lista.unshift("Pedro"); // adiciona um novo elemento no início da lista
lista.splice(1, 2); // remove 2 elementos da lista, começando do 1
lista[1] = "José Silva"; // atribui um novo valor a um item existente na lista, 
lista.join(','); // trazer todos os itens da sua lista com um separador (; , : ! ? ....)
console.log(lista);
