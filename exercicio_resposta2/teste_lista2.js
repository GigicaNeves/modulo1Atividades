/*
Teste Questão 1 

let p = 10;
let q = 3;
let r = 6;

let resultado = (p % q === 1 && r * 2 > p) || q + r < p;
console.log(resultado);

const valores = [3, 6, 9, 12, 15];
let produto = 1;

for (let j = 0; j < valores.length; j++) {
  produto *= valores[j];
}

console.log("O produto dos valores é:", produto);

Resposta: A) O código avalia a expressão booleana, imprime `true`, calcula o produto dos números na lista e imprime o resultado no console.]

Teste Questão 2



// Versão 1 da função de análise de crédito
function analisarCredito1() {
  var compras = [2500, 1200, 800, 100];
  var totalCompras = compras[0];
  var limite = 5000;
  var status = "aprovado";
  var saldoDisponivel = 0;
  var i = 1;

  do {
    totalCompras += compras[i];
    i++;
  } while (limite >= totalCompras && i < compras.length);

  saldoDisponivel = limite - totalCompras;

  if (saldoDisponivel < 0) {
    status = "negado";
  }
  console.log(
    `Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`
  );
}

// Versão 2 da função de análise de crédito
function analisarCredito2() {
  var compras = [2500, 1200, 800, 100];
  var totalCompras = compras[0];
  var limite = 5000;
  var status = "aprovado";
  var saldoDisponivel = 0;
  var i = 1;

  while (limite >= totalCompras && i < compras.length) {
    totalCompras += compras[i];
    i++;
  }

  saldoDisponivel = limite - totalCompras;

  if (saldoDisponivel < 0) {
    status = "negado";
  }
  console.log(
    `Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`
  );
}

analisarCredito1();
analisarCredito2();

/*
Resposta: A) Ambas as funções exibirão: 'Seu crédito foi aprovado. Saldo disponível: 400.'



Teste Questão 3:



const idade = 21;

if (idade >= 18 && idade < 60) {
  console.log("Você é um adulto!");
} else if (idade < 18) {
  console.log("Você é menor de idade!");
} else {
  console.log("Você está na melhor idade!");
}


Resposta: B) O código verifica se a idade pertence à faixa adulta. Se for, exibe "Você é um adulto!". Caso contrário, verifica se é menor de idade e exibe "Você é menor de idade!". Se nenhuma das condições anteriores for verdadeira, exibe "Você está na melhor idade!".
LER A LETRA D DNV


Teste Questão 4:

var energiaDisponivel = 1200;
var bateriaExtra = 400;
var consumoDispositivos = [300, 600, 500, 200, 400];

for (var i = 0; i < consumoDispositivos.length; i++) {
  var consumo = consumoDispositivos[i];

  if (consumo <= energiaDisponivel) {
    console.log(
      "Dispositivo " +
        (i + 1) +
        " ligado. Energia restante: " +
        (energiaDisponivel - consumo)
    );
    energiaDisponivel -= consumo;
  } else if (consumo <= energiaDisponivel + bateriaExtra) {
    console.log(
      "Dispositivo " +
        (i + 1) +
        " ligado com bateria extra. Energia restante: " +
        (energiaDisponivel + bateriaExtra - consumo)
    );
    energiaDisponivel = 0;
    bateriaExtra -= consumo - energiaDisponivel;
  } else {
    console.log(
      "Dispositivo " + (i + 1) + " não pode ser ligado. Energia insuficiente."
    );
  }
}

/*

Resposta: D)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado. Energia restante: 300

Dispositivo 3 ligado com bateria extra. Energia restante: 200

Dispositivo 4 não pode ser ligado. Energia insuficiente.

Dispositivo 5 não pode ser ligado. Energia insuficiente.


Teste Questão 5:

Resposta: B) O método update() é chamado continuamente a cada quadro (frame) do jogo, sendo usado para atualizar a lógica, movimentação e interações dos objetos na cena.


Teste Questão 6:

Resposta: A) Simular física avançada, incluindo corpos rígidos, colisões complexas e interação entre objetos com gravidade e forças.


Teste/Fazendo Questão 7: 

Uma loja online deseja implementar um sistema de classificação de pedidos com base no valor total da compra. O sistema deve determinar a categoria de um pedido com as seguintes regras:

```
Pedidos abaixo de R$50,00 → "Frete não disponível!"

Pedidos entre R$50,00 e R$199,99 (inclusive) → "Frete com custo adicional!"

Pedidos de R$200,00 ou mais → "Frete grátis!"
```
Implemente um pseudocódigo que receba o valor total da compra e exiba a classificação correta do frete para o cliente.

// Exemplos de valores para testar o sistema:
let valPedido1 = 49;
let valPedido2 = 199.99;
let valPedido3 = 200;

// Cria uma função para melhor organização do sistema descrito

function classificacaoPedidos(valPedido) { // Recebe o valor do pedido como parâmetro

  // Verifica se o valor é maior ou igual a 50 e menor que 200
  if (valPedido >= 50 && valPedido < 200) {

    // Caso atenda a condição, imprime "Frete com custo adicional"
    console.log("Frete com custo adicional"); 

  } else if (valPedido < 50) { // Caso não atenda a primeira condição, faz outra verificação

    // Caso atenda a segunda condição, imprime "Frete não disponível!"
    console.log("Frete não disponível!");

  } else { // Define o comportamento para todo os outros casos, imprimindo "Frete grátis!"

    console.log("Frete grátis!");

  }
}

// Chama a função passando os argumentos de exemplo
classificacaoPedidos(valPedido1);
classificacaoPedidos(valPedido2);
classificacaoPedidos(valPedido3);


Teste/Fazendo Questão 8: A FAZER

Considere a implementação da classe base Veiculo em um sistema de modelagem de veículos. Sua tarefa é implementar, utilizando pseudocódigo, as classes derivadas Carro e Moto, que herdam da classe Veiculo, adicionando atributos específicos e métodos para calcular o consumo de combustível de um carro e de uma moto, respectivamente.

```
Classe Veiculo:
Atributos:

modelo
ano
Método Construtor(modelo, ano):

Define os valores dos atributos modelo e ano com os valores passados como parâmetro.
Método CalcularConsumo():
```
Implementação genérica para cálculo de consumo, a ser sobrescrita pelas subclasses.
Agora, implemente as classes Carro e Moto, garantindo que ambas herdem de Veiculo e possuam métodos específicos para calcular o consumo de combustível com base na quilometragem e eficiência do veículo.


class Veiculo {
  constructor(modelo, ano, tipo, quilometragem, eficiência) {
    this.modelo = modelo;
    this.ano = ano;
    this.tipo = tipo;
    this.quilometragem = quilometragem;
    this.eficiência = eficiência; // Ex: HB20 1.0 faz 13,7 km/l na cidade e 15,5 km/l na estrada (km/l)
  }

  calcularConsumo() {
    let consumoGasolina = (this.quilometragem / this.eficiência).toFixed(1);
    console.log(
      `O modelo ${this.modelo} ${this.tipo}, do ano de ${this.ano} irá consumir em média ${consumoGasolina}l de gasolina, com uma eficiência de ${this.eficiência}km/l`
    );
  }
}

class Carro extends Veiculo {
  constructor(modelo, ano, tipo, quilometragem, eficiência, capacPortaMalas) {
    super(modelo, ano, tipo, quilometragem, eficiência);
    this.capacPortaMalas = capacPortaMalas;
  }

  calcularConsumo() {
    super.calcularConsumo();
    console.log("Outras informações do carro são:");
    console.log(`Capacidade do Porta-Malas: ${this.capacPortaMalas}l`);
  }
}

class Moto extends Veiculo {
  constructor(modelo, ano, tipo, quilometragem, eficiência, necessCapacete) {
    super(modelo, ano, tipo, quilometragem, eficiência);
    this.necessCapacete = necessCapacete;
  }

  calcularConsumo() {
    super.calcularConsumo();
    console.log("Outras informações da moto são:");
    console.log(`Necessita de capacete: ${this.necessCapacete}`);
  }
}

let carrinho = new Carro("HB20", 2020, "Hatch", 120, 13.7, 250);
carrinho.calcularConsumo();

let motinha = new Moto("Yamaha FZ15", 2022, "Street", 120, 37, true);
motinha.calcularConsumo();


Teste/Fazendo Questão 9: 

Você é um cientista da NASA e está ajudando no desenvolvimento de um sistema de pouso para sondas espaciais em Marte. Seu objetivo é calcular o tempo necessário para que a sonda reduza sua velocidade até um nível seguro para pouso, considerando uma velocidade inicial de entrada na atmosfera marciana e uma taxa de desaceleração constante causada pelo atrito atmosférico e retrofoguetes.

Entretanto, a sonda não pode ultrapassar um tempo máximo de descida para evitar desvios orbitais, nem pode desacelerar além de um limite mínimo, pois isso poderia causar instabilidade no pouso.

Implemente a lógica dessa simulação em pseudocódigo, considerando a seguinte equação para atualização da velocidade:

Considere a fórumla de atualização velocidade:
```
    velocidade = velocidadeInicial - desaceleracao * tempo
```
Seu programa deve determinar quanto tempo será necessário para que a sonda atinja uma velocidade segura de pouso, sem ultrapassar os limites estabelecidos.


Teste/Fazendo Questão 10: 

Em um sistema de análise financeira, as operações de investimento de uma empresa podem ser representadas por matrizes, onde cada linha representa um tipo de investimento e cada coluna representa um período de tempo.

A seguir, é fornecida a implementação da função SomarMatrizesInvestimento(matrizA, matrizB), que soma os valores de duas matrizes de investimento. Sua tarefa é implementar uma função semelhante, porém que realize a multiplicação das matrizes de investimento, determinando como os investimentos afetam os resultados ao longo do tempo.

```
Função SomarMatrizesInvestimento(matrizA, matrizB):  
    # Verifica se as matrizes têm o mesmo número de linhas e colunas  
    Se tamanho(matrizA) ≠ tamanho(matrizB) então:  
        Retornar "As matrizes não podem ser somadas. Elas têm dimensões diferentes."  
    Senão:  
        linhas <- tamanho(matrizA)  
        colunas <- tamanho(matrizA[0])  
        matrizResultado <- novaMatriz(linhas, colunas)  

        # Loop para percorrer cada elemento das matrizes e calcular a soma  
        Para i de 0 até linhas-1 faça:  
            Para j de 0 até colunas-1 faça:  
                matrizResultado[i][j] <- matrizA[i][j] + matrizB[i][j]  

        Retornar matrizResultado  

# Exemplo de uso da função  
investimentosAno1 <- [[1000, 2000], [1500, 2500]]  
investimentosAno2 <- [[1200, 1800], [1300, 2700]]  

totalInvestimentos <- SomarMatrizesInvestimento(investimentosAno1, investimentosAno2)  
Escrever("Total de investimentos acumulados:")  
ImprimirMatriz(totalInvestimentos)  
```
Agora, implemente a função MultiplicarMatrizesInvestimento(matrizA, matrizB), que multiplica as duas matrizes, simulando o efeito de diferentes fatores de crescimento e impacto financeiro nos investimentos ao longo do tempo.

*/
