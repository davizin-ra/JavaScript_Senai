# Manipulação de DOM ( Document Object Model )

## Métodos de seleção de elementos

### getElementById

Seleciona um elemento pelo ID

```js
const titulo = document.getElementById("titulo");
const valor = document.getElementById("titulo").innerText; // pega o valor dentro do h1
```

### querySelector

Seleciona o primeiro elemento que corresponde a um seletor CSS ( tag, id, classe )

```js
const tituloH2 = document.querySelector("h2"); // tag
const titulo = document.querySelector("#titulo"); // id
const paragrafo = document.querySelector(".paragrafo"); // class
```

### querySelectorAll

Seleciona todos os elementos que correspondem a um seletor

```js
const elementos = document.querySelectorAll(".texto");
console.log(elementos);

elementos.forEach((elemento) => console.log(elemento.innerText));
```

### getElementByClassName

Seleciona todos os elemntos pela classe

## Eventos

### Evento de clique

Utilizado normalmente em botões

```js
const botao = document.getElementById("btn"); // <button/>

botao.addEventListener("click", () => {
  alert("Você clicou");
});
```

### Eventos de digitação

Dispara sempre que digita em tempo real

```js
const campo = document.getElementById("campo"); // <input/>
const resultado = document.getElementById("resultado"); // <p/>

campo.addEventListener("input", () => {
  resultado.innerText = campo.value;
});
```

#### Keyup - Dispara quando solta a tecla

```js
campo.addEventListener("keyup", () => {
  resultado.innerText = campo.value;
  console.log("Tecla pressionada");
});
```

### Eventos do mouse

#### Mouseover - Quando o mouse passa por cima

```js
const elemento = document.getElementById("troca-cor"); // <h3/>

elemento.addEventListener("mouseover", () => {
  elemento.style.backgroundColor = "#FF0000";
});
```

#### Mouseout - Quando o mouse sai de cima

```js
elemento.addEventListener("mouseout", () => {
  elemento.style.backgroundColor = "#0000FF";
  botao.style.backgroundColor = "#0000FF";
});
```

#### Mousemove - Pega a posição do mouse

```js
document.addEventListener("mousemove", (evento) => {
  console.log(`Posição do x / y: ${evento.clientX} ${evento.clientY}`);
});
```

### Eventos de formulário

```js
const form = document.getElementById("form"); // <form/>

form.addEventListener("submit", (evento) => {
  evento.preventDefault(); // impede o comportamento padrão ( recarregar a página )

  const nome = document.getElementById("nome").value; // <input/>
  console.log("nome: " + nome);
});
```

### Criar elementos

```js
const form = document.getElementById("form"); // <form/>
const novoElemento = document.createElement("p"); // cria um <p/>
novoElemento.innerText = "Elemento novo criado";

form.appendChild(novoElemento); // atribui o <p/> ( elemento filho ) para dentro do <form/> ( elemento pai )
```

### Excluir elementos

```js
const botao = document.createElement("button");
botao.innerText = "Excluir elemento";
form.appendChild(botao);

botao.addEventListener("click", (e) => {
  e.preventDefault(); // impede o comportamento padrão ( recarregar a página )

  novoElemento.remove();
  // form.removeChild(novoElemento) pode ser usado também
});
```
