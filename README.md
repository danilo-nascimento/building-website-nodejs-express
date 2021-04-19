# Building a website with Node.js and Express

This repository contains the code for my course 'Building a Website with Node.js Node.js' on [LinkedIn Learning](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3).

The master branch contains the initial version to get started with, while the branches contain the state of the code at the beginning (e.g. 02_02**b**) and end (e.g. 02_02**e**) of a video.

## Setting up the project

- In your terminal, create directory `building-website-nodejs-express` and **change into it**.
- Run
  ```bash
  git clone --bare git@github.com:danielkhan/building-website-nodejs-express.git .git
  git config --bool core.bare false
  git reset --hard
  git branch
  ```

Everything else will be discussed in my course.

## Uso básico

```js
const express = require('express');

const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.get('/speakers', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/speakers.html'));
});

app.listen(port, () => {
  console.log(`Ouvindo na porta ${port}!`);
});
```

### Configuração ESLint e Prettier

1. Instalar os packages:
   - eslint
   - prettier
   - eslint-config-prettier
   - eslint-plugin-prettier
2. Configurar o arquivo .eslintrc
   1. Adicionar ao extends e plugins o prettier - Não funcionou
3. Configurar o arquivo .prettierrc
4. Caso não tenha no VS Code - O plugin ESlint
5. Caso não tenha no VS Code - O plugin Prettier
6. Configurar o workspace:
   ```json
   "eslint.format.enable": true,
   	"editor.formatOnSave": true,
   	"editor.defaultFormatter": "esbenp.prettier-vscode",
   	"editor.codeActionsOnSave":{
   		"source.fixAll": true
   	}
   ```

### Configuração do Code spell checker

1. Instale a extensão code spell checker
2. Instale a versão em português Portuguese code spell checker
3. Adicione nas configurações do Code spell checker o português como idioma válido

### Template Engines

Permite o reúso de códigos html com includes, interpolação entre outras features.

[Link dos template engines disponíveis](https://expressjs.com/en/resources/template-engines.html)

### Middleware

**Sintaxe**

- app.use(callback)
- app.use(path, callback);
- app.use([get | post | put | delete | ...](path, callback));

**Habilidades**

- Executar qualquer código
- Mudar os objetos request e response
- Finalizar o ciclo request-response normalmente enviado dados ao invocador
- Invocar o próximo middleware no stack

**Exemplos**

```js
app.use((req, res, next) => {
  // Faça algo
  return next();
});

// Com rota
app.use('/feedback', (req, res, next) => {
  // Faça algo
  return res.send('Hello, World!');
});
```

![](imagens/001.jpg)

**Parâmetros para Routes**

```js
app.get('/speakers/:speakername', handler);

// Atende: /speakers/rainha
// Atende: /speakers/chuchu

app.get('/speakers/:speakername?', handler);

// Atende: /speakers/
// Atende: /speakers/chuchu
```

![](imagens/002.jpg)

### Router

- Para utilizar, crie um diretório routes com os arquivos respectivos para cada rota
- Crie um index.js no diretório para tratar cada rota
- No arquivo do servidor, adicione o index da rota
- O uso do module.exports como função permite passar parâmetros às rotas

**Exemplo**

```js
const router = express.Router();
router.<verb>(<path:URI>, <callback>)
```

### Session Middleware

**Utilizar com criptografia para evitar que o usuário possa manipular o cookie ou session**

**Exemplo**

```js
const cookieSession = require('cookie-session');

app.set('trust proxy', 1); // Necessário para o deploy

app.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
  })
);
```

- Instale o package cookie-session
- [Documentação do package cookie-session](https://github.com/expressjs/cookie-session#readme)
- É possível adicionar dados à sessão via objeto request: request.session.foo = 'bar'
- [Documentação do uso do cookie-session do Express](https://expressjs.com/en/resources/middleware/cookie-session.html)
