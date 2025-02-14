// EXERCICIO 1

// Função no formato convencional
// function converterParaMaiusculas(string){
//     return string.toUpperCase();
// }

const converterParaMaiusculas = (string) => {
    const mensagem = "Olá, mundo!";
    return string.toUpperCase();
}

// console.log(mensagem); // Neste caso, 'mensagem' is not defined porque ela só existe dentro do escopo da função.


// EXERCICIO 2
function processarDados(funcao){
    funcao();
}

processarDados(() => {
    console.log("Processo concluído.");
});


function buscarUsuario(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({nome: "Victor", id: 1})
        });
    })
}

buscarUsuario().then((response) => {
    console.log(response);
})