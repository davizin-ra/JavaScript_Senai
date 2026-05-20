// Fácil

/* -- 1
for (let i = 1; i <= 10; i++){
    console.log(i)
}
*/

/* -- 2
let num = Number(prompt("Digite um número:"))

for (let i = 1; i <= 10; i++){
    console.log(i * num)
}
*/

/* -- 3
let num = Number(prompt("Digite um número:"))
let res = 0

for (let i = 1; i <= num; i++){
    res += i
}
console.log(res);
*/

// Médio

/* -- 1
for (let i = 0; i <= 50; i += 2){
    console.log(i)
}
*/

/* -- 2
const al = Math.floor(Math.random() * 100)
console.log(al);

do {
    num = Number(prompt("Digite um número:"))
}
while (num != al)
*/

/* -- 3
let num = Number(prompt("Digite um número:"))

while (num >= 0){
    console.log(num)
    num --
}
*/

/* -- 4
do {
let senha = prompt("Digite a senha")
console.log("Acesso negado");
} while (senha != "1234")
    
console.log("Acesso permitido");
*/

/* -- 5
let soma = 0
do {
    num = Number(prompt("Digite um número:"))
    soma += num
} while(num != 0)

console.log("Você digitou 0, operação finalizada")
console.log("Soma total: " + soma);
*/

/* -- 6
let soma = 0
for (let i = 1; i <= 3; i ++){
    num = Number(prompt(`Digite o número ${i}:`))
    soma += num
}

console.log(`Média dos números digitados: ${soma/3}`)
*/

// Difícil

/* -- 1
let numS = prompt("Digite um número:")
soma = 0

for(i = 0; i < numS.length; i++){
    soma += Number(numS[i])
}
console.log(soma)
*/

/* -- 2
let num = Number(prompt("Digite um número:"))

for (let i = 1; i <= 10; i++){
    console.log(i * num)
}
*/

/* -- 3
let numS = prompt("Digite um número:")
let c = 0
let ls = ""
let fim = ""
while( c < numS.length){
    console.log(numS[c])
    ls = numS[c] + ls
    c++
}
console.log(ls)
*/

/* -- 4
let maior = null;
for (let i = 1; i <= 5; i++){
    num = Number(prompt("Digite um número:"))
    if (num > maior){
        maior = num
    }
}
console.log("Maior número é: ", maior)
*/

/* -- 5
const nomes = ["Davi", "Iago", "Vinicius"];

nomes.forEach((nome) => {
  console.log(nome);
});
*/

const produtos = ["Hamburguer", "Batata Frita", "Sorvete"]

produtos.forEach((produto) => {
  console.log(produto);
});

let esc = String(prompt("Escolha uma das opções:  "))
while(esc != "Hamburguer" || esc != "Batata Frita" || esc != "Sorvete" ){
    prompt("Digite uma opção válida: ")
}

console.log("Você escolheu: " + esc)