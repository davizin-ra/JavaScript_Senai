# Estruturas de repetição

Permite executar várias vezes um bloco de código com base em uma condição

Exercícios - [link](https://sparkling-link-662.notion.site/Exerc-cios-de-Repeti-o-32816837961280bf9c24c69095408028)

## For

Usamos quando sabemos a quantidade que o programa será executado

```js
for (let i = 1; i <= 5; i++) {
  console.log("Hello World");
}
```

## While

Executa um bloco de código enquanto uma condição for verdadeira

```jsa
let contador = 1;

while (contador <= 3) {
  console.log("Repetindo...");
  console.log(contador);
  contador++;
}
```

## Do While

Executa um bloco de código pelo menos uma vez e depois verifica se a condição é verdadeira

```js
let numero = 5;

do {
  console.log("Executou pelo menos uma vez");
} while (numero < 3);
```

## Foreach

Usado para percorrer lista de elementos

```js
const nomes = ["Davi", "Iago", "Vinicius"];

nomes.forEach((nome) => {
  console.log(nome);
});
```
