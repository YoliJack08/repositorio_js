//Ingresar 6 números. Determinar y mostrar la cantidad de números pares, la cantidad de ceros y la cantidad de números negativos ingresados

let par = 0;
let cero = 0;
let negativo = 0;

for (let i=0; i<=5; i++){
    let numero = Number(prompt("Ingresa un número puede ser negativo o positivo:"));

    if (numero % 2 == 0 && numero!=0 && numero>0){
        par++;
    }
    else if (numero == 0){
        cero++;
    }
    else if (numero < 0){
        negativo++;
    }
    else {
        alert("Dato invalido, intenta de nuevo");
        i--;
    }
}

alert(`El número de pares son: ${par}, el número de ceros: ${cero} y el número de negativos: ${negativo}`);
