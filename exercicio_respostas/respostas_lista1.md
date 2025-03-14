# Gabarito das questões objetivas

| Questão | Resposta                                                                         | Justificativa                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1       | a) A saída será undefined seguido de erro                                        | O código retorna `undefined`, pois a variável `x` é chamada antes de ser declarada. Posteriormente, o erro "Cannot access 'y' before initialization" indica que não é possível acessar a variável `y` antes de sua inicialização.                                                                                                                                                                                         |
| 2       | d) Remover completamente a verificação `if (a === 0)`                            | Ainda que um dos elementos da soma seja zero, isso não implicará em um resultado errado. Além disso, zero é considerado um número válido, eliminando a necessidade da verificação, que não interferirá diretamente no resultado.                                                                                                                                                                                          |
| 3       | b) O código imprime 200.                                                         | Isso ocorre porque, mesmo que o valor passado seja referente ao `case "eletrônico"`, a falta do elemento `break;` (que faz parar a execução do `switch`) faz com que a variável `preco` assuma o próximo valor da lista, parando apenas no `break;` de `"vestuário"`, com o valor sendo igual a 200.                                                                                                                      |
| 4       | d) 24                                                                            | Isso ocorre porque o array `números` recebe uma série de tratamentos: primeiro, a lista é mapeada (`.map`), multiplicando todos os valores por 2. Após isso, os componentes são filtrados (`.filter`), resultando apenas nos valores acima de 5. Por fim, todos os itens passam pelo `.reduce`, executando uma soma (que se inicia valendo 0) entre os elementos restantes.                                               |
| 5       | c) ["banana", "abacaxi", "manga", "laranja"]                                     | Isso ocorre pois a lista sofre uma transformação através do método `.splice`, nele, os valores na posição 1 (`"maçã"`) e 2 (`"uva"`) do array são cortados/excluídos, ao mesmo que `"abacaxi"` e `"manga"` são inclusos... Por fim, o resultado dessa "operação" é somado ao último valor que não foi manipulado (`"laranja"`)                                                                                            |
| 6       | b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.   | Ambas as alternativas estão corretas, mas a segunda apenas demonstra a criação de uma classe que herda de outra (`extends`) e não funciona diretamente como uma justificativa para o comportamento de uma classe herdeira.                                                                                                                                                                                                |
| 7       | a) I e II são verdadeiras.                                                       | As duas primeiras alternativas (I e II) são verdadeiras, pois de fato a classe `Funcionario` herda atributos da classe `Pessoa` diretamente, assim como o método `apresentar()`, que posteriormente é sobreposto pelo método `apresentar()` da classe `Funcionario`, uma vez que a instância foi criada a partir dela. Por fim, a última alternativa (III) está errada, pois o JavaScript suporta sim herança de classes. |
| 8       | d) A asserção é verdadeira e a razão é verdadeira, e a razão explica a asserção. | Ambas as afirmações estão corretas, pois o polimorfismo existe sim na arquitetura POO, permitindo diferentes respostas para um mesmo input através de diferentes objetos, o que é explicado pela razão, que menciona que, em JavaScript, isso se dá através da implementação do método de sobrecarga (muitos métodos iguais, que recebem diferentes inputs e atuam em diferentes situações).                              |

---

<br>

# Gabarito das questões dissertativas

### Questão 9

#### Código disponibilizado:

```javascript
function somaArray(numeros) {
  for (i = 0; i < numeros.size; i++) {
    soma = 2 * numeros[i];
  }
  return soma;
}
console.log(somaArray([1, 2, 3, 4]));
```

#### Erros:

- Lista é chamada diretamente na função, sem estar declarada em uma variável
- Variáveis com os tipos não definidos (declaradas de maneira incorreta)
- Utilização de `.size`, ao invés de `.length` (não chega a ser um erro, mas optei por substituir pelo método aprendido em sala)
- Falta do + na linha `soma = 2 * numeros[i];`

#### Código corrigido:

```javascript
const numeros = [1, 2, 3, 4]; // Mudança: Criar um array para os valores da lista

function somaArray(numeros) {
  let soma = 0; // Mudança: Definir o tipo das variáveis (let/const...) para soma e "i"
  for (let i = 0; i < numeros.length; i++) {
    // Mudança: Subtituir size para length
    soma += 2 * numeros[i]; // Mudança: Adicionar um + ao "=" para que o for some os valores a cada ciclo
  }
  return soma;
}
console.log(somaArray(numeros)); // Mudança: substituir o array diretamente na chamada da função pelo nome da váriável
```

