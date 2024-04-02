class egg extends Phaser.Scene {
    constructor() {
      super({ key: "egg" });
    }
  
    init(data) {
      this.player = data.player 
      this.inventory = data.inventory
    }

    preload() {
      // Step 1, load JSON
      this.load.tilemapTiledJSON("egg", "assets/eggMap.tmj");
      // this.load.tilemapTiledJSON("world","assets/farmMap.tmj")
  
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

      this.load.spritesheet("potato", "assets/Potato.png", {
        frameWidth: 62,
        frameHeight: 62,
      });

      this.load.audio("correct", "assets/Correct.mp3");
      this.load.audio("wrong", "assets/Wrong.mp3");
    } // end of preload //
  
    create() {
      console.log("egg");
  
      this.correctSnd = this.sound.add("correct");
      this.wrongSnd = this.sound.add("wrong");

      
    //   this.anims.create({
    //     key: "spinfire",
    //     frames: this.anims.generateFrameNumbers("fire", { start: 0, end: 5 }),
    //     frameRate: 10,
    //     repeat: -1,
    //   });
    this.anims.create({
        key: "eggAnim",
        frames: this.anims.generateFrameNumbers("egg", { start: 0, end: 1 }),
        frameRate: 5,
        repeat: -1,
      });

      this.anims.create({
        key: "potatoAnim",
        frames: this.anims.generateFrameNumbers("potato", { start: 0, end: 1 }),
        frameRate: 5,
        repeat: -1,
      });
      //Step 3 - Create the map from main
      let map = this.make.tilemap({ key: "egg" });
  
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
      this.collideLayer = map.createLayer("collideLayer", tilesArray, 0, 0);
    //   this.kitchenLayer = map.createLayer("kitchenLayer", tilesArray, 0, 0);
    //   this.equipmentLayer = map.createLayer("equipmentLayer", tilesArray, 0, 0);
      this.objectLayer = map.createLayer("objectLayer", tilesArray, 0, 0);
  
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
        key: "gen-down",
        frames: this.anims.generateFrameNumbers("gen", { start: 131, end: 138 }),
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
  
      this.player = this.physics.add.sprite(start.x, start.y, "gen");
      window.player = this.player;
      
      this.player.body.setSize(this.player.width * 0.4, this.player.height * 0.6);
  
      var potato1 = map.findObject("objectLayer", (obj) => obj.name === "potato1")
      var potato2 = map.findObject("objectLayer", (obj) => obj.name === "potato2")
      var potato3 = map.findObject("objectLayer", (obj) => obj.name === "potato3")
      var potato4 = map.findObject("objectLayer", (obj) => obj.name === "potato4")
      var potato5 = map.findObject("objectLayer", (obj) => obj.name === "potato5")

      var egg1 = map.findObject("objectLayer", (obj) => obj.name === "egg1")
      var egg2 = map.findObject("objectLayer", (obj) => obj.name === "egg2")
      var egg3 = map.findObject("objectLayer", (obj) => obj.name === "egg3")
      var egg4 = map.findObject("objectLayer", (obj) => obj.name === "egg4")
      var egg5 = map.findObject("objectLayer", (obj) => obj.name === "egg5")

      this.enemy1 = this.physics.add
      .sprite(potato1.x,potato1.y, "potato")
      .play("potatoAnim").setScale(0.5);

      this.enemy2 = this.physics.add
      .sprite(potato2.x,potato2.y, "potato")
      .play("potatoAnim").setScale(0.5);

      this.enemy3 = this.physics.add
      .sprite(potato3.x,potato3.y, "potato")
      .play("potatoAnim").setScale(0.5);

      this.enemy4 = this.physics.add
      .sprite(potato4.x,potato4.y, "potato")
      .play("potatoAnim").setScale(0.5);

      this.enemy5 = this.physics.add
      .sprite(potato5.x,potato5.y, "potato")
      .play("potatoAnim").setScale(0.5);

      this.collect1 = this.physics.add
      .sprite(egg1.x,egg1.y, "egg")
      .play("eggAnim").setScale(0.5);

      this.collect2 = this.physics.add
      .sprite(egg2.x,egg2.y, "egg")
      .play("eggAnim").setScale(0.5);

      this.collect3 = this.physics.add
      .sprite(egg3.x,egg3.y, "egg")
      .play("eggAnim").setScale(0.5);

      this.collect4 = this.physics.add
      .sprite(egg4.x,egg4.y, "egg")
      .play("eggAnim").setScale(0.5);

      this.collect5 = this.physics.add
      .sprite(egg5.x,egg5.y, "egg")
      .play("eggAnim").setScale(0.5);

      this.physics.add.overlap(
        this.player, // player
        [
          this.collect1,
          this.collect2,
          this.collect3,
          this.collect4,
          this.collect5,
        ], // item
        this.hitEgg, // function to call
        null,
        this
      );

      this.physics.add.overlap(
        this.player, // player
        [
          this.enemy1,
          this.enemy2,
          this.enemy3,
          this.enemy4,
          this.enemy5,
        ], // item
        this.hitPotato, // function to call
        null,
        this
      );

  
      this.collideLayer.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.collideLayer);
  
      
  
      // create the arrow keys
      this.cursors = this.input.keyboard.createCursorKeys();
  
      //inventory bar
var rect = new Phaser.Geom.Rectangle(255, 0, 300, 50);
var graphics = this.add.graphics({ fillStyle: { color: '0x052b1d ' } });
graphics.fillRectShape(rect).setScrollFactor(0)


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
this.heart1 = this.add.image (300,25,'nasi').setScrollFactor(0).setScale(0.4)
this.heart2 = this.add.image (330,25,'nasi').setScrollFactor(0).setScale(0.4)
this.heart3 = this.add.image (360,25,'nasi').setScrollFactor(0).setScale(0.4)

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
  
      if (this.player.x > 72 && 
        this.player.x < 136 && 
        this.player.y > 595) {
        console.log("villagedoor");
        this.villageEgg();
      }
    } // end of update //
  
    hitPotato(player, item) {
        console.log("player hit carrot");
        this.wrongSnd.play()
        this.cameras.main.shake(200);
        window.heart--
          console.log("***window.heart")
        item.disableBody(true, true); // remove carrot
        // return false;
    
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
    
        if (window.heart == 0) {
          this.scene.start("tryagain");
          this.wrongSnd.play();
        }
      }
    
      hitCucumber(player, collectible) {
        console.log("***collected cucumber");
        this.correctSnd.play()
        //disable collectible after overlap
        collectible.disableBody(false, true);
        window.cucumber++;
        this.cucumberNum.setText(window.cucumber);
      }
    
      hitIkan(player, collectible) {
        console.log("***collected ikan");
        this.correctSnd.play()
        //disable collectible after overlap
        collectible.disableBody(false, true);
        window.ikan++;
        this.ikanNum.setText(window.ikan);
      }
    
      hitEgg(player, collectible) {
        console.log("***collected egg");
        this.correctSnd.play()
        //disable collectible after overlap
        collectible.disableBody(false, true);
        window.egg++;
        this.eggNum.setText(window.egg);
      }

    villageEgg(player, tile) {
      console.log("village function");
      this.scene.start("villageEgg");
    }


    
  }
  