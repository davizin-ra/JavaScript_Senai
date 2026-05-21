# Funções nativas do js

[Exercícios Funções](https://sparkling-link-662.notion.site/Exerc-cios-Fun-es-329168379612803fb7a1c4709ea0955d)

## Map

Percorre uma lista e cria uma nova lista com base em uma condição

```js
let numeros = [1, 2, 3, 4];
```

```js
let numerosDobro = numeros.map(function (num) {
  return num * 2;
});
```

### Arrow Function

```js
let numerosDobro = numeros.map((num) => num * 2);
```

```js
console.log(numerosDobro); // [2, 4, 6, 8]
```

## If Ternário

```js
let idade = 18;
let resposta = idade > 75 ? "idoso" : idade >= 18 ? "maior de idade" : "menor de idade";

console.log(resposta); // maior de idade
```

## Filter

Filtra os elementos da lista com base em uma condição

```js
let numeros = [5, 10, 15, 20];
let maiores = numeros.filter((num) => num > 10);

console.log(maiores); // 15, 20
```

## Reduce

Reduz os valores de um array para um único valor

```js
let numeros = [1, 2, 3, 4];
let soma = numeros.reduce(
  (acumulador, num) => acumulador + num,
  0 /* - valor inicial*/,
);

console.log(soma); // 10
```

## Find

Retorna o primeiro elemento que atende a uma condição

```js
const produtos = [
  {
    id: 1,
    nome: "Teclado",
    preco: 50,
  },
  {
    id: 2,
    nome: "Mouse",
    preco: 30,
  },
];

let item = produtos.find((produto) => produto.id === 2);

console.log(item); // item com id 2
```

## Split

Divide uma string em partes, transformando em uma lista

```js
let frase = "Js é muito bom!";

let palavras = frase.split(" "); // ["Js", "é", "muito", "bom"]
console.log(palavras);
```

## Trim

Remove espaços do início e final de uma string

```js
let nome = "       Davizin         ";
let nomeLimpo = nome.trim();

console.log(nomeLimpo); // Davizin
```

## Includes

Verifica se existe um valor dentro de uma lista ou string

```js
let frutas = ["banana", "maçã"];
let frutaExiste = frutas.includes("banana");

console.log(frutaExiste); // true
```

## ToLowerCase / ToUpperCase

Transforma o texto em minúsculo e maiúsculo

```js
let nome = "Davizin";

console.log(nome.toLowerCase()); // davizin
console.log(nome.toUpperCase()); // DAVIZIN
```

## Some

Verifica se pelo menos um item da lista atende a condição

```js
let numeros = [1, 3, 5, 8];

let temPar = numeros.some((num) => num % 2 === 0);
console.log(temPar); // true
```

## Every

Verifica se todos os elementos da lista atendem a uma condição

```js
let numeros = [1, 3, 5, 8];

let todosPar = numeros.every((num) => num % 2 === 0);
console.log(todosPar); // false
```

## Sort

Ordena os elementos de uma lista

```js
let numeros = [4, 23, 1, 6];
let letras = ["c", "f", "a", "b"];

letras.sort();
numeros.sort((a, b) => a - b);

console.log(letras + numeros); // 1, 4, 6, 23, a, b, c, f
```

## Reverse

Inverte a ordem de um array

```js
let numeros = [4, 23, 1, 6];
numeros.reverse();

console.log(numeros); // 6, 1, 23, 4
```

## Join

Junta os elementos de um array em uma string

```js
let palavras = ["JS", "é", "muito", "bom"];
let frase = palavras.join(" ");

console.log(frase); // JS é muito bom
```

## Push / Pop

Adicionar e remover elementos no final do array

```js
let lista = ["A", "B"];

lista.pop(); // remove
lista.push("C"); // adiciona

console.log(lista);
```

## Shift / Unshift

Remover e adicionar elementos no inicio do array

```js
let lista = ["B", "C"];

lista.shift(); // remove
lista.unshift("A"); // adiciona

console.log(lista);
```

## Slice

Cria uma cópia da lista com posições específicas

```js
let numeros = [1, 2, 3, 4];
let copia = numeros.slice(1, 3); // não inclui a posição final

console.log(copia); // 2, 3
```

## Splie

Remove ou adiciona elementos em qualquer posição

### Removendo

```js
let numeros = [1, 2, 3, 4];
numeros.splice(1, 1); // (posição, quantidade de itens a serem removidos)

console.log(numeros); // 1, 3, 4
```

### Adicionando

Removendo itens

```js
let frutas = ["Maçã", "Banana", "Manga", "Abacaxi"];
frutas.splice(0, 3, "Limão", "Kiwi"); // (posição, quantidade de itens a serem removidos, item adicionado 1, item adicionado 2)

console.log(frutas); // Limão, Kiwi, Abacaxi
```

Sem remover

```js
let frutas = ["Maçã", "Banana", "Manga"];
frutas.splice(2, 0, "Limão", "Kiwi");

console.log(frutas); // Maçã, Banana, Limão, Kiwi, Manga
```

### Replace

Substitui uma parte da string

```js
let texto = "Hello World";
let novoTexto = texto.replace("World", "Javascript");

console.log(novoTexto); // Hello Javascript
```