---

### Questão 10.

#### Exemplo prático:

```javascript
// Classe Mãe/pai
class Produto {
  constructor(nome, preco) {
    // Atributos
    this.nome = nome;
    this.preco = preco;
  }
  // Método da classe que calcula o preço do produto com um desconto de 10%
  calcularDesconto() {
    let precoDesconto = (this.preco * (100 - 10)) / 100;
    return precoDesconto;
  }
}

// Classe herdada da classe Produto (classe filha)
class Livro extends Produto {
  // Retoma os atributos através da herança
  constructor(nome, preco) {
    super(nome, preco);
  }
  // Método da classe que calcula o preço do livro com um desconto de 20%
  calcularDesconto() {
    let precoDesconto = (this.preco * (100 - 20)) / 100;
    return precoDesconto;
  }
}

// Criação de um objeto da classe Livro
const livroInfantil = new Livro("Pequeno Príncipe", 100);
// Chamada do método calcularDesconto() da classe Livro
console.log(livroInfantil.calcularDesconto());
```

#### Explicação da modificação:

- Ao modificar o método calcularDesconto() na classe Livro, ele passou a sobrepor o método de mesmo nome na classe Produto (Nesse caso, o que acontece é que como criamos o objeto o instanciando através da classe livro, o método "calcularDesconto" presente na classe livros é mais relevante e sobrepõe o da classe mãe/pai).
- A escolha da mudança foi feita porque o método original da classe Produto não atendia totalmente às necessidades da classe Livro, o que poderia gerar um esforço adicional desnecessário (para reverter o método anterior). Dessa forma, como o objeto foi instanciado a partir da classe Livro, o método utilizado foi o definido nessa classe, tornando-o mais adequado para suas características específicas.
- Contudo, o que eu faria, seria criar um método com outro nome para livro, inibindo confusões de modo que o método da classe pai/mãe só seria utilizado quando necessário, sem causar confusão adicional.

<br>

# Questões objetivas

**1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.**

```javascript
console.log(x);
var x = 5;
console.log(y);
let y = 10;
```

a) A saída será undefined seguido de erro

b) A saída será 5 seguido de 10

c) A saída será undefined seguido de undefined

d) A saída será erro em ambas as linhas que utilizam console.log

| Questão | Resposta                                  | Justificativa                                                                                                                                                                                                                     |
| ------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1       | a) A saída será undefined seguido de erro | O código retorna `undefined`, pois a variável `x` é chamada antes de ser declarada. Posteriormente, o erro "Cannot access 'y' before initialization" indica que não é possível acessar a variável `y` antes de sua inicialização. |

---

<br>

**2) O seguinte código JavaScript tem um erro que impede sua execução correta. Analise e indique a opção que melhor corrige o problema. Justifique sua resposta.**

```javascript
function soma(a, b) {
  if (a || b === 0) {
    return "Erro: número inválido";
  }
  return a + b;
}
console.log(soma(2, 0));
```

a) Substituir if (a || b === 0) por if (a === 0 || b === 0)

b) Substituir if (a || b === 0) por if (a === 0 && b === 0)

c) Substituir if (a || b === 0) por if (a && b === 0)

d) Remover completamente a verificação if (a || b === 0)

| Questão | Resposta                                              | Justificativa                                                                                                                                                                                                                    |
| ------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2       | d) Remover completamente a verificação `if (a === 0)` | Ainda que um dos elementos da soma seja zero, isso não implicará em um resultado errado. Além disso, zero é considerado um número válido, eliminando a necessidade da verificação, que não interferirá diretamente no resultado. |

---

<br>

**3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**

```javascript
function calcularPreco(tipo) {
  let preco;

  switch (tipo) {
    case "eletrônico":
      preco = 1000;
    case "vestuário":
      preco = 200;
      break;
    case "alimento":
      preco = 50;
      break;
    default:
      preco = 0;
  }

  return preco;
}

console.log(calcularPreco("eletrônico"));
```

a) O código imprime 1000.

b) O código imprime 200.

c) O código imprime 50.

d) O código gera um erro.

