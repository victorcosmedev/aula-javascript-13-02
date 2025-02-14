// EXERCICIO 1

// Função no formato convencional
// function converterParaMaiusculas(string){
//     return string.toUpperCase();
// }

const converterParaMaiusculas = (string) => {
    const mensagem = "Olá, mundo!";
    return string.toUpperCase();
}

console.log(mensagem); // Neste caso, 'mensagem' is not defined porque ela só existe dentro do escopo da função.

