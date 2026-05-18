// Fácil

/* -- 1
let idade = Number(prompt("Digite sua idade"))

if (idade < 18){
    console.log("Você é menor de idade")
} else{
    console.log("Você é maior de idade")
}
*/

/* -- 2
let num = Number(prompt("Digite um número"))

if(num <= 0){
    console.log(`${num} é negativo`)
} else{
    console.log(`${num} é positivo`)
}
*/

/* -- 3
let nota = Number(prompt("Digite a nota do aluno"))

if(nota >= 60){
    console.log("Aluno aprovado")
} else{
    console.log("Aluno reprovado")
}
*/

/* -- 4
let num = Number(prompt("Digite um número"))

if(num < 0){
    console.log(`${num} é negativo`)
} else if (num == 0 ){
    console.log(`${num} é neutro`)
} else{
    console.log(`${num} é positivo`)
}
*/

/* -- 5
let idade = Number(prompt("Digite sua idade"))

if(idade < 12){
    console.log("Criança")
} else if(idade < 17){
    console.log("Adolescente")
} else {
    console.log("Adulto")
}
*/

/* -- 6
let num = Number(prompt("Digite um número"))

if (num % 2 == 0) {
    console.log(`${num} é par`)
} else {
    console.log(`${num} é impar`)
}
*/

// Médio

/* -- 1
let num = Number(prompt("Digite um número"))
let num2 = Number(prompt("Digite outro número"))
let op = prompt("Escolha a operação ( +, -, *, / )")

if (op == "+"){
    console.log(`Resultado: ${num + num2}`)
} else if (op == "-"){
    console.log(`Resultado: ${num - num2}`)
} else if (op == "*"){
    console.log(`Resultado: ${num * num2}`)
} else if (op == "/"){
    console.log(`Resultado: ${num / num2}`)
} else {
    console.log("Operação inválida")
}
*/

/* -- 2
let num = Number(prompt("Digite um número"))
let num2 = Number(prompt("Digite o segundo número"))
let num3 = Number(prompt("Digite o terceiro número"))

if (num > num2 && num > num3){
    console.log(num + " é o maior número")
} else if (num2 > num && num2 > num3){
    console.log(num2 + " é o maior número")
} else {
    console.log(num3 + " é o maior número")
}
*/


/* -- 3
let val = Number(prompt("Digite o valor da compra:"))

if (val > 100){
    console.log(`Valor da compra com desconto: R$:${val * 0.9}`)
} else {
    console.log(`Desconto não disponível, valor final: R$:${val}`)
}
*/

/* -- 4
let user = prompt("Digite seu usuário:")
let senha = prompt("Digite sua senha:")

const login = {user: "admin", senha: "1234"}

if (user == login.user && senha == login.senha){
    console.log("Login realizado com sucesso.")
} else{
    console.log("Credenciais inválidas, tente novamente")
}
*/

// Avançado

/* -- 1
let valorCompra = Number(prompt("Digie o valor da compra:"))

if (valorCompra == 100){
    console.log("Frete gátis")
} else if (valorCompra == 50){
    console.log("Frete de R$:10,00")
} else {
    console.log("Frete de R$:20,00")
}
*/

/* -- 2
let idade = Number(prompt("Digite sua idade:"))
let convite = prompt("Digite se possui convite ( sim / nao )")

if (idade >= 18 || convite == 'sim'){
    console.log("Pode entrar")
} else {
    console.log("Acesso negado")
}
*/

/* -- 3
let nota = Number(prompt("Digite sua nota:"))

if (nota >= 90){
    console.log("Sua nota é A")
} else if (nota >= 80){
    console.log("Sua nota é B")
} else if (nota >= 70){
    console.log("Sua nota é C")
} else if (nota >= 60){
    console.log("Sua nota é D")
} else {
    console.log("Sua nota é F")
}
*/

/* -- 4
let altura = Number(prompt("Digite sua altura em Cm"))
let peso = Number(prompt("Digite seu peso em Kg"))

const imc = peso / (altura / 100) ** 2

if (imc >= 30){
    console.log("Obesidade")
} else if (imc >= 25){
    console.log("Sobrepeso")
} else if (imc >= 18){
    console.log("Saudável")
} else {
    console.log("Magresa")
}
*/

/* -- 5
let estoque = 10;

if (estoque < 10) {
    if (estoque == 0) {
        console.log("Produto esgotado")
    } else {
        console.log("Últimas unidades")
    }
} else {
    console.log("Produto disponível")
}
*/