| Questão | Resposta                 | Justificativa                                                                                                                                                                                                                                                                                        |
| ------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3       | b) O código imprime 200. | Isso ocorre porque, mesmo que o valor passado seja referente ao `case "eletrônico"`, a falta do elemento `break;` (que faz parar a execução do `switch`) faz com que a variável `preco` assuma o próximo valor da lista, parando apenas no `break;` de `"vestuário"`, com o valor sendo igual a 200. |

|

---

<br>

**4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**

```javascript
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros
  .map((x) => x * 2)
  .filter((x) => x > 5)
  .reduce((a, b) => a + b, 0);

console.log(resultado);
```

a) 0

b) 6

c) 18

d) 24

| Questão | Resposta | Justificativa                                                                                                                                                                                                                                                                                                                                                               |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4       | d) 24    | Isso ocorre porque o array `números` recebe uma série de tratamentos: primeiro, a lista é mapeada (`.map`), multiplicando todos os valores por 2. Após isso, os componentes são filtrados (`.filter`), resultando apenas nos valores acima de 5. Por fim, todos os itens passam pelo `.reduce`, executando uma soma (que se inicia valendo 0) entre os elementos restantes. |

---

<br>

**5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.**

```javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

a) ["banana", "maçã", "uva", "abacaxi", "manga", "laranja"]

b) ["banana", "abacaxi", "manga"]

c) ["banana", "abacaxi", "manga", "laranja"]

d) ["banana", "maçã", "uva", "abacaxi", "manga"]

| Questão | Resposta                                     | Justificativa                                                                                                                                                                                                                                                                                                                  |
| ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 5       | c) ["banana", "abacaxi", "manga", "laranja"] | Isso ocorre pois a lista sofre uma transformação através do método `.splice`, nele, os valores na posição 1 (`"maçã"`) e 2 (`"uva"`) do array são cortados/excluídos, ao mesmo que `"abacaxi"` e `"manga"` são inclusos... Por fim, o resultado dessa "operação" é somado ao último valor que não foi manipulado (`"laranja"`) |

---

<br>

**6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta**

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código.  
II. Em JavaScript, a herança é implementada através da palavra-chave `extends`.

a) As duas afirmações são verdadeiras, e a segunda justifica a primeira.

b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.

c) A primeira afirmação é verdadeira, e a segunda é falsa.

d) A primeira afirmação é falsa, e a segunda é verdadeira.

| Questão | Resposta                                                                       | Justificativa                                                                                                                                                                                                              |
| ------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6       | b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira. | Ambas as alternativas estão corretas, mas a segunda apenas demonstra a criação de uma classe que herda de outra (`extends`) e não funciona diretamente como uma justificativa para o comportamento de uma classe herdeira. |

---

<br>

**7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.**

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  apresentar() {
    super.apresentar();
    console.log(`Meu salário é R$ ${this.salario}.`);
  }
}
```

I) A classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente. V
II) O método `apresentar()` da classe Funcionario sobrepõe o método `apresentar()` da classe Pessoa, mas chama o método da classe pai usando `super`. V
III) O código não funciona corretamente, pois Funcionario não pode herdar de Pessoa como uma classe, já que o JavaScript não suporta herança de classes. F

Quais das seguintes afirmações são verdadeiras sobre o código acima?

a) I e II são verdadeiras.

b) I, II e III são verdadeiras.

c) Apenas II é verdadeira.

d) Apenas I é verdadeira.

| Questão | Resposta                   | Justificativa                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7       | a) I e II são verdadeiras. | As duas primeiras alternativas (I e II) são verdadeiras, pois de fato a classe `Funcionario` herda atributos da classe `Pessoa` diretamente, assim como o método `apresentar()`, que posteriormente é sobreposto pelo método `apresentar()` da classe `Funcionario`, uma vez que a instância foi criada a partir dela. Por fim, a última alternativa (III) está errada, pois o JavaScript suporta sim herança de classes. |

---

<br>

**8) Analise as afirmações a seguir. Indique a alternativa correta e justifique sua resposta.**

**Asserção:** O conceito de polimorfismo em Programação Orientada a Objetos permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras diferentes.  
**Razão:** Em JavaScript, o polimorfismo pode ser implementado utilizando o método de sobrecarga de métodos em uma classe.

a) A asserção é falsa e a razão é verdadeira.

b) A asserção é verdadeira e a razão é falsa.

c) A asserção é verdadeira e a razão é verdadeira, mas a razão não explica a asserção.

