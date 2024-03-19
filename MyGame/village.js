class village extends Phaser.Scene {
    constructor() {
      super({ key: "village" });
    }
  
    preload() {
      // Step 1, load JSON
      this.load.tilemapTiledJSON("village", "assets/villageMap.tmj");
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



    } // end of preload //
  
    create() {
      console.log("village");
  
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
      this.cameras.main.startFollow(this.player)
  

    //   this.physics.world.bound.width=this.floorLayer.width
    //   this.physics.world.bound.height=this.floorLayer.height
    //   this.player.setCollideWorldBounds(true);

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
  
      this.buildingsLayer.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.buildingsLayer);
  
      this.othersLayer.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.othersLayer);
  
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
  
      if (this.player.x > 303 && 
        this.player.x < 330 && 
        this.player.y < 915.3 &&
        this.player.y > 640 ) {
        console.log("kitchenDoor");
        this.kitchen();
      }

      if (this.player.x > 940 && 
        this.player.x < 1012 && 
        this.player.y > 663) {
        console.log("anchoviesDoor");
        this.anchovies();
      }

    //   if (this.player.x > 517 && 
    //     this.player.x < 527 && 
    //     this.player.y < 595) {
    //     console.log("cucumberDoor");
    //     this.anchovies();
    //   }

    //   if (this.player.x > 943 && 
    //     this.player.x < 1011 && 
    //     this.player.y > 663) {
    //     console.log("eggDoor");
    //     this.anchovies();
    //   }
    } // end of update //
  
    // hitFire(player, item) {
    //   console.log("player hit fire");
    //   this.cameras.main.shake(200);
    //   item.disableBody(true, true); // remove fire
    //   return false;
    // }
  
    kitchen(player, tile) {
      console.log("kitchen function");
      this.scene.start("kitchen");
    }

    anchovies(player, tile) {
        console.log("anchovies function");
        this.scene.start("anchovies");
      }

      egg(player, tile) {
        console.log("anchovies function");
        this.scene.start("egg");
      }

      cucumber(player, tile) {
        console.log("anchovies function");
        this.scene.start("cucumber");
      }
  }
  