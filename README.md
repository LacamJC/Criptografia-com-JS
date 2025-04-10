# README.md
# Criptografia com JS

Projeto de exemplo que converte caracteres em códigos numéricos baseados em um alfabeto customizado.

## Como usar

```js
const { crypt } = require('./crypt');
const encrypted = crypt('Texto para criptografar');
console.log(encrypted);