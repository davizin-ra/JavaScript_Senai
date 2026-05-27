const inputTarefa = document.getElementById("inputTarefa")
const botaoAdd = document.getElementById("botaoAdd")
const listaTarefas = document.getElementById("listaTarefas")

// criando uma lista vazia

let tarefas = [1, 324, 233, 4];

// salvando tarefas no local storage

function salvar(tarefas){
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
}

// mostrando tarefas na tela

function mostrarTarefas(){
    listaTarefas.innerHTML = "";

    tarefas.forEach(tarefa => {
        const li = document.createElement("li");
        li.innerText = tarefa;
        listaTarefas.appendChild(li)
    })
}