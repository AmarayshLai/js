
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    backgroundColor: '#000000',
    scene: [ m1, m2, m3, m4, village, kitchen, level1, level2, preloadScene, tryagain, congrats ]

};

let game = new Phaser.Game(config);