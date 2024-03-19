class congrats extends Phaser.Scene {

    constructor ()
    {
        super({ key: "congrats" });
    }

    preload() {
      this.load.image('congrats', 'assets/Congrats.png')
  
  }
  
  create () {
      this.m1 = this.add.image(0, 0, 'congrats').setOrigin(0, 0).setScale(1);
     
      console.log("menu page - welcome");
    //   let map = this.make.tilemap({ key: "world" });
  
      var spaceDown = this.input.keyboard.addKey('SPACE');
      
      spaceDown.on('down', function(){
      console.log("Spacebar pressed, go to main menu");
      this.scene.stop("congrats");
      this.scene.start("m1");
      }, this );
  
  }
    
  }


  