class tryagain extends Phaser.Scene {

    constructor ()
    {
        super({ key: "tryagain" });
    }

    preload() {
      this.load.image('tryagain', 'assets/TryAgain.png')
  
  }
  
  create () {
      this.tryagain = this.add.image(0, 0, 'tryagain').setOrigin(0, 0).setScale(1);
     
      console.log("try again page");
    //   let map = this.make.tilemap({ key: "world" });
  
         //reload 3 hearts 
         window.cucumber = 0
         window.ikan = 0
         window.egg = 0
         window.heart = 3;

      
      var spaceDown = this.input.keyboard.addKey('SPACE');
      
      spaceDown.on('down', function(){
      console.log("Spacebar pressed, go to main menu");
      this.scene.stop("tryagain");
      this.scene.start("m1");
      }, this );
  
  
  }
    
  }


  