/* // Exercício produtos

const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 150 },
    { id: 3, nome: "Teclado", preco: 200 },
    { id: 4, nome: "Monitor", preco: 1200 }
];

// Filtrar produtos com preço acima de 500
let produtosCaros = produtos.filter(produto => produto.preco > 500)

// Encontrar o primeiro produto chamado "Mouse"
let mouse = produtos.find(produto => produto.nome === "Mouse")

// Criar um array apenas com os nomes dos produtos
let nomesProdutos = produtos.map(produto => produto.nome)

// Somar todos os preços dos produtos usando reduce
let precosProdutos = produtos.map(produto => produto.preco)
let totalPreco = precosProdutos.reduce((soma, num) => soma + num, 0)

// Retorno:

console.log(produtosCaros); // [{ id: 1, nome: "Notebook", preco: 3500 }, { id: 4, nome: "Monitor", preco: 1200 }]
console.log(mouse); // { id: 2, nome: "Mouse", preco: 150 }
console.log(nomesProdutos); // ["Notebook", "Mouse", "Teclado", "Monitor"]
console.log(totalPreco); // 5050

*/


// Fácil

/* -- 1
const nomes= ["Davi", "Iago", "Vinicius", "Pedro", "Lucas"]

for (i = 0; i < nomes.length; i++) {
    console.log(`${i} - ${nomes[i]}`)
}
*/

/* -- 2
const cores = ["Azul", "Verde", "Vermelho"]

for (i = 0; i < cores.length; i++) {
    console.log(`A cor ${cores[i]} está na posição ${i}`)
}
*/

/* -- 3
const valores = [1, 2, 3, 4, 5]

console.log(valores[0], valores[4])
*/

/* -- 4
const frutas = ["banana", "maçã", "abacaxi", "manga"]
console.log(`A lista frutas tem ${frutas.length} itens`)
*/

// Médio

/* -- 1
const numeros = [1, 2, 3, 4, 5]

for (i = 0; i < numeros.length; i++){
    if(i % 2 == 0){
        console.log(numeros[i])
    }
}
*/

/* -- 2
const nomes= ["Davi", "Iago", "Vinicius", "Pedro", "Lucas"]

for (i = 0; i < nomes.length; i++){
    if(i == 2){
        console.log(`Nome especial: ${nomes[i]}`)
    }
    else{
        console.log(nomes[i])
    }
}
*/

/* -- 3
const numeros = [10, 20, 30, 40, 50]

contador = 0
console.log(numeros.map(numero => {
    contador ++
    return `${contador}° número : ${numero}`
}))
*/

/* -- 4
const produtos= ["Computador", "Mouse", "Teclado", "MousePad", "Pendrive"]

contador = 0
produtos.forEach(item => {
    if (contador > 2){
        return console.log(produtos[contador]), contador++
    }
    contador++
})
*/

/* -- 5
const numeros = [10, 240, 320, 40, 52]

console.log(numeros.find(num => num > 50))
*/

// Difícil

/* -- 1
const nomes= ["Davi", "Iago", "Vinicius", "Pedro", "Lucas"]

let index = 0
nomes.forEach(nome => {
    return console.log(`${index + 1}° lugar: ${nome}`)
})
*/

/* -- 2
const numeros = [10, 240, 320, 40, 52]

let index = 0
let pares = []
let impares = []
numeros.forEach(num => {
    if (index %2 == 0){
        pares.push(num)
    }
    else{
        impares.push(num)
    }
    return index++
})

console.log("Pares:" , pares)
console.log("Impares:" , impares)
*/

/* -- 3
let palavras = ["JS", "é", "muito", "bom"]

console.log(palavras.join(" "))
*/

/* -- 4
const nomes= ["Davi", "Iago", "Vinicius", "Pedro", "Lucas"]

nomeSrc = prompt("Digite um nome: ")

let index = 0
nomes.forEach(nome => {
    if (nome === nomeSrc){
        return console.log(nome + " está no index: " + index)
    }
})
*/

/* -- 5
const tarefas = ["Tirar o lixo", "Arrumar o quarto", "Lavar roupa", "Lavar a louça"]

let index = 0
tarefas.forEach(tarefa => {
    return console.log(`[ ] ${tarefa}`)
})
*/

// Extra

const opcao = ["produtos", "roupas", "veículos", "comidas"]
let c = 0
opcao.forEach(i => {
    return console.log(c, i), c++
})

let escolha = prompt("Escolha uma das opções: ")
console.log("Você escolheu: " + opcao[escolha])