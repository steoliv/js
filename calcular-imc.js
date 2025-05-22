/*
Abaixo de 17 -> MUito abaixo do peso
Entre 17 e 18,49 -> Abaixo do peso
Entre 18,5 e 24,99 -> Peso normal
Entre 25 e 29,99 -> Acima do peso


Peso/(altura*altura)

*/

document.write(`
    <form onsubmit="return calcularImc(event);">
        <label for=""> Digite seu peso: </label>
        <input type="text" name="peso" id="peso" placeholder="Exemplo 65"><br><br>

        <label for=""> Digite seu altura: </label>
        <input type="text" name="altura" id="altura" placeholder="Exemplo 1.70">

        <input type="submit" value="Calcular IMC">
    </form>

    <div id="resultado"></div>
`);

var peso;
var altura;
var imc;
var resultado;

function calcularImc(event){
    event.preventDefault(); // previnindo comportamento padrao, nesse caso , previnindo que os dados inseridos no inputs sejam apagados

    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;
    resultado = document.getElementById("resultado");
    imc = peso / (altura * altura);


    if(imc <17){
        resultado.innerHTML = "<br>Seu resultado é: "+imc.toFixed(2)+" </br>Cuidado, você está muito abaixo do peso!"; //toFixed para limitar o numero de casas decimais
    }else if(imc >= 17 && imc <= 18.49){
        resultado.innerHTML = "<br>Seu resultado é: "+imc.toFixed(2)+" </br>Você está abaixo do peso!";
    }else if(imc >= 18.5 && imc <= 24.99){
        resultado.innerHTML = "<br>Seu resultado é: "+imc.toFixed(2)+" </br>Você está no peso ideal!";
    }else if(imc >= 25 && imc <= 29.99){
        resultado.innerHTML = "<br>Seu resultado é: "+imc.toFixed(2)+" </br>Cuidado, você está muito acima do peso!";
    }else if(imc >= 30){
        resultado.innerHTML = "<br>Seu resultado é: "+imc.toFixed(2)+" </br>Cuidado!!! Obesidade!";
    }

    // limpando o input após o cálculo
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}