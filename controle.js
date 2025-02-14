let numero = 0;

console.log("==============================\n IF/ELSE")
if(numero > 0){
    console.log("Número positivo.");
} else if (numero == 0){
    console.log("Número neutro.");
} else {
    console.log("Número negativo.");
}


console.log("===============================\nFOR")
for(let i = 1; i < 11; i++){
    console.log(i);
}

console.log("===============================\nWHILE")

let soma = 0;
let i = 0;
while(i <= 5){
    soma += i;
    i++;
}

console.log("A soma dos números é igual a: " + soma);