d) A asserção é verdadeira e a razão é verdadeira, e a razão explica a asserção.

| Questão | Resposta                                                                         | Justificativa                                                                                                                                                                                                                                                                                                                                                                                |
| ------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8       | d) A asserção é verdadeira e a razão é verdadeira, e a razão explica a asserção. | Ambas as afirmações estão corretas, pois o polimorfismo existe sim na arquitetura POO, permitindo diferentes respostas para um mesmo input através de diferentes objetos, o que é explicado pela razão, que menciona que, em JavaScript, isso se dá através da implementação do método de sobrecarga (muitos métodos iguais, que recebem diferentes inputs e atuam em diferentes situações). |

---

# Questões dissertativas

9. O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.

```javascript
function somaArray(numeros) {
  for (i = 0; i < numeros.size; i++) {
    soma = 2 * numeros[i];
  }
  return soma;
}
console.log(somaArray([1, 2, 3, 4]));
```

### Resolução

#### Código disponibilizado:

```javascript
function somaArray(numeros) {
  for (i = 0; i < numeros.size; i++) {
    soma = 2 * numeros[i];
  }
  return soma;
}
console.log(somaArray([1, 2, 3, 4]));
```

#### Erros:

- Lista é chamada diretamente na função, sem estar declarada em uma variável
- Variáveis com os tipos não definidos (declaradas de maneira incorreta)
- Utilização de `.size`, ao invés de `.length` (não chega a ser um erro, mas optei por substituir pelo método aprendido em sala)
- Falta do + na linha `soma = 2 * numeros[i];`

#### Código corrigido:

```javascript
const numeros = [1, 2, 3, 4]; // Mudança: Criar um array para os valores da lista

function somaArray(numeros) {
  let soma = 0; // Mudança: Definir o tipo das variáveis (let/const...) para soma e "i"
  for (let i = 0; i < numeros.length; i++) {
    // Mudança: Subtituir size para length
    soma += 2 * numeros[i]; // Mudança: Adicionar um + ao "=" para que o for some os valores a cada ciclo
  }
  return soma;
}
console.log(somaArray(numeros)); // Mudança: substituir o array diretamente na chamada da função pelo nome da váriável
```

---

10. Crie um exemplo prático no qual você tenha duas classes:

- Uma classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` que aplica um desconto fixo de 10% no preço do produto.
- Uma classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`, aplicando um desconto de 20% no preço dos livros.

Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe `Livro`.

### Resolução

#### Exemplo prático:

```javascript
// Classe Mãe/pai
class Produto {
  constructor(nome, preco) {
    // Atributos
    this.nome = nome;
    this.preco = preco;
  }
  // Método da classe que calcula o preço do produto com um desconto de 10%
  calcularDesconto() {
    let precoDesconto = (this.preco * (100 - 10)) / 100;
    return precoDesconto;
  }
}

// Classe herdada da classe Produto (classe filha)
class Livro extends Produto {
  // Retoma os atributos através da herança
  constructor(nome, preco) {
    super(nome, preco);
  }
  // Método da classe que calcula o preço do livro com um desconto de 20%
  calcularDesconto() {
    let precoDesconto = (this.preco * (100 - 20)) / 100;
    return precoDesconto;
  }
}

// Criação de um objeto da classe Livro
const livroInfantil = new Livro("Pequeno Príncipe", 100);
// Chamada do método calcularDesconto() da classe Livro
console.log(livroInfantil.calcularDesconto());
```

#### Explicação da modificação:

- Ao modificar o método calcularDesconto() na classe Livro, ele passou a sobrepor o método de mesmo nome na classe Produto (Nesse caso, o que acontece é que como criamos o objeto o instanciando através da classe livro, o método "calcularDesconto" presente na classe livros é mais relevante e sobrepõe o da classe mãe/pai).
- A escolha da mudança foi feita porque o método original da classe Produto não atendia totalmente às necessidades da classe Livro, o que poderia gerar um esforço adicional desnecessário (para reverter o método anterior). Dessa forma, como o objeto foi instanciado a partir da classe Livro, o método utilizado foi o definido nessa classe, tornando-o mais adequado para suas características específicas.
- Contudo, o que eu faria, seria criar um método com outro nome para livro, inibindo confusões de modo que o método da classe pai/mãe só seria utilizado quando necessário, sem causar confusão adicional.
