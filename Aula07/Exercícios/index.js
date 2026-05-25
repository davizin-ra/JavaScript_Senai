let c = 0
const contador = document.getElementById('contador')
const button = document.getElementById('btn')

button.addEventListener("click", () => {
    c ++
    contador.innerText = c
})