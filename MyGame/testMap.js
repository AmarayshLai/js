
// class testMap extends Phaser.Scene {
//     constructor ()
//     {
//         super({ key: 'testMap' });
//     }

//     preload() {

//         // Step 1, load JSON
//         this.load.tilemapTiledJSON("world","assets/MyGameMap.tmj")
 

//         // Step 2 : Preload any images here
//         this.load.image("forestPng", "assets/Forest32x32.png")
//         this.load.image("kitchenPng", "assets/Kitchen32x32.png")
//         this.load.image("desertPng", "assets/Desert32x32.png")
//         this.load.image("farmingPng", "assets/Farming32x32.png")
//         this.load.image("villagePng", "assets/Village32x32.png")

//     } // end of preload //

//     create (){

//     console.log("animationScene")

//     //Step 3 - Create the map from main
//     let map = this.make.tilemap({ key: "world" });

    
//     // Step 4 Load the game tiles
//     // 1st parameter is name in Tiled,
//     // 2nd parameter is key in Preload
//     let forestTiles = map.addTilesetImage("Forest32x32", "forestPng");
//     let kitchenTiles = map.addTilesetImage("Kitchen32x32", "kitchenPng");
//     let desertTiles = map.addTilesetImage("Desert32x32", "desertPng");
//     let farmingTiles = map.addTilesetImage("Farming32x32", "farmingPng");
//     let villageTiles = map.addTilesetImage("Village32x32", "villagePng");



//     //Step 5  create an array of tiles
//     let tilesArray = [
//        buildingTiles,
//        streetTiles,
//        desertTiles,
//        farmingTiles,
//        villageTiles
//     ];

//     // Step 6  Load in layers by layers
//     this.Base = map.createLayer("Base",tilesArray,0,0);

//     this.Floor = map.createLayer("Floor",tilesArray,0,0);

//     this.Kitchen = map.createLayer("Kitchen",tilesArray,0,0);

//     this.Objects = map.createLayer("Objects",tilesArray,0,0);




//     this.cursors = this.input.keyboard.createCursorKeys();

//      // make the camera follow the player
//      // this.cameras.main.startFollow(this.player);

//     } // end of create //

//     update () {

//         // if (this.cursors.left.isDown)
//         // {
//         //     this.player.setVelocityX(-160);
//         //     this.player.anims.play('gen-left', true);
//         // }
//         // else if (this.cursors.right.isDown)
//         // {
//         //     this.player.setVelocityX(160);
//         //     this.player.anims.play('gen-right', true);
//         // } else if (this.cursors.up.isDown)
//         // {
//         //     this.player.setVelocityY(-160);
//         //     this.player.anims.play('gen-up', true);
//         // } else if (this.cursors.down.isDown)
//         // {
//         //     this.player.setVelocityY(160);
//         //     this.player.anims.play('gen-down', true);
//         // } else {
//         //     this.player.setVelocity(0);
//         //     this.player.anims.stop();
//         // }

//     } // end of update // 
// }