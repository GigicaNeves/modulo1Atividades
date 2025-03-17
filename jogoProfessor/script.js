// Classe/cena de Menu
class MenuScene extends Phaser.Scene {
  // Inicializa a cena
  constructor() {
    super("MenuScene");
  }

  // Carrega as imagens do jogo
  preload() {
    this.load.image("startButton", "assets/start.png");
    this.load.image("backgroundMenu", "assets/background_menu.png");
  }

  // Cria os elementos no jogo
  create() {
    this.add.image(400, 300, "backgroundMenu");
    this.add.text(250, 100, "Jogo do Labirinto", {
      // adiciona e configura texto
      fontSize: "48px",
      fill: "#fff",
    });
    let startButton = this.add.image(400, 400, "startButton").setInteractive(); // Cria um botão e define interação
    startButton.on("pointerdown", () => {
      this.scene.start("GameScene"); // Passa para a cena "GameScene"
    });
  }
}

// Classe/cena inicial do game
class GameScene extends Phaser.Scene {
  // Inicializa a cena
  constructor() {
    super("GameScene");
  }
  // Inicializa as variáveis necessárias
  init() {
    this.score = 0;
    this.hasKey = false;
  }
  // Carrega as imagens/tiles do jogo
  preload() {
    this.load.image("player", "assets/player.png");
    this.load.image("key", "assets/key.png");
    this.load.image("enemy", "assets/enemy.png");
    this.load.image("door", "assets/door.png");
    this.load.image("backgroundGame", "assets/background_game.png");
    this.load.tilemapTiledJSON("map", "assets/map.json");
    this.load.image("tiles", "assets/tileset.png");
  }

  // Cria os elementos no jogo
  create() {
    this.add.image(400, 300, "backgroundGame");
    const map = this.make.tilemap({ key: "map" }); // Cria um tilemap no jogo
    const tileset = map.addTilesetImage("tileset", "tiles"); // Adiciona uma imagem tileset
    map.createLayer("Ground", tileset, 0, 0); // Cria uma layer/camada com base no json e na imagem tileset

    // Cria e configura o player
    this.player = this.physics.add.sprite(100, 100, "player");
    this.player.setCollideWorldBounds(true);
    this.player.setBounce(0.2);

    this.spawnKey(); // Chama a função para criação de uma chave
    this.door = this.physics.add.sprite(500, 200, "door");
    this.door.setAlpha(0.5); // Define a opacidade da imagem
    // Adiciona uma colisão entre o player e a porta
    this.physics.add.overlap(
      this.player,
      this.door,
      this.enterDoor, // Chama a função enterDoor() em caso da colisão
      null,
      this
    );

    // Cria e configura o inimigo
    this.enemy = this.physics.add.sprite(400, 200, "enemy");
    this.enemy.setVelocity(100, 100);
    this.enemy.setBounce(1, 1);
    this.enemy.setCollideWorldBounds(true);

    // Cria o placar
    this.scoreText = this.add.text(16, 16, "Placar: 0", {
      fontSize: "32px",
      fill: "#fff",
    });

    // Cria colisão entre o player e a chave
    this.physics.add.overlap(
      this.player,
      this.keyItem,
      this.collectKey, // Chama a função collectKey() em caso de colisão
      null,
      this
    );
    // Cria colisão entre o player e o inimigo
    this.physics.add.overlap(this.player, this.enemy, () => {
      this.endGame(); // Chama a função endGame()
      this.scene.start("GameOverScene"); // Inicia a cena de game ocver
    });

    this.cursors = this.input.keyboard.createCursorKeys(); // Acessa o input do teclado
  }

  // Atualiza o jogo constantemente
  update() {
    this.player.setVelocity(0); // Altera a velocidade do player

    // Estruturas condicionais para verificar e aplicar movimentação
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
    }

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-160);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(160);
    }
  }

  // Função para criar as chaves
  spawnKey() {
    if (this.keyItem) {
      this.keyItem.destroy(); // Remove  completamente o objeto da cena
    }
    // Gera valores aleatórios para x e y
    let x = Phaser.Math.Between(50, 750);
    let y = Phaser.Math.Between(50, 550);
    this.keyItem = this.physics.add.sprite(x, y, "key"); // Cria a chave na posição aleatória

    this.hasKey = false; // Define a variável hasKey como "false"
  }

  // Função para gerenciar a coleta de chaves
  collectKey(player, key) {
    this.score += 10; // Soma pontuação
    this.scoreText.setText("Placar: " + this.score); // Atualiza o placar
    key.destroy(); // Retira completamente a chave da cena
    this.hasKey = true; // Define a variável como true
    this.door.setAlpha(1); // Muda a opacidade para 1 (total)
  }

  // Função para entrar na porta
  enterDoor(player, door) {
    if (this.hasKey) {
      // Verifica se a variável hasKey está como true
      this.endGame(); // Chama a função endGame()
      this.scene.start("GameScene2"); // Inicia a cena da fase 2
    }
  }

  // Função para finalização do jogo
  endGame() {
    // Voltando variáveis ao valor inicial
    this.score = 0;
    this.hasKey = false;
    this.scoreText.setText("Placar: " + this.score);
  }
}

