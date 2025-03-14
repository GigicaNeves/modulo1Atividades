/* 

TESTE: QUESTÃO 1

console.log(x);
var x = 5;
console.log(y);
let y = 10;

ANOTAÇÕES: 
Variáveis não declaradas anteriormente: retorna undefined

Resposta: 
a) A saída será undefined seguido de erro

Maneira correta:
var x = 5;
let y = 10;
console.log(x);
console.log(y);

TESTE: QUESTÃO 2

function soma(a, b) {
  return a + b;
}
console.log(soma(2, 0));

Resposta:
d) Remover completamente a verificação if (a || b === 0)

TESTE: QUESTÃO 3

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

Resposta: 
b) O código imprime 200.

TESTE: QUESTÃO 4

let numeros = [1, 2, 3, 4, 5];

let resultado = numeros
  .map((x) => x * 2)
  .filter((x) => x > 5)
  .reduce((a, b) => a + b, 0);

console.log(resultado);

Resposta: 
d) 24

TESTE: QUESTÃO 5

let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);

Resposta: 
c) ["banana", "abacaxi", "manga", "laranja"]

QUESTÃO 6  

Resposta: 
b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.

QUESTÃO 7

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

var pessoua = new Funcionario("Mariana", 18, "R$1200");

pessoua.apresentar();

Resposta: 
a) I e II são verdadeiras.

QUESTÃO 8 - A definir 

TESTE: QUESTÃO 9
O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.

const numeros = [1, 2, 3, 4];

function somaArray(numeros) {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += 2 * numeros[i];
  }
  return soma;
}

console.log(somaArray(numeros));

ANOTAÇÕES

Mudanças: Criar um array para os valores da lista
Definir o tipo das variáveis (let/const...) para soma e "i"
Subtituir size para length
Adicionar um + ao "=" para que o for some os valores a cada ciclo
Substituir o array diretamente na chamada da função pela nome da váriável visando um código mais organizado

QUESTÃO 10. 
Crie um exemplo prático no qual você tenha duas classes:

- Uma classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` que aplica um desconto fixo de 10% no preço do produto.
- Uma classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`, aplicando um desconto de 20% no preço dos livros.

Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe `Livro`.

class Produto {
  constructor(nome, preco) {
    // Atributos
    this.nome = nome;
    this.preco = preco;
  }

  calcularDesconto() {
    let precoDesconto = (this.preco * (100 - 10)) / 100;
    return precoDesconto;
  }
}

class Livro extends Produto {
  constructor(nome, preco) {
    super(nome, preco);
  }

  calcularDesconto() {
    let precoDesconto = (this.preco * (100 - 20)) / 100;
    return precoDesconto;
  }
}

const livroInfantil = new Livro("Pequeno Príncipe", 100);
console.log(livroInfantil.calcularDesconto());

ANOTAÇÕES

Nesse caso, o que acontece é que como criamos o objeto o instanciando através da classe livro, o método "calcularDesconto" presente na classe livros é mais relevante e sobrepõe o da classe mãe, ignorando-o
O que eu faria seria criar um método com outro nome para livro, inibindo confusões de modo que o método da classe pai só seria utilizado quando necessário, sem causar confusão 
*/
