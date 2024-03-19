class m4 extends Phaser.Scene {

    constructor ()
    {
        super({ key: "m4" });
    }

    preload() {
      this.load.image('m4', 'assets/Instructions.png')
  
  }
  
  create () {
      this.m1 = this.add.image(0, 0, 'm4').setOrigin(0, 0).setScale(1);
     
      console.log("menu page - welcome");
    //   let map = this.make.tilemap({ key: "world" });
  
      var spaceDown = this.input.keyboard.addKey('SPACE');
      
      spaceDown.on('down', function(){
      console.log("Spacebar pressed, go to next menu");
      this.scene.stop("m4");
      this.scene.start("village");
      }, this );
  
  }
    
  }


  