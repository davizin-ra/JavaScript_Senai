/*
const titulo = document.getElementById("titulo");
const valor = document.getElementById("titulo").innerText;
console.log(valor);
*/

/*
const titulo = document.querySelector("#titulo")
const paragrafo = document.querySelector(".paragrafo")
const tituloH2 = document.querySelector("h2")

console.log(titulo);
console.log(paragrafo);
console.log(tituloH2)
*/

/*
const elementos = document.querySelectorAll(".texto")
console.log(elementos);

elementos.forEach(elemento => console.log(elemento.innerText))

elementos.forEach(elemento => elemento.innerText = "Alterado")

elementos.forEach(elemento => elemento.innerHTML = "<h2>Item</h2>")
elementos.forEach(elemento => elemento.style.color = "#0000ff")

const campo = document.getElementById("campo") // <input/>
const resultado = document.getElementById("resultado") // <p/>
const botao = document.getElementById("btn")

campo.addEventListener("keyup", () => {
    resultado.innerText = campo.value
    console.log("Tecla pressionada")
})

const elemento = document.getElementById("troca-cor") // </3>

elemento.addEventListener("mouseover", () => {
    elemento.style.backgroundColor = "#FF0000"
})

elemento.addEventListener("mouseout", () => {
    elemento.style.backgroundColor = ""
    botao.style.backgroundColor = "#0000FF"
})

document.addEventListener("mousemove", (evento) => {
    console.log(`Posição do x / y: ${evento.clientX} ${evento.clientY}`)
})
*/

/*
const form = document.getElementById('form') // <form/>

form.addEventListener("submit", (evento) => {
    evento.preventDefault(); // impede o comportamento padrão ( recarregar a página )

    const nome = document.getElementById('nome').value; // <input/>
    console.log("nome: " + nome)
})
*/

/*
const form = document.getElementById('form') // <form/>
const novoElemento = document.createElement("p"); // cria um <p/>
novoElemento.innerText = "Elemento novo criado";

form.appendChild(novoElemento); // atribui o <p/> ( elemento filho ) para dentro do <form/> ( elemento pai )

const botao = document.createElement('button')
botao.innerText = "Excluir elemento"
form.appendChild(botao)

botao.addEventListener('click', (e) => {
    e.preventDefault() // impede o comportamento padrão ( recarregar a página )

    novoElemento.remove()
})
*/

const input = document.getElementById("input") // <input/>
const botao = document.getElementById("add") // <button/>
const lista = document.getElementById("lista") // <ul/>

botao.addEventListener("click", () => {
    const valor = input.value;
    const li = document.createElement("li");
    li.innerText = valor;

    lista.appendChild(li)

    li.value = ""
})