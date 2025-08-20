//SINTAXE
let variavel1 = 5 //escopo local -> de função
var variavel2 = 10 //escopo global
const variavel3 = 15 //valor que não pode ser alterado (como define em C)

//objeto
let pessoa = {
    nome: "thaiis",
    idade: 18
}

//FUNÇÕES

//função tradicional
function soma(a, b)
{
    return a + b;
}
//função anônima
const mult = function (a, b) {
    return a * b;
}

//arrow function
const sub = (a, b) => a - b;

//MÉTODOS DE ARRAY
.map() //transforma os itens da array
.filter() //filtra
.find() //retorna o primeiro elemento que satifaz o condição
.findIndex() //retorna o primeiro index que satifaz o condição
.indexOf() //retorna o index do elemento
.reduce() // reduz o array a um único valor