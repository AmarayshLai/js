class anchovies extends Phaser.Scene {
    constructor() {
      super({ key: "anchovies" });
    }
  
    init(data) {
      this.player = data.player 
      this.inventory = data.inventory
    }

    preload() {
      // Step 1, load JSON
      this.load.tilemapTiledJSON("anchovies", "assets/anchoviesMap.tmj");
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

      this.load.spritesheet("fish", "assets/Fish.png", {
        frameWidth: 62,
        frameHeight: 62,
      });

      this.load.spritesheet("ikan", "assets/Ikan.png", {
        frameWidth: 62,
        frameHeight: 62,
      });
      this.load.audio("correct", "assets/Correct.mp3");
      this.load.audio("wrong", "assets/Wrong.mp3");
    } // end of preload //
  
    create() {
      console.log("anchovies");
  
      this.correctSnd = this.sound.add("correct");
      this.wrongSnd = this.sound.add("wrong");

      this.anims.create({
        key: "ikanAnim",
        frames: this.anims.generateFrameNumbers("ikan", { start: 0, end: 1 }),
        frameRate: 5,
        repeat: -1,
      });

      this.anims.create({
        key: "fishAnim",
        frames: this.anims.generateFrameNumbers("fish", { start: 0, end: 1 }),
        frameRate: 5,
        repeat: -1,
      });

      //Step 3 - Create the map from main
      let map = this.make.tilemap({ key: "anchovies" });
  
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
    //   this.kitchenLayer = map.createLayer("kitchenLayer", tilesArray, 0, 0);
    //   this.equipmentLayer = map.createLayer("equipmentLayer", tilesArray, 0, 0);
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
     

      this.player = this.physics.add.sprite(start.x, start.y, "gen");
      window.player = this.player;
  
      var ikan1 = map.findObject("objectLayer", (obj) => obj.name === "ikan1")
      var ikan2 = map.findObject("objectLayer", (obj) => obj.name === "ikan2")
      var ikan3 = map.findObject("objectLayer", (obj) => obj.name === "ikan3")
      var ikan4 = map.findObject("objectLayer", (obj) => obj.name === "ikan4")
      var ikan5 = map.findObject("objectLayer", (obj) => obj.name === "ikan5")

      var fish1 = map.findObject("objectLayer", (obj) => obj.name === "fish1")
      var fish2 = map.findObject("objectLayer", (obj) => obj.name === "fish2")
      var fish3 = map.findObject("objectLayer", (obj) => obj.name === "fish3")
      var fish4 = map.findObject("objectLayer", (obj) => obj.name === "fish4")
      var fish5 = map.findObject("objectLayer", (obj) => obj.name === "fish5")

      this.collect1 = this.physics.add
      .sprite(ikan1.x,ikan1.y, "ikan")
      .play("ikanAnim");

      this.collect2 = this.physics.add
      .sprite(ikan2.x,ikan2.y, "ikan")
      .play("ikanAnim");

      this.collect3 = this.physics.add
      .sprite(ikan3.x,ikan3.y, "ikan")
      .play("ikanAnim");

      this.collect4 = this.physics.add
      .sprite(ikan4.x,ikan4.y, "ikan")
      .play("ikanAnim");

      this.collect5 = this.physics.add
      .sprite(ikan5.x,ikan5.y, "ikan")
      .play("ikanAnim");

      this.enemy1 = this.physics.add
      .sprite(fish1.x,fish1.y, "fish")
      .play("fishAnim").setScale(0.5);

      this.enemy2 = this.physics.add
      .sprite(fish2.x,fish2.y, "fish")
      .play("fishAnim").setScale(0.5);

      this.enemy3 = this.physics.add
      .sprite(fish3.x,fish3.y, "fish")
      .play("fishAnim").setScale(0.5);

      this.enemy4 = this.physics.add
      .sprite(fish4.x,fish4.y, "fish")
      .play("fishAnim").setScale(0.5);

      this.enemy5 = this.physics.add
      .sprite(fish5.x,fish5.y, "fish")
      .play("fishAnim").setScale(0.5);

      this.physics.add.overlap(
        this.player, // player
        [
          this.collect1,
          this.collect2,
          this.collect3,
          this.collect4,
          this.collect5,
        ], // item
        this.hitIkan, // function to call
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
        this.hitFish, // function to call
        null,
        this
      );

//       var fire1 = map.findObject("objectLayer", (obj) => obj.name === "fire1");
//       var fire2 = map.findObject("objectLayer", (obj) => obj.name === "fire2");
  
//       this.enemy1 = this.physics.add
//         .sprite(fire1.x, fire1.y, "fire")
//         .play("spinfire").setScale(0.7)
//       this.enemy2 = this.physics.add
//         .sprite(fire2.x, fire2.y, "fire")
//         .play("spinfire").setScale(0.7);
  
//       this.physics.add.overlap(
//         this.player,
//         this.enemy1,
//         this.hitFire,
//         null,
//         this
//       );
  
//       this.physics.add.overlap(
//         this.player,
//         this.enemy2,
//         this.hitFire,
//         null,
//         this
//       );
  
//       this.tweens.add({
//         targets: this.enemy1,
//         y: 100,
//         //flipX: true,
//         yoyo: true,
//         duration: 1000,
//         repeat: -1
//     })
  
//     this.tweens.add({
//       targets: this.enemy2,
//       y: 400,
//       //flipX: true,
//       yoyo: true,
//       duration: 1000,
//       repeat: -1
//   })
  
      // this.kitchenLayer.setCollisionByExclusion(-1, true);
      // this.physics.add.collider(this.player, this.kitchenLayer);
  
      // this.equipmentLayer.setCollisionByExclusion(-1, true);
      // this.physics.add.collider(this.player, this.equipmentLayer);
  
      this.player.body.setSize(this.player.width * 0.4, this.player.height * 0.6);
  
      // create the arrow keys
      this.cursors = this.input.keyboard.createCursorKeys();
  
      // var level3Down = this.input.keyboard.addKey("3");
  
      // rDown.on(
      //   "down",
      //   function () {
      //     console.log("R pressed (reload game)");
      //     this.scene.start("gameScene");
      //   },
      //   this
      // );
  
      // aDown.on(
      //   "down",
      //   function () {
      //     console.log("A pressed (main menu)");
      //     this.scene.start("preloadScene");
      //   },
      //   this
      // );
  
      // var level2Down = this.input.keyboard.addKey(50);
  
      // level2Down.on(
      //   "down",
      //   function () {
      //     console.log("2 pressed, jump to level 2");
      //     this.scene.start("level2");
      //   },
      //   this
      // );
  
      // make the camera follow the player
      // this.cameras.main.startFollow(this.player);
  
      var level1Down = this.input.keyboard.addKey(49);
  
      level1Down.on(
        "down",
        function () {
          console.log("1 pressed, jump to level 1");
          this.scene.start("level1");
        },
        this
      );
  
      var level2Down = this.input.keyboard.addKey(50);
  
      level2Down.on(
        "down",
        function () {
          console.log("2 pressed, jump to level 2");
          this.scene.start("level2");
        },
        this
      );

      //inventory bar
var rect = new Phaser.Geom.Rectangle(255, 0, 300, 50);
var graphics = this.add.graphics({ fillStyle: { color: '0x052b1d ' } });
graphics.fillRectShape(rect).setScrollFactor(0)


//stuff
this.eggInv = this.add.image (400, 25, 'egg').setScrollFactor(0).setScale(0.4);
this.cucumberInv = this.add.image (440, 25, 'cucumber').setScrollFactor(0).setScale(0.4);
this.ikanInv = this.add.image (480, 25, 'ikan').setScrollFactor(0).setScale(0.4);

this.eggNum = this.add.text(415, 20, window.egg, {font: '15px Futura PT Medium', fill: '#ffffff'}).setScrollFactor(0);
this.cucumberNum = this.add.text(450, 20, window.cucumber, {font: '15px Futura PT Medium', fill: '#ffffff'}).setScrollFactor(0);
this.ikanNum = this.add.text(485, 20, window.ikan, {font: '15px Futura PT Medium', fill: '#ffffff'}).setScrollFactor(0);



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
  
      if (this.player.x > 80 && 
        this.player.x < 150 && 
        this.player.y < 3.6) {
        console.log("villagedoor");
        this.village();
      }
    } // end of update //
  
    // hitFire(player, item) {
    //   console.log("player hit fire");
    //   this.cameras.main.shake(200);
    //   item.disableBody(true, true); // remove fire
    //   return false;
    // }
    hitFish(player, item) {
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

    village(player, tile) {
      console.log("village function");
      this.scene.start("village");
    }


    
  }
  