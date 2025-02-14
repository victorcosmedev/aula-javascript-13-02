// EXERCÍCIO 1

const nome = "Victor Nascimento Cosme";
let idade = 19;
const aprovado = true;
const notas = [10, 8, 7];
let usuario = {
    email: "rm558856@fiap.com.br",
    senha: "senha123",
};

console.log(nome);
console.log(idade);
console.log(notas);
console.log(usuario);

// A diferença entre null e undefined é que null é um valor definido de forma proposital
// Já o undefined ocorre quando a variável não recebe valor algum.

// EXERCÍCIO 2

let valorNulo = null;
let valorIndefinido;

if(valorNulo == null){
    console.log("valorNulo é " + valorNulo);
}

if(valorIndefinido == undefined){
    console.log("valorIndefinido é " + valorIndefinido);
}
