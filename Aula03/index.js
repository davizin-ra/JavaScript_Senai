/*
let temperatura = Number(prompt("Digite uma temperatura: "))

if (temperatura < 20){
    console.log("Está frio!")
} else {
    console.log("Está calor!")
}
*/

/*
let bateria = Number(prompt("Digite o nível da sua bateria: "));

if (pateria <= 30) {
  alert("Bateria está fraca");
} else {
    alert("Bateria está carregada!")
}
*/

/*
let tipoUsuario = prompt("Digite o tipo do usuário: (admin / cliente)").toLowerCase()

if (tipoUsuario == "admin"){
    console.log("Acesso total ao sistema")
} else if (tipoUsuario == "cliente"){
    console.log("Acesso limitado ao sistema")
} else {
    console.log("Tipo de usuário inválido")
}
*/

/*
let velocidade = Number(prompt("Digite a velocidade da internet:"))

if (velocidade >= 100){
    console.log("Internet rápida")
} else if (velocidade >= 50){
    console.log("Internet média")
} else {
    console.log("Internet lenta")
}
*/

/*
let quantidade = 10;

if (quantidade = 0){
    console.log("Nenhum item selecionado")
} else if (quantidade < 5){
    console.log("Há poucos itens")
} else if (quantidade >= 5 && quantidade < 10){
    console.log("Quantidade média de itens")
} else {
    console.log("Há muitos itens")
}
*/

/*
const nota = 10

if (nota > 7){
    if (nota == 10){
        console.log("Aprovado com premiação")
    }else{
        console.log("Apovado")
    }
} else {                                                          
    console.log("Reprovado")
}
*/

/*
let dispositivo = prompt("Você está usando: celular, tablet ou computador? ");

if (dispositivo == "celular" || dispositivo == "tablet"){
    console.log("Modo mobile ativado")
} else if (dispositivo == "computador"){
    console.log("Modo desktop ativado")
} else {
    console.log("Dispositivo desconhecido")
}
*/

let tema = prompt("Digite um tema (claro / escuro / azul )")

switch (tema){
    case "claro":
        console.log("Tema claro ativado!")
        break
    case "escuro":
        console.log("Tema escuro ativado!")
        document.body.style.backgroundColor = "#000000"
        break
    case "azul":
        console.log("Tema azul ativado!")
        document.body.style.backgroundColor = "#0000BB"
        break
    default:
        console.log("Tema inválido")
        break
}
