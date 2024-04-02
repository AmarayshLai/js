
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#052b1d',
    scene: [ m1, m2, m3, m4, village, kitchen, cucumber, egg, anchovies, preloadScene, tryagain, congrats ]

};

let game = new Phaser.Game(config);
window.egg = 0
window.cucumber = 0
window.ikan = 0
window.heart = 3;
