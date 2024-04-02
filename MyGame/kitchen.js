class kitchen extends Phaser.Scene {
    constructor() {
      super({ key: "kitchen" });
    }
  
    preload() {
      // Step 1, load JSON
      this.load.tilemapTiledJSON("kitchen", "assets/kitchenMapNew.tmj");
  
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
    } // end of preload //
  
    create() {
      console.log("kitchen");
  
      //Step 3 - Create the map from main
      let map = this.make.tilemap({ key: "kitchen" });
  
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
      this.collideLayer = map.createLayer("collideLayer", tilesArray, 0, 0);
      this.baseLayer = map.createLayer("baseLayer", tilesArray, 0, 0);
      this.floorLayer = map.createLayer("floorLayer", tilesArray, 0, 0);
      this.kitchenLayer = map.createLayer("kitchenLayer", tilesArray, 0, 0);
      this.equipmentLayer = map.createLayer("equipmentLayer", tilesArray, 0, 0);
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
  
      this.collideLayer.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.collideLayer);
      
      this.kitchenLayer.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.kitchenLayer);
  
      this.equipmentLayer.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.player, this.equipmentLayer);
  
      this.player.body.setSize(this.player.width * 0.4, this.player.height * 0.6);
  
      // create the arrow keys
      this.cursors = this.input.keyboard.createCursorKeys();
  

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
  
      if (this.player.x > 362 && 
        this.player.x < 434 && 
        this.player.y > 493) {
        console.log("villagedoor");
        this.village();
      }

      // //winning scene
      // // if (this.player.x > 914 && this.player .x < 994 && this.player.y > 1079 && this.player.y < 1114) {
      // //   //console.log("home location")
      //   console.log(window.cucumber, window.egg, window.ikan)
      // if (window.cucumber > 4, window.egg >4, window.ikan >4) {
      //   console.log("jumping to winning scene")
      //   this.scene.start("congrats")
      // } else {
      //   this.scene.start("village")

      // }
    

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
  