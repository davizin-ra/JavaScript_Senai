/*

// Exercício produtos

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
let nomes= ["Davi", "Iago", "Vinicius", "Pedro", "Lucas"]

for (i = 0; i < nomes.length; i++) {
    console.log(`${i} - ${nomes[i]}`)
}
*/

/* -- 2
let cores = ["Azul", "Verde", "Vermelho"]

for (i = 0; i < cores.length; i++) {
    console.log(`A cor ${cores[i]} está na posição ${i}`)
}
*/

