class villageKitchen extends Phaser.Scene {
  constructor() {
    super({ key: "villageKitchen" });
  }

  init(data) {
    this.player = data.player;
    this.inventory = data.inventory;
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("village", "assets/villageMap.tmj");

    // Step 2 : Preload any images here
    this.load.image("forestPng", "assets/Forest32x32.png");
    this.load.image("kitchenPng", "assets/Kitchen32x32.png");
    this.load.image("desertPng", "assets/Desert32x32.png");
    this.load.image("farmingPng", "assets/Farming32x32.png");
    this.load.image("villagePng", "assets/Village32x32.png");
    this.load.spritesheet("fire", "assets/fire.png", {
      frameWidth: 40,
      frameHeight: 70,
    });

    this.load.spritesheet("gen", "assets/amaraysh.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    this.load.spritesheet("egg", "assets/Egg.png", {
      frameWidth: 62,
      frameHeight: 62,
    });

    this.load.spritesheet("carrot", "assets/Carrot.png", {
      frameWidth: 62,
      frameHeight: 62,
    });

    this.load.spritesheet("cucumber", "assets/Cucumber.png", {
      frameWidth: 62,
      frameHeight: 62,
    });

    this.load.spritesheet("fish", "assets/Fish.png", {
      frameWidth: 62,
      frameHeight: 62,
    });

    this.load.spritesheet("potato", "assets/Potato.png", {
      frameWidth: 62,
      frameHeight: 62,
    });

    this.load.spritesheet("ikan", "assets/Ikan.png", {
      frameWidth: 62,
      frameHeight: 62,
    });

