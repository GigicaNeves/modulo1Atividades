GABARITO QUESTÕES DE COMPUTAÇÃO

### 1: A) O código avalia a expressão booleana, imprime `true`, calcula o produto dos números na lista e imprime o resultado no console.

#### Justificativa:

O código de fato avalia a expressão booleana através de "p % q === 1 && r \* 2 > p) || q + r < p". A primeira sessão verifica se o resto da divisão de `p` por `q` é idêntico a 1 e se `r` multiplicado por `2` é maior que `p`. Em seguida, ele verifica se o valor de `q` + `r` é menor que o valor de `p`. É válido dizer que ele retorna true se a primeira ou (`||`) a segunda condição for verdadeira e a primeira sessão retorna como verdadeira (`true`) apenas se suas duas condições unidas por `&&` forem verdadeiras. Ademais, o código faz uma iteração sobre o array `valores[]` multiplicando e somando os valores com o anterior. Após cada operação, seu resultado é exibido através do console.log()

### 2: A) Ambas as funções exibirão: 'Seu crédito foi aprovado. Saldo disponível: 400.'

#### Justificativa:

Ambas as funções fazem a mesma análise de crédito. A primeira função `analisarCredito1` cria um array com 4 valores, além de estabelecer variáveis para armazenar o total das compras, limite, status, saldo disponível, e a variável `i`, que é utilizada como contador. Seguindo o código, é possível observar a presença da estrutura de repetição `do while`, que executará a soma do total das compras com os valores do array de compras e só irá parar quando o limite tiver valor menor/igual ao valor total das compras ou o valor de i for maior/igual o numero de elementos do array. Por fim, é feito um cálculo do saldo disponível (`saldoDisponivel = limite - totalCompras;`), caso ele seja menor que 0, seu status é passado como negado, até que então seu crédito é exibido no console, junto ao saldo disponível. Já a segunda versão da função, a `analisarCrédito2()`, é quase idêntica a primeira, mas utiliza apenas o `While`. Na prática, a diferença é que `do while` será um laço executado ao menos uma vez, pois sua verificação é no final do trecho, enquanto o while faz a verificação logo no inicio e não prossegue caso ela seja falsa.

### 3: B) O código verifica se a idade pertence à faixa adulta. Se for, exibe "Você é um adulto!". Caso contrário, verifica se é menor de idade e exibe "Você é menor de idade!". Se nenhuma das condições anteriores for verdadeira, exibe "Você está na melhor idade!".

#### Justificativa:

O código em questão é um exemplo muito utilizado para o estudo de estruturas condicionais... Nele, temos uma variável definida com o valor 21. Com isso, é feita a primeira verificação: se a idade é maior ou igual a 18 E a idade é menor que 60, o primeiro laço é execultado (`  console.log("Você é um adulto!");`), caso não, ele passa para a segunda verificação (`Else if`) e se ela for verdadeira (idade menor que 18), o segundo laço é executado (`  console.log("Você é menor de idade!");`). Caso nenhuma das anteriores tenham sido verdadeiras, ele se enquadra no ultimo laço (`else`) e exibe "` console.log("Você está na melhor idade!");`". É importante mencionar, que o seguinte código faz uma verificação e só passa para outra estrutura se a primeira for falsa, pois caso ela seja verdadeira, os outros laços nem são verificados.

#### 4: D)

Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado. Energia restante: 300

Dispositivo 3 ligado com bateria extra. Energia restante: 200

Dispositivo 4 não pode ser ligado. Energia insuficiente.

Dispositivo 5 não pode ser ligado. Energia insuficiente.

#### Justificativa:

O código disponibilizado utiliza a estrutura de repetição `for` para iterar sobre o array `consumoDispositivos[]` e verificar a energia disponível. Seguindo o fluxo, o `for` passa por todos os elementos do array e para cada um ele armazena o consumo em uma variável e verifica (através da estrutura condicional `if`) se esse consumo é menor/igual a energia disponível ele exibe uma mensagem informando que ele está ligado e faz um cálculo da energia restante. Caso ele não se adeque a esta condição, passa para a próxima e verifica se seu consumo é menor/igual que a energia disponível somada a bateria Extra, se o retorno for verdadeiro, será exibida uma mensagem de que ele está ligado com bateria extra e haverá um calculo da energia restante. Por fim, se ele não tiver se enquadrado nos laços anteriores, o último `else` é executado, informando que a energia é insuficiente. Utilizando o primeiro valor como exemplo, ele passa pelo `for` e seu consumo que é igual a 300 é menor que a energia disponível, então ele exibe a energia restante. Contudo, vale dizer que a energia disponível vai sendo subtraída a cada iteração e não tem o mesmo valor inicial para cada valor do array

### 5: B) O método update() é chamado continuamente a cada quadro (frame) do jogo, sendo usado para atualizar a lógica, movimentação e interações dos objetos na cena.

#### Justificativa:

As outras estão incorretas pois:

A) O método update() é responsável por carregar os assets do jogo antes da cena ser exibida.

- o método responsável por carregar os assets é o preload()

C) O método update() renderiza todos os sprites na tela e garante que a física do jogo seja processada corretamente.

- O método update() pode executar algumas dessas tarefas em paralelo, mas não é sua principal função

D) O método update() é chamado apenas uma vez após a criação da cena, sendo utilizado para configurar variáveis iniciais do jogo.

- O método responsável por configurar as variáveis iniciais do jogo é o init()

