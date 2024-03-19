class egg extends Phaser.Scene {
    constructor() {
      super({ key: "egg" });
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


    } // end of preload //
  
    create() {
      console.log("egg");
  
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
  
    //   this.kitchenLayer.setCollisionByExclusion(-1, true);
    //   this.physics.add.collider(this.player, this.kitchenLayer);
  
    //   this.equipmentLayer.setCollisionByExclusion(-1, true);
    //   this.physics.add.collider(this.player, this.equipmentLayer);
  
      
  
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
  
      if (this.player.x > 72 && 
        this.player.x < 136 && 
        this.player.y > 595) {
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
  
    village(player, tile) {
      console.log("village function");
      this.scene.start("village");
    }


    
  }
  