    this.load.spritesheet("nasi", "assets/NasiLemak.png", {
      frameWidth: 62,
      frameHeight: 62,
    });
  } // end of preload //

  create() {
    console.log("village");

    this.anims.create({
      key: "cucumberAnim",
      frames: this.anims.generateFrameNumbers("cucumber", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "ikanAnim",
      frames: this.anims.generateFrameNumbers("ikan", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "eggAnim",
      frames: this.anims.generateFrameNumbers("egg", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    //   this.anims.create({
    //     key: "spinfire",
    //     frames: this.anims.generateFrameNumbers("fire", { start: 0, end: 5 }),
    //     frameRate: 10,
    //     repeat: -1,
    //   });

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "village" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let forestTiles = map.addTilesetImage("Forest32x32", "forestPng");
    let kitchenTiles = map.addTilesetImage("Kitchen32x32", "kitchenPng");
    let desertTiles = map.addTilesetImage("Desert32x32", "desertPng");
    let farmingTiles = map.addTilesetImage("Farming32x32", "farmingPng");
    let villageTiles = map.addTilesetImage("Village32x32", "villagePng");

    //Step 5  create an array of tiles
    let tilesArray = [
      forestTiles,
      kitchenTiles,
      desertTiles,
      farmingTiles,
      villageTiles,
    ];

    // Step 6  Load in layers by layers
    this.baseLayer = map.createLayer("baseLayer", tilesArray, 0, 0);
    this.floorLayer = map.createLayer("floorLayer", tilesArray, 0, 0);
    this.buildingsLayer = map.createLayer("buildingsLayer", tilesArray, 0, 0);
    this.othersLayer = map.createLayer("othersLayer", tilesArray, 0, 0);
    this.objectLayer = map.createLayer("objectLayer", tilesArray, 0, 0);

    this.anims.create({
      key: "gen-down",
      frames: this.anims.generateFrameNumbers("gen", { start: 131, end: 138 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gen-up",
      frames: this.anims.generateFrameNumbers("gen", { start: 105, end: 112 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gen-left",
      frames: this.anims.generateFrameNumbers("gen", { start: 118, end: 125 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gen-right",
      frames: this.anims.generateFrameNumbers("gen", { start: 144, end: 151 }),
      frameRate: 5,
      repeat: -1,
    });

    var start = map.findObject("objectLayer", (obj) => obj.name === "start");

    // this.player = this.physics.add.sprite("gen");
    this.player = this.physics.add.sprite(319.5, 933.5, "gen");
    // this.player = this.physics.add.sprite(start.x, start.y, "gen");

    window.player = this.player;
    this.cameras.main.startFollow(this.player);

    this.buildingsLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.buildingsLayer);

    this.othersLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.othersLayer);

    this.player.body.setSize(this.player.width * 0.4, this.player.height * 0.6);

    var ikan1 = map.findObject("objectLayer", (obj) => obj.name === "ikan1");
    var ikan2 = map.findObject("objectLayer", (obj) => obj.name === "ikan2");
    var ikan3 = map.findObject("objectLayer", (obj) => obj.name === "ikan3");
    var cucumber1 = map.findObject(
      "objectLayer",
      (obj) => obj.name === "cucumber1"
    );
    var cucumber2 = map.findObject(
      "objectLayer",
      (obj) => obj.name === "cucumber2"
    );
    var cucumber3 = map.findObject(
      "objectLayer",
      (obj) => obj.name === "cucumber3"
    );
    var egg1 = map.findObject("objectLayer", (obj) => obj.name === "egg1");
    var egg2 = map.findObject("objectLayer", (obj) => obj.name === "egg2");
    var egg3 = map.findObject("objectLayer", (obj) => obj.name === "egg3");

    this.collect1 = this.physics.add
      .sprite(egg1.x, egg1.y, "egg")
      .play("eggAnim")
      .setScale(0.5);

    this.collect2 = this.physics.add
      .sprite(egg2.x, egg2.y, "egg")
      .play("eggAnim")
      .setScale(0.5);

    this.collect3 = this.physics.add
      .sprite(egg3.x, egg3.y, "egg")
      .play("eggAnim")
      .setScale(0.5);

    this.collect4 = this.physics.add
      .sprite(cucumber1.x, cucumber1.y, "cucumber")
      .play("cucumberAnim")
      .setScale(0.7);

    this.collect5 = this.physics.add
      .sprite(cucumber2.x, cucumber2.y, "cucumber")
      .play("cucumberAnim")
      .setScale(0.7);

    this.collect6 = this.physics.add
      .sprite(cucumber3.x, cucumber3.y, "cucumber")
      .play("cucumberAnim")
      .setScale(0.7);

    this.collect7 = this.physics.add
      .sprite(ikan1.x, ikan1.y, "ikan")
      .play("ikanAnim");

    this.collect8 = this.physics.add
      .sprite(ikan2.x, ikan2.y, "ikan")
      .play("ikanAnim");

    this.collect9 = this.physics.add
      .sprite(ikan3.x, ikan3.y, "ikan")
      .play("ikanAnim");

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    
    //inventory bar
    var rect = new Phaser.Geom.Rectangle(255, 0, 300, 50);
    var graphics = this.add.graphics({ fillStyle: { color: "0x052b1d " } });
    graphics.fillRectShape(rect).setScrollFactor(0);

    //stuff
    this.eggInv = this.add
      .image(400, 25, "egg")
      .setScrollFactor(0)
      .setScale(0.4);
    this.cucumberInv = this.add
      .image(445, 25, "cucumber")
      .setScrollFactor(0)
      .setScale(0.4);
    this.ikanInv = this.add
      .image(490, 25, "ikan")
      .setScrollFactor(0)
      .setScale(0.4);

    this.eggNum = this.add
      .text(416, 15, window.egg, {
        font: "15px Futura PT Medium",
        fill: "#ffffff",
      })
      .setScrollFactor(0);
    this.cucumberNum = this.add
      .text(458, 15, window.cucumber, {
        font: "15px Futura PT Medium",
        fill: "#ffffff",
      })
      .setScrollFactor(0);
    this.ikanNum = this.add
      .text(510, 15, window.ikan, {
        font: "15px Futura PT Medium",
        fill: "#ffffff",
      })
      .setScrollFactor(0);

    //hearts
    this.heart1 = this.add
      .image(300, 25, "nasi")
      .setScrollFactor(0)
      .setScale(0.4);
    this.heart2 = this.add
      .image(330, 25, "nasi")
      .setScrollFactor(0)
      .setScale(0.4);
    this.heart3 = this.add
      .image(360, 25, "nasi")
      .setScrollFactor(0)
      .setScale(0.4);

    if (window.heart === 3) {
      this.heart1.setVisible(true);
      this.heart2.setVisible(true);
      this.heart3.setVisible(true);
    } else if (window.heart === 2) {
      this.heart1.setVisible(true);
      this.heart2.setVisible(true);
      this.heart3.setVisible(false);
    } else if (window.heart === 1) {
      this.heart1.setVisible(true);
      this.heart2.setVisible(false);
      this.heart3.setVisible(false);
    } else if (window.heart === 0) {
      this.heart1.setVisible(false);
      this.heart2.setVisible(false);
      this.heart3.setVisible(false);
    }
  } // end of create //

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play("gen-left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play("gen-right", true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-160);
      this.player.anims.play("gen-up", true);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(160);
      this.player.anims.play("gen-down", true);
    } else {
      this.player.setVelocity(0);
      this.player.anims.stop();
    }

    if (this.player.x > 940 && this.player.x < 1012 && this.player.y > 663) {
      console.log("anchoviesDoor");
      this.anchovies();
    }

    if (this.player.x > 524 && this.player.x < 596 && this.player.y < 517) {
      console.log("cucumberDoor");
      this.cucumber();
    }

    if (this.player.x > 723 && this.player.x < 814 && this.player.y < 532) {
      console.log("eggDoor");
      this.egg();
    }

    if (
      this.player.x > 303 &&
      this.player.x < 330 &&
      this.player.y < 915.3 &&
      this.player.y > 640
    ) {
      console.log(window.cucumber, window.egg, window.ikan)
      if (window.cucumber > 4, window.egg >4, window.ikan >4) {
            console.log("jumping to winning scene");
            this.scene.start("congrats");

      }
            else{
      console.log("kitchenDoor");
      this.kitchen();
    }
  }

  }



  kitchen(player, tile) {
    console.log("kitchen function");
    this.scene.start("kitchen");
  }

  anchovies(player, tile) {
    console.log("anchovies function");
    this.scene.start("anchovies");
  }

  egg(player, tile) {
    console.log("egg function");
    this.scene.start("egg");
  }

  cucumber(player, tile) {
    console.log("cucumber function");
    this.scene.start("cucumber");
  }
}
