Um zoológico está desenvolvendo um sistema básico para registrar animais. Todos os
animais têm um nome, uma espécie e uma idade. Além disso, há animais classificados
como animais selvagens, que possuem um habitat natural como característica adicional.
Para tornar o sistema mais organizado e reutilizável, a equipe utilizou conceitos de
Programação Orientada a Objetos (POO), como herança e reutilização de métodos.

Veja a implementação inicial abaixo:

```
// Classe base
class Animal {
constructor(nome, especie, idade) {
this.nome = nome;
this.especie = especie;
this.idade = idade;
}
exibirInformacoes() {
return`Nome: ${this.nome}, Espécie: ${this.especie}, Idade: ${this.idade}`;
}
}

// Classe derivada
class AnimalSelvagem extends Animal {
constructor(nome, especie, idade, habitat) {
super(nome, especie, idade);
this.habitat = habitat;
}

exibirHabitat() {
return `Habitat natural: ${this.habitat}`;
}
}

// Instâncias e retornos
const animal1 = new Animal("Tico", "Macaco", 4);
const animal2 = new AnimalSelvagem("Nala", "Leoa", 5, "Savana Africana");
console.log(animal1.exibirInformacoes());
console.log(animal2.exibirInformacoes());
console.log(animal2.exibirHabitat());
```

Perguntas Dissertativas

1. Estrutura de Classes e Objetos

a) Quais atributos são definidos na classe Animal?
R: nome, especie, idade

b) Como a classe AnimalSelvagem amplia a estrutura de Animal?
R: Utilizando a expressão extends, ela herda de Animal, adicionando um novo atributo "habitat" (aos anteriormente existentes) e cria um novo método "exibirHabitat()", além de já receber o anteriormente criado na classe pai "exibirInformaçoes()"

2. Herança

c) O que significa a linha class AnimalSelvagem extends Animal?
R: Significa que uma nova classe está sendo criada "AnimalSelvagem" e ela é uma classe filha de "Animal", ou seja, ela sofre herança e pode acessar atributos e métodos de sua classe pai

d) O que acontece internamente quando usamos o comando super(...) dentro do
construtor da subclasse?
R: Ele retoma e atribui os atributos da classe mãe para a subclasse, podendo ser usados nela

3. Instanciação

e) O que ocorre passo a passo quando o comando new AnimalSelvagem("Nala",
"Leoa", 5, "Savana Africana") é executado?
R: É instanciado um novo objeto que vem da classe AnimalSelvagem, logo após isso, são passados os atributos específicos daquele objeto, ou seja:
Nome: Nala
Espécie: Leoa
Idade: 5
Habitat: Savana Africana

f) Qual a diferença entre a criação dos objetos animal1 e animal2?
R: O Animal1 é criado com a instanciação na classe Animal, que tem apenas os atributos nome, espécie e idade, enquanto o animal dois é instanciado na classe AnimalSevagem, herdando os atributos e métodos da classe Animal e com alguns adicionais, como habitat e o método exibirHabitat

4. Acesso a Métodos

g) Por que o método exibirInformacoes() pode ser utilizado tanto em animal1 quanto
em animal2?
R: Pois a classe AnimalSelvagem é uma herança da classe Animal, logo, ela herda os atributos e métodos como o exibirInformacoes()

h) O método exibirHabitat() está disponível em animal1? Justifique sua resposta.
R: Não, pois ele é criado apenas na subclasse AnimalSelvagem. A subclasse ou classe filha, herda os métodos e atributos da classe mãe, mas o contrário não acontece

5. Reutilização de Código

i) Como a herança contribui para evitar duplicação de código nesse exemplo?
R: Nesse exemplo, a herança evita que o trecho

"this.nome = nome;
this.especie = especie;
this.idade = idade;"

com a declaração dos atributos e o próprio método "exibirInformacoes()" seja duplicado, transformando apenas em
"super(nome, especie, idade);" para os atributos e nem necessitando uma nova escrita do método, tornando o código muito mais simples, limpo, organizado e eficaz

j) Se fosse necessário adicionar um novo comportamento a todos os animais, como
"dormir()", em qual classe ele deveria ser implementado? Por quê?
R: Caso fosse necessário adicionar um novo método para todos os animais, o mais correto seria adicionar na classe Animal, pois consequentemente a classe AnimalSelvagem o pegaria e todas as outras possivelmente criadas depois

6. Retorno e Impressão

k) Qual é a saída exata exibida no console ao executar o código apresentado?
R:

Nome: Tico, Espécie: Macaco, Idade: 4
Nome: Nala, Espécie: Leoa, Idade: 5
Habitat natural: Savana Africana;

l) O que aconteceria se fosse removida a linha super(nome, especie, idade) do
construtor da classe AnimalSelvagem?
R: Ele teria um conflito para instanciar/declarar os atributos da classe mãe e não rodaria o código, pois não é possível rodar uma extends sem o super. Daria erro

7. Prática de Extensão

m) Crie uma nova subclasse chamada AnimalDomestico, que herda de Animal e inclui
um novo atributo chamado nomeDono.

```
class AnimalDomestico extends Animal {
constructor (nome, especie, idade, nomeDono){
super(nome, espécie, idade);
this.nomeDono = nomeDono;
}
}
```

n) Implemente um método chamado exibirDono() que retorne: "Dono de [nome do
animal]: [nome do dono]".

```
class AnimalDomestico extends Animal {
constructor (nome, especie, idade, nomeDono){
super(nome, espécie, idade);
this.nomeDono = nomeDono;
}

    exibirDono () {
    return Dono de [this.nome]: [this.nomeDono]"
    }

}
```
