class m2 extends Phaser.Scene {

    constructor ()
    {
        super({ key: "m2" });
    }

    preload() {
      this.load.image('m2', 'assets/Greetings.png')
  
  }
  
  create () {
      this.m2 = this.add.image(0, 0, 'm2').setOrigin(0, 0).setScale(1);
     
      console.log("menu page - grreetings");
    //   let map = this.make.tilemap({ key: "world" });
  
      var spaceDown = this.input.keyboard.addKey('SPACE');
      
      spaceDown.on('down', function(){
      console.log("Spacebar pressed, go to next menu");
      this.scene.stop("m2");
      this.scene.start("m3");
      }, this );
  
  }
    
  }


  