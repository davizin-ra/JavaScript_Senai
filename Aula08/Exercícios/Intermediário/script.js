const form = document.getElementById("form")
const user = document.getElementById("user")
const senha = document.getElementById("senha")
const texto = document.getElementById("text")
const validate = document.getElementById("validate")

const loginC = {
    user: "admin",
    senha: "1234"
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (user.value == loginC.user && senha.value == loginC.senha) {
        texto.innerText = "Login efetuado"
        validate.style.backgroundColor = "#008500ff"
        validate.style.marginBottom = "20px"
    }
    else {
        texto.innerText = "Credenciais inválidas"
        senha.value = ""
        validate.style.backgroundColor = "#810000ff"
        validate.style.marginBottom = "20px"
    }
})