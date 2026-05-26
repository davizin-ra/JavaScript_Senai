const botao = document.getElementById("botaoTema")
const corpoPage = document.body
const caixa = document.getElementById("caixa")
const titulo = document.getElementById("titulo")
const texto = document.getElementById("texto")

let modoEscuro = false

botao.addEventListener("click", () => {
    if (modoEscuro) {
        corpoPage.style.backgroundColor = "#FFFFFF"
        corpoPage.style.color = "#000000"

        caixa.style.backgroundColor = "rgb(0, 0, 0, 7%)"
        caixa.style.boxShadow = "1px 2px 20px rgb(0, 0, 0, 30%)"
        botao.style.backgroundColor = "#000000"
        botao.style.color = "#FFFFFF"

        texto.style.color = "#000000"
        titulo.style.color = "#000000"

        botao.innerText = "Ativar modo escuro 🌚"
        modoEscuro = false
    } else {
        corpoPage.style.backgroundColor = "#000000"
        corpoPage.style.color = "#FFFFFF"

        caixa.style.backgroundColor = "rgb(255, 255, 255, 7%)"
        caixa.style.boxShadow = "1px 2px 20px rgb(255, 255, 255, 30%)"
        botao.style.backgroundColor = "#FFFFFF"
        botao.style.color = "#000000"

        texto.style.color = "#FFFFFF"
        titulo.style.color = "#FFFFFF"

        botao.innerText = "Ativar modo claro 🌝"
        modoEscuro = true
    }
})