// Classe/cena da fase 2
class GameScene2 extends Phaser.Scene {
  // Inicializa a cena
  constructor() {
    super("GameScene2");
  }
  // Inicializa as variáveis necessárias
  init() {
    this.score2 = 0;
    this.hasKey2 = false;
    this.vida = 50;
  }

  // Carrega as imagens do jogo
  preload() {
    this.load.image("player", "assets/player.png");
    this.load.image("key2", "assets/key.png");
    this.load.image("enemy", "assets/enemy.png");
    this.load.image("door", "assets/door.png");
    this.load.image("backgroundGame2", "assets/background_game2.png");
    this.load.tilemapTiledJSON("map2", "assets/map2.json");
    this.load.image("tiles", "assets/tileset.png");
  }

  // Cria os elementos no jogo
  create() {
    // Cria o background e tilemap (explicado na cena GameScene)
    this.add.image(400, 300, "backgroundGame2");
    const map2 = this.make.tilemap({ key: "map2" });
    const tileset = map2.addTilesetImage("tileset", "tiles");
    map2.createLayer("Ground", tileset, 0, 0);

    // Cria e configura o player
    this.player = this.physics.add.sprite(100, 100, "player");
    this.player.setCollideWorldBounds(true);
    this.player.setBounce(0.2);

    // Cria e configura o obstáculo de porta falsa
    this.falseDoor = this.physics.add.sprite(500, 300, "door");
    this.falseDoor.body.setSize(45, 65, true).setOffset(10, 5);
    this.falseDoor.setImmovable(true);

    // Cria colisão entre o player e a porta falsa
    this.physics.add.collider(this.player, this.falseDoor);

    this.spawnKey(); // Chama a função para criação de uma chave
    this.door2 = this.physics.add.sprite(500, 200, "door");
    this.door2.setAlpha(0.5); // Define a opacidade da imagem
    // Adiciona uma colisão entre o player e a porta
    this.physics.add.overlap(
      this.player,
      this.door2,
      this.enterDoor, // Chama a função enterDoor() em caso da colisão
      null,
      this
    );

    // Cria e configura o inimigo
    this.enemy = this.physics.add.sprite(400, 200, "enemy");
    this.enemy.setVelocity(300, 300);
    this.enemy.setBounce(1, 1);
    this.enemy.setCollideWorldBounds(true);

    // Cria o placar de vida
    this.lifeText = this.add.text(100, 100, "Vida:" + this.vida, {
      fontSize: "32px",
      fill: "#fff",
    });

    // Cria o placar de chaves recuperadas
    this.scoreText = this.add.text(
      100,
      150,
      "Chaves recuperadas:" + this.score2 + "/15",
      {
        fontSize: "32px",
        fill: "#fff",
      }
    );

    // Cria colisão entre o player e a chave
    this.physics.add.overlap(
      this.player,
      this.keyItem,
      this.collectKey, // Chama a função collectKey() em caso de colisão
      null,
      this
    );

    // Cria colisão entre o player e o inimigo
    this.physics.add.overlap(
      this.player,
      this.enemy,
      this.colision, // Chama a função colision()
      null,
      this
    );

    this.cursors = this.input.keyboard.createCursorKeys(); // Acessa o input do teclado
  }

  // Atualiza o jogo constantemente
  update() {
    // Altera a velocidade do player
    this.player.setVelocity(0);

    // Estruturas condicionais para verificar e aplicar movimentação
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-320);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(320);
    }

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-320);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(320);
    }
  }

  // Função para criar as chaves
  spawnKey() {
    if (this.keyItem) {
      this.keyItem.destroy();
    }
    let x = Phaser.Math.Between(50, 750);
    let y = Phaser.Math.Between(50, 550);
    this.keyItem = this.physics.add.sprite(x, y, "key2");
    this.physics.add.overlap(
      this.player,
      this.keyItem,
      this.collectKey,
      null,
      this
    );
    this.hasKey = false;
  }

  // Função para gerenciar a coleta de chaves
  collectKey(player, key2) {
    this.score2 += 1;
    this.scoreText.setText("Chaves recuperadas: " + this.score2 + "/15");
    key2.destroy();
    if (this.score2 == 15) {
      this.hasKey2 = true;
      this.door2.setAlpha(1);
    } else {
      this.spawnKey();
    }
  }

  // Função para entrar na porta
  enterDoor(player, door2) {
    if (this.hasKey2) {
      this.endGame(); // Inicia o fim do jogo
      this.scene.start("WinScene"); // Inicia a cena final
    }
  }

  // Função para gerir a colisão do player com o inimigo
  colision(player, enemy) {
    this.vida -= 1; // Reduz a vida do player enquanto estiver encostando no inimigo
    this.lifeText.setText("Vida: " + this.vida);
    if (this.vida == 0) {
      // Verifica se a vida é igual a 0
      this.endGame(); // Inicia o fim do jogo
      this.scene.start("GameOverScene"); // Inicia a cena final
    }
  }

  // Função de finalização do jogo
  endGame() {
    // Reiniciando variáveis e placares
    this.vida = 50;
    this.score2 = 0;
    this.hasKey2 = false;
    this.lifeText.setText("Vida: " + this.vida);
    this.scoreText.setText("Chaves recuperadas: " + this.score2 + "/15");
  }
}

