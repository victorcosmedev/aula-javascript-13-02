// EXERCÍCIO 1

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

console.log();


// EXERCÍCIO 2
let opcao;

do {
    opcao = prompt("Insira uma letra: ")
    switch(opcao){
        case "A":
            alert("Opção A selecionada.");
            break;
        case "B": 
            alert("Opção B selecionada.");
            break;
        case "S":
            alert("Saindo...");
            break;
        default:
            alert("Opção inválida.");
    }

} while (opcao != 'S');