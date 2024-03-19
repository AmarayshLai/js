class tryagain extends Phaser.Scene {

    constructor ()
    {
        super({ key: "tryagain" });
    }

    preload() {
      this.load.image('tryagain', 'assets/TryAgain.png')
  
  }
  
  create () {
      this.m1 = this.add.image(0, 0, 'm1').setOrigin(0, 0).setScale(1);
     
      console.log("menu page - welcome");
    //   let map = this.make.tilemap({ key: "world" });
  
      var spaceDown = this.input.keyboard.addKey('SPACE');
      
      spaceDown.on('down', function(){
      console.log("Spacebar pressed, go to main menu");
      this.scene.stop("tryagain");
      this.scene.start("m1");
      }, this );
  
  }
    
  }


  