// Classe/cena de finalização do jogo (perder)
class GameOverScene extends Phaser.Scene {
  // Inicializa a cena
  constructor() {
    super("GameOverScene");
  }

  // Carrega as imagens do jogo
  preload() {
    this.load.image("backgroundGameOver", "assets/background_gameover.png");
  }

  // Cria os elementos no jogo
  create() {
    // Cria o background
    this.add.image(400, 300, "backgroundGameOver");
    this.add.text(300, 100, "Game Over", { fontSize: "48px", fill: "#f00" });
    this.input.on("pointerdown", () => {
      this.scene.start("MenuScene");
    });
  }
}

// Classe/cena de de finalização do jogo (vencer)
class WinScene extends Phaser.Scene {
  // Inicializa a cena
  constructor() {
    super("WinScene");
  }
  // Carrega as imagens do jogo
  preload() {
    this.load.image("backgroundWin", "assets/background_win.png");
  }
  // Cria os elementos no jogo
  create() {
    this.add.image(400, 300, "backgroundWin");
    this.add.text(300, 100, "Você Ganhou!", { fontSize: "48px", fill: "#0f0" });
    this.input.on("pointerdown", () => {
      this.scene.start("MenuScene");
    });
  }
}

// Configurações gerais do jogo (tamanho, física, cenas...)
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: { default: "arcade", arcade: { debug: false } },
  scene: [MenuScene, GameScene, GameScene2, GameOverScene, WinScene],
};

const game = new Phaser.Game(config); // Cria o jogo

/* Respostas: 
POO - Programação Orientada Objetos: 

A programação orientada objetos, ou também chamada POO, é um estilo de arquitetura de código que promove 
uma fácil modularização do mesmo, isso porque ela permite a organização e estruturação em um esquema 
baseado na criação de classes, métodos e atributos e objetos. Abaixo haverá um detalhamento de cada fator
essencial para a criação de um código em POO:

Classes: As classes são como grandes "moldes", que contém informações básicas para determinado tipo de entidade. 
A classe pode armazenar:

- Atributos: características e/ou comportamentos pré-definidos da entidade (que podem ser armazenadas em variáveis)
- Métodos: funções pré-definidas que a entidade pode execultar

Ex: 

class Livro { 
  constructor(nome, lancamento) {
    this.nome = nome;
    this.lancamento = lancamento;
  }

  apresentacao() {
    console.log(`O livro ${this.nome} foi lançado no ano ${this.lancamento}.`);
  }
}

Objetos: Já os objetos são a criação/instanciação de algo feito através do molde (classe). Ou seja, se anteriormente
com a classe havia apenas um molde, agora é possível criar um elemento (objeto) em si

Ex:

let livro1 = new Livro("pequeno príncipe", 2011); 
livro1.apresentacao()

O que mudei no jogo:

A primeira dificuldade que encontrei foi o carregamento do tilemap, alterei de inúmeras formas e ele não aparecia. 
Após inspecionar a página, verifiquei que o Phaser3 não aceitava a configuração do tilemap disponibilizado, com isso,
abri o arquivo disponibilizado no Tiled, plataforma na qual pude unir os elementos e camadas... Dessa forma, o tile
funcionou. 

Após isso, iniciei a criação da segunda fase. Nela, optei por seguir um modelo parecido a da primeira, para manter 
o sentido, mas com um nível de dificuldade a mais. Modifiquei algumas funções para que fizesse sentido com as seguintes 
propostas:

- Player perde vida enquanto está encostado no inimigo, ao invés de apenas perder o jogo;
- Player precisa recolher uma certa quantidade de chaves para desbloquear a porta;
- Porta apresenta uma indicação indireta se está aberta ou não (através da opacidade da imagem);
- Velocidade do inimigo é mais alta (elevando a dificuldade)
- Criação de um obstáculo para confundir o jogador e dificultar o level (a porta falsa é configurasa para ter a 
opacidade de uma porta aberta, mas na verdade é apenas um obstáculo para o player, encurralando-o para o inimigo)

Seguindo a linha de raciocício, fui para a finalização e comentários do código, momento em que percebi que alguns 
trechos estavam se repetindo de forma desnecessária, como 

"this.physics.add.overlap(
      this.player,
      this.door,
      this.enterDoor, // Chama a função enterDoor() em caso da colisão
      null,
      this
);".

Por fim, também pude notar que, ainda que não seja um erro em si, algumas funções/métodos poderiam ser compartilhados 
entre diferentes classes/cenas, para que o código fosse mais limpo. Essas foram as principais alterações.


*/
