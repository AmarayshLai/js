class m1 extends Phaser.Scene {

    constructor ()
    {
        super({ key: "m1" });
    }

    preload() {
      this.load.image('m1', 'assets/Welcome.png')
  
      this.load.audio("bgmusic", "assets/bg_music.mp3");
    
    }
  
  create () {
      this.m1 = this.add.image(0, 0, 'm1').setOrigin(0, 0).setScale(1);
     
      console.log("menu page - welcome");
    //   let map = this.make.tilemap({ key: "world" });
  
    this.music = this.sound.add("bgmusic",{loop: true}).setVolume(0.2);
 this.music.play();

      var spaceDown = this.input.keyboard.addKey('SPACE');
      
      spaceDown.on('down', function(){
      console.log("Spacebar pressed, go to next menu");
      this.scene.stop("m1");
      this.scene.start("m2");
      }, this );
  
  }
    
  }


  