### 6: A) Simular física avançada, incluindo corpos rígidos, colisões complexas e interação entre objetos com gravidade e forças.

#### Justificativa:

As outras estão incorretas pois:

B) Gerenciar eventos de entrada do usuário, como cliques e toques na tela, permitindo movimentação de personagens.

- O Matter.js implica na física do jogo, mas não tem como foco principal gerenciar os eventos citados acima

C) Renderizar gráficos otimizados para jogos 2D e garantir uma taxa de quadros estável.

- O Matter.js implica na física do jogo, não na parte gráfica

D) Criar animações automáticas para sprites e objetos interativos sem necessidade de programação de movimentação.

- O Matter.js implica na física, mas não é capaz de criar animações automáticas

### 7:

```
INÍCIO

DECLARE valorTotal: REAL

ESCREVA("Digite o valor total da compra:")

LEIA(valorTotal)

SE valorTotal < 50 ENTÃO

      ESCREVA(“Frete não disponível!”)

SENÃO SE valorTotal >= 50 E valorTotal <= 199.99

      ESCREVA(“Frete com custo adicional!”)

SENÃO
ESCREVA (“Frete grátis!”)

FIM SE

FIMALGORITMO`
```

### 8:

```
INICIO

CLASSE Veiculo

ATRIBUTOS:
modelo
ano
quilometragem
eficiencia

METODOS:

INICIAR(modelo, ano, quilometragem, eficiencia):
ESTE.modelo <- modelo
ESTE.ano <- ano
ESTE.quilometragem <- quilometragem
ESTE.eficiencia <- eficiencia

CALCULARCONSUMO():
// Método para o cálculo do consumo de combustível
RETORNAR ESTE.quilometragem / ESTE.eficiencia

CLASSE Carro HERDA Veiculo

ATRIBUTOS:
manual

METODOS:

INICIAR(modelo, ano, quilometragem, eficiencia, manual):
SUPER.INICIAR(modelo, ano, quilometragem, eficiencia)
ESTE.manual <- manual

CALCULARCONSUMO():
SUPER.CALCULARCONSUMO()
RETORNAR ESTE.quilometragem / ESTE.eficiencia

CLASSE Moto HERDA Veiculo

ATRIBUTOS:
precisaCapacete

METODOS:

INICIAR(modelo, ano, quilometragem, eficiencia, precisaCapacete):
SUPER.INICIAR(modelo, ano, quilometragem, eficiencia)
ESTE.precisaCapacete <- precisaCapacete

CALCULARCONSUMO():
SUPER.CALCULARCONSUMO()
RETORNAR ESTE.quilometragem / (ESTE.eficiencia \* 1.2)

FIMALGORITMO
```

9:

```
INICIO

velocidadeinicial = 100 // velocidade inicial
desaceleracao = 10 // taxa de desaceleração
tempo = 0 // tempo inicial de descida
tempomaximo = 50 // tempo máximo permitido para a descida
desaceleracaomina = 1 // valor mínimo de desaceleração
velocidadesegura = 50 // velocidade segura para o pouso

// Condição de desaceleração mínima
SE desaceleracao < desaceleracaomina:
desaceleracao = desaceleracaomina

// Cálculo do tempo necessário para reduzir a velocidade até o limite seguro
velocidade = velocidadeinicial - desaceleracao \* tempo

ENQUANTO velocidade > velocidadesegura E tempo < tempomaximo:
tempo++
velocidade = velocidadeinicial - desaceleracao \* tempo

    // Verificação de se a desaceleração não ultrapassou o limite
    SE tempo >= tempomaximo:
        ESCREVE("Tempo máximo excedido. Não foi possível atingir a velocidade segura.")
        PARE

// Caso a sonda atinja a velocidade segura dentro do tempo máximo
SE velocidade <= velocidadesegura:
ESCREVE("Tempo necessário é: ", tempo)

FIMALGORITMO
```

10:

```
FUNCAO MultiplicarMatrizesInvestimento(matrizA, matrizB):
// Verificar se é possível fazer a multiplicação
SE tamanho(matrizA[0]) ≠ tamanho(matrizB) ENTAO:
RETORNAR "As matrizes não podem ser multiplicadas. Dimensões incompatíveis."

    linhasA <- tamanho(matrizA)           // N de linhas de A
    colunasA <- tamanho(matrizA[0])       // N de colunas de A (também número de linhas de B)
    colunasB <- tamanho(matrizB[0])       // N de colunas de B

    // Criação da matriz resultado
    matrizResultado <- novaMatriz(linhasA, colunasB)

    // Multiplicação de matrizes
    PARA i de 0 até linhasA-1 FACA:            // Percorrendo linhas de A
        PARA j de 0 até colunasB-1 FACA:       // Percorrendo colunas de B
            matrizResultado[i][j] <- 0         // Inicializa a posição
            PARA k de 0 até colunasA-1 FACA:   // Percorre os elementos da linha de A e coluna de B
                matrizResultado[i][j] <- matrizResultado[i][j] + (matrizA[i][k] * matrizB[k][j])

    RETORNAR matrizResultado
```

    - Dúvidas: O funcionamento da multiplicação dos elementos da matriz nessa ideia ainda me deixa um pouco confusa, gostaria de saber se há dicas para fixar um pouco melhor esse conceito.

    - Uma dúvida adicional seria o porquê da escolha de pseudocódigo ao invés de javaScript
