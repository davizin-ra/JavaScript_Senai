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


const elementos = document.querySelectorAll(".texto")
console.log(elementos);

elementos.forEach(elemento => console.log(elemento.innerText))

elementos.forEach(elemento => elemento.innerText = "Alterado")

elementos.forEach(elemento => elemento.innerHTML = "<h2>Item</h2>")
elementos.forEach(elemento => elemento.style.color = "#0000ff")

const campo = document.getElementById("campo") // <input/>
const resultado = document.getElementById("resultado") // <p/>

campo.addEventListener("keyup", () => {
    resultado.innerText = campo.value
    console.log("Tecla pressionada")
})

const elemento = document.getElementById("troca-cor") // </3>

elemento.addEventListener("mouseover", () => {
    elemento.style.backgroundColor = "#FF0000"
})