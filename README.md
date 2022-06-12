# On17-TodasEmTech-JavaScriptIV

Esta é a 12ª semana da turma online: Todas em Tech on17 - Front-end, nesta aula do dia 12/06/2022 teremos os seguintes conteúdos:

- Revisão: Requisições com `fetch()`, `async/await` e  `try/catch()`
- Arrow functions
- Spread Operator and Rest Parameter
- Destruct Assignment
- Conceito de dependências -
    - Gerenciador de pacotes - npm
    - package.json
    - npx (artigo lição de casa pós-aula)

<br>

--- 

## Apresentação

### 1. Quem é a professora Lilit?

<img src='./assets/lilit.jpeg' width=700 alt='selfie de Lilit com cabelos cacheados pretos presos no topo da cabeça, olhos pretos, baton vermelho e mãos segurando o rosto ao lado direito com unhasgrandes, veste uma blusa lilás e o fundo portas brancas de armário'>

[Lilit Bandeira](https://www.instagram.com/lilitravesti), sou uma travesti paraibana residente em São Paulo, trabalho como Software Engineer no Nubank, ex-aluna e professora {reprograma} e professora também no minas programam;

#### Contatos

- E-mail: devlilitbandeira@gmail.com
- [LinkedIn](https://www.linkedin.com/in/lilitbandeira)
- [GitHub](https://github.com/lilitbandeira)

### 2. Quem são as monitoras?

<img src='./assets/pan.jpg' width=700 alt='personagem pan do anime dragon ball gt, tem cabelos pretos e lisos na altura do ombro com lenço laranja amarrado na cabeça possui, tamb ém tem olhos pretos. Veste cropped vermelho, usa mochila azul nas costasa e luvas pretas.No fundo cenário de montanhas e céu azul'>

### 3. Quem são as alunas?

<img src='./assets/yuyuhakusho.jpg' width=700 alt='5 personagens do anime Yu Yu Hakusho, todas estão sorridentes e da esquesra para direita, de cima para baixo temos, a primeira de cabelos lisos e longos castanhos, olhos castanhos e blusa preta, a segunda com cabelos pretos, longos e lisos, olhos castanhos e blusa amarela, a terceira de cabelos verdes médios, olhos castanhos e blusa rosa, a quarta tem cabelos pretos longos, olhos castanhos, blusa branca e está sendo abraçada pela quinta garota que tem cabelos azuis amarrados, olhos castanhos e blusa laranja'>

---
## Acordos

- Manter atenção nas explicações e codar nos momentos definidos;
- Enviar dúvidas no chat para as monitoras;
- Levantar a mão sempre que desejar falar, o que pode ser feito a qualquer momento;
- Manter microfones desligados sempre que alguém estiver falando;
- Manter as câmeras ligadas o máximo de tempo possível;
- Forkem orepositório, clonem seus forkes e criem uma branch com seus nomes, ex.: `lilit-bandeira`
- Enviem dúvidas para este [dontpad](http://dontpad.com/on17_jsV)

---

# Plano de aula

## 1. Revisão: Requisições com `fetch()`, `async/await` e  `try/catch()`

### 1.1 `Promise`

- Promise é um objeto do JavaScript que tem a função de lidar com assincronicidade através de estados;
- Uma promise que representa a eventual falha ou conclusão de uma operação assíncrona;
- Ciclo de vida da Promisse (estados):

  | Estado     | Significado                                                                                  |
  | ---------- | -------------------------------------------------------------------------------------------- |
  | Pending    | Estado inicial, quando a promise ainda está em execução (não resolveu ou rejeitou)           |
  | Resolved   | Quando executou todas as operações com sucesso                                               |
  | Rejected   | Quando a execução finalizou com erro, falhou                                                 |

- Cria-se uma promise a partir da função construtora Promise passando como argumento uma callback que por sua vez recebe como argumentos os dois resultados possíveis para a promise: resolve ou reject, duas outras funções que executam o possível sucesso ou erro da promessa, respectivamente;
- `resolve()`: Função que executa caso a promise seja resolvida com sucesso;
- `reject()`: Função que executa caso a promise seja resolvida com erro;
- Tratamos o retorno das promises através de métodos próprios, que chamam as callbacks depois da conclusão da promise;
- `then()`: Método que ativa uma callback quando a promise for resolvida, o argumento desta callback é sempre o valor retornado na função resolve();
> O then() retorna uma nova promise e por isso vários thens podem ser encadeados para casos onde existam duas ou mais operações assíncronas consecutivas, neste caso o valor do primeiro argumento de cada then encadeado será o valor do retorno do anterior; 
- `catch()`: Método que ativa uma callback quando a promise for rejeitada, o argumento desta callback é sempre o valor retornado na reject();

---
### 1.2. `async/await`

- As palavra-chaves async e await atuam como um 'açúcar sintático' em cima de promises, faciltando a visualização e tornando a leitura do código assíncrono mais próxima do código síncrono;
- Toda função que recebe o `async` se torna uma função assíncrona, que passa a retornar uma promise ao invés de retornar um valor diretamente, como uma promise o retorno desta função pode ser tratado com um then() normalmente;
- Uma função `async` permite que a palavra-chave `await` seja usada dentro dela para invocar código assíncrono;
-  o `await` só funciona dentro de funções `async` e é colocado na frente de qualquer função que retorne promise para pausar o código até que a promise seja resolvida, retornando o valor resultante, importante usar apenas quando necessário tratar respostas de uma promise para não paralizar o fluxo, quando usado da maneira correta não altera a performance da aplicação;
- Não precisa de funções para sincronizar os resultados;
- Outro método importante da promise é o `Promisse.all()` que recebe uma array de funções assincronas independentes entre si, evitando o uso de awaits que não sejam necessários;
- Facilita o tratamento de erros seja com menor encadeamento do .then() ou ainda com o uso de `try/catch`;


---
### 1.3. `try/catch()`

- É usado para marcar um bloco que será testado (`try`) e especifica uma ação para que uma possível exceção(erro) seja capturada pelo `catch()`;
- Ao usar o `try` é criado um bloco de código protegido, que caso ocorra algum erro neste bloco, a execução é desviada para o `catch()`, desta forma a aplicação não será quebrada e o erro poderá ser tratado, permitindo que o código siga sua execução;
- O `catch()` é executado somente quando há alguma exceção no bloco `try`, caso contrário ele será ignorado, o argumento recebido pelo catch é a exceção ocorrida no bloco `try` e costuma ser chamada de `err`/`error`;

---
### 1.4. `fetch()`

- `fetch()` é um método moderno e amplamente utilizado nas aplicações JavaScript atualmente que permite acesso e manipulação de requisições HTTP, este método é fornecido pela <b style="color: greenyellow;">API Fetch</b>. O `fetch()`retorna uma `Promise`.

- Estrutura do `fetch()`:

```js
  fetch(url, init)

  init = {
    method: 'string',
    headers: {},
    body: {},
  }
```

- `url` é geralmente uma string que se refere ao recurso que desejamos buscar, no caso do método `GET` somente este argumento é necessário;
- `init` é um argumento opcional, um objeto que contém qualquer configurações customizadas que desejamos adicionar às requisições, sendo os principais: 
  1. `method` uma string que define o método da requisição;
  2. `headers` um objeto com informações de cabeçalho;
  3. `body` um objeto com informações do corpo da requisição;

---
### 1.5. CORS

- CORS - Cross-Origin Resource Sharing (Compartilhamento de recursos entre origens) permite que um site acesse recursos de outro site mesmo que estejam em domínios diferentes, isso permite contornar a Same-Origin Policy (Política de Mesma Origem) dos navegadores que define que um site só possa chamar recursos de outros sites que estejam sob mesmo domínio o que limita chamadas de REST APIs (back-end) por aplicações JavaScript (Front-end) por estarem em camadas diferentes.

- Com o CORS um domínio pode se comunicar com outros livremente, para isso a configuração é feita do lado da API

---
### 1.6. Vamo exercitar?
---
## 2. Arrow Fuctions

- A Arrow Function (Função de Seta) é uma sintaxe adicionada no JavaScript ES6 (2015), trata-se de uma sintaxe natural da programação funcional que permite escrever expressões de funções mais curtas e com retornos implícitos, removendo a palavra-chave `return` e as chaves `{}` quando possuimos apenas uma linha de execução;

```js

  function somar(a, b) {
    return a + b
  }

  const somar = (a, b) => {
    return a + b
  }

  const somar = (a, b) => a + b
```

- Quais as vantagens da Arrow Function?

  1. Sintaxe curta e de fácil compreenção;
  2. Ideal para utilizarmos como callbacks por serem naturalmente anônimas;

---
## 3. Spread Operator and Rest Parameter

- Sintaxe de Espalhamento `...` permite que um objeto iterável, como uma expressão de array seja expandido para ser usado onde zero ou mais argumentos (para chamadas de funções) ou elementos (para arrays literais) são esperados, ou que um objeto seja expandido onde zero ou mais pares propriedade:valor (para objetos literais) são esperados. _(MDN)_

- Na prática, a partir do spread operator `...` podemos espalhar elementos de arrays e objetos para criar novas arrays e objetos e como argumentos de funções.

### Exemplo 1 - Arrays:

```js
  let compras = ['calça preta', 'blusa animal print', 'salto fino vermelho 12cm']
  let novasCompras = ['argolas grandes de prata', ...compras, 'lace cacheada castanho']

  // espalhando array como argumento de função:

  let argumentos = [2, 3, 5]
  let imprimir = (x, y, z) =>  console.log(x, y, z)
  imprimir(...argumentos)

```

### Exemplo 2 - Objetos literais:

```js

let alunaPart1 = {nome: 'Jéssica', cidade: 'Recife'}
let alunaPart2 = {idade: '23', signo: 'Touro'}

let aluna = { ...alunaPart1, ...alunaPart2, corPreferida: 'Turquesa' }

```

- A sintaxe rest `...` se parece exatamente como a sintaxe de espalhamento, mas esta é usada para <b style="color: greenyellow;">desestruturar</b> arrays e objetos e a sintaxe rest é o oposto disso: coleta multiplos elementos e 'condensa' eles em um único elemento de array.

- A sintaxe de rest parameter (parâmetros rest)  nos permite representar um número indefinido de argumentos como um array. _(MDN)_

### Exemplo 3 - Rest Parameter

```js

function imprimirSoma(a, b, ...argumentos) {
    console.log(return a + b + argumentos.reduce((previous, current) => previous + current));
}

imprimirSoma(2, 5, 4, 3);
imprimirSoma(1, 8, 4, 5, 6);

```

---
## 4. Destruct Assignment

- O JavaScript possui uma sintaxe que chamamos de atribuição por desestruturação, que nos permite extrair dados de arrays e objetos em variáveis separadas;

- Podemos retirar apenas o que nos interessa dos objetos iteráveis através de uma extressão semellhante à que utilizamos para criar estas estruturas:

```js
// atribuindo elementos para uma array
const arr = [5, 3, 7, 1, 9]

// desestruturando a array para extrair elementos desejados
const [first, second] = arr

console.log(first) //retorno: 5
console.log(second) //retorno: 3

// podemos usar o rest parameter para condensar os demais elementos numa nova array
const [primeiro, segundo, ...terceiro] = arr

console.log(terceiro) //retorno: [7, 1, 9]

// podemos usar o spread operator para espalhar os elementos na função .log()
console.log(...terceiro) //retorno: 7 1 9
```

---
## 5. Dependências e NPM

### Node.js

- Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. 

- Isso significa que a partir do node.js podemos rodar códigos escrits em JS do lado do servidor, no back-end, como nós já estamos fazendo desde aulas anteriores, executando arquivos.js no nosso terminal a partir do `node`.

- Vamos testar o node no nosso terminal?

```bash
#vamos rodar o comando:
node
#isso fará do nosso terminal um ambiente node, onde qualquer código JS pode ser interpretado:

#realize a soma:
3 + 2

#tente criar a função:
let subtração = (a, b) => a - b

#chame a função passando valores e veja seu retorno:
subtração(6, 3)

#tudo acontecerá com o mesmo comportamento do console do seu navegador!
```

### Dependências

- Com o Node, foi possivel acrescentar ao uso da linguagem as dependências (também chamadas de libs, pacotes ou módulos), que são bibliotecas que podem ser adicionadas ao projeto node.js para agregar recursos necessários ao projeto.

- Uma biblioteca é uma interface que fornece um conjunto de funcionalidades e/ou informações que podem ser utilizadas no seu projeto sem que você precise recriar tudo do zero, normalmento são recursos necessários em muitos projetos e podemos apenas instalá-los e utilizá-los, facilitando o desenvolvimento da nossa aplicação!

__Exemplo:__ Você trabalha no projeto de um e-commerce que solicita alguns dados da usuária em seu cadastro, dentre eles o CPF, CEP, Telefone e outros valores que possuem formatação específica, além de que como um e-commerce, você trabalhará sempre com valores monetários brasileiros (R$). Para poupar o trabalho de ter que criar um código para formatar cada um destes valores para cada momento do seu código (entrada de dados da usuária, processamento dos dados, saída de dados para usuária), você pode instalar, por exemplo, a lib [`formatar-valores`](https://www.npmjs.com/package/formatar-valores) que possui diversas funções para formatação de valores os padrões brasileiros.

É comum no desenvolvimento de software utilizar bibliotecas externas para realizar tarefas auxiliares em projetos. Isso permite que o desenvolvedor se concentre na lógica de negócios e crie o aplicativo com maior rapidez e eficiência.

<br>

### Gerenciador de pacotes

- Para gerenciar as bibliotecas que usamos no nosso projeto, utilizamos um gerenciador de pacotes. O próprio Node.Js ao ser instalado, instala automaticamente o seu gerenciador de pacotes padrão, o [NPM](https://www.npmjs.com/) (_Node Package Manager_).

- É através dos gerenciadores (`npm`, `yarn`) que também gerenciamos frameworks, como o <b style="color: greenyellow;">ReactJS</b>, o <b style="color: greenyellow;">Angular</b> ou o <b style="color: greenyellow;">VueJS</b>

### Como utilizar o npm

- Para criar o arquivo `package.json` que armazena os metadados úteis sobre o projeto e gerencia os módulos do projeto:

```bash
npm init
npm init -y
```
> podemos usar o -y para criar automaticamente o package.json sem responder todas as perguntas padrão

<br>

- Para instalar uma nova dependencia ao projeto:

```bash
npm install <nome-do-pacote>
```
> Ao instalar um pacote no projeto, os arquivo `package-lock.json` e a pasta `node_modules` são criados:

> O `package-lock.json` é o arquivo que contém informações mais detalhadas dos módulos;

> O `node_modules` é usada para armazenar os módulos necessários para o projeto;

<br>

- Para atualizar uma dependência:

```bash
npm update <nome-do-pacote>
```

- Para desinstalar uma dependência:

```bash
npm uninstall <nome-do-pacote>
```

- Para instalar dependencias em um projeto que já possui `package.json` e `package-lock.json`:

```bash
npm install
```
 
<br>

- O npm possui um comando que se chama `npx` que é um e<b>X</b>ecutor, que ao invés de instalar local ou globalmente um pacote do npm, ele busca no se o pacote já está instalado global ou localmente para executá-lo e, caso contrário, ele baixa e instala o pacote armazenando-os em cache, sem salvá-los de fato.

- O npx é amplamento utilizado, por exemplo, para criar um aplicativo de React

```bash
npx create-react-app <nome-do-app>
```

---
## 6. Desafios da Semana

- Utilizando o método fetch e a biblioteca axios para consumir o endpoint da [Digimon API](https://digimon-api.vercel.app/) que retorna um digimon pelo seu nome, deixando a usuária entrar com o nome de um digimon e ao clicar num botão, as informações do digimon serão carregadas! Dica: mostre uma lista com os nomes dos digimons para a usuária, isso pode ser feito através do endpoint que retorna todos os digimons.

---
## 7. Referências

https://docs.npmjs.com/cli/v7/commands
https://www.digitalocean.com/community/tutorials/how-to-use-node-js-modules-with-npm-and-package-json-pt

---
