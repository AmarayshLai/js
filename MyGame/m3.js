class m3 extends Phaser.Scene {

    constructor ()
    {
        super({ key: "m3" });
    }

    preload() {
      this.load.image('m3', 'assets/Ingredients.png')
  
  }
  
  create () {
      this.m3 = this.add.image(0, 0, 'm3').setOrigin(0, 0).setScale(1);
     
      console.log("menu page - ingrdients");
    //   let map = this.make.tilemap({ key: "world" });
  
      var spaceDown = this.input.keyboard.addKey('SPACE');
      
      spaceDown.on('down', function(){
      console.log("Spacebar pressed, go to next menu");
      this.scene.stop("m3");
      this.scene.start("m4");
      }, this );
  
  }
    
  }


  