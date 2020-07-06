//const { Phaser } = require("./phaser");
window.PhaserGlobal ={};
window.PhaserGlobal.stopFocus = true;

var gridSize = 10;
var squareSize = 45;
var figter;
var playerspeed;
let gameScene = new Phaser.Scene('game');

gameScene.preload = function(){

    this.load.image('background', 'images/fundo.png');
    this.load.image('figter', 'images/Groom.png');
};


gameScene.init = function(){
    playerSpeed= 1.5;

}

gameScene.create = function(){
    for (var x=0;x<gridSize; x++){
        for (var y=0; y<gridSize; y++){
            var square = this.add.sprite(x*squareSize,y*squareSize,'background');
            square.setOrigin =(0,0);
            square.width =squareSize;
        square.height = squareSize;
        
        }
    }

    figter = this.add.sprite(0,0,"figter");
    figter.setOrigin(0,0);

    this.cursorKeys = this.input.keyboard.createCursorKeys();
  //  moveRigt();
   //let bg= this.add.sprite(0,0,'background');
  // bg.setOrigin(0,0);
};

gameScene.update = function(){

    this.movePlayerManager();
    /*
    Phaser.Input.Keyboard.KeyCodes
      var rightkey = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
       rightkey.onDown.add(this.figter.x+= playerSpeed) ;
    */
}

function movePlayerManager(){
    if(this.cursorKeys.left.isDown)
    {
        this.figter.setVelocityX(-gameSettings.playerspeed);
    }else if (this.cursorKeys.right.isDown){
        this.figter.setVelocityX(gameSettings.playerspeed);
    }
}
/*
function moveRight(){
    var tween = this.add.tween(figter).to({x: figter.x +squareSize},60);
    tween.start();
}
*/
let config = {
type: Phaser.AUTO,
width: gridSize*squareSize,
height: gridSize*squareSize,
scene: gameScene
};

let game = new Phaser.Game(config);

/*const game =new Phaser.Game(800,600,'mygame',{
    preload: preload,
    create: create,
    update: update
})
var config = {
    type: Phaser.CANVAS,
    width:800,
    height: 600,
    preload: preload,
        create: create,
        update: update
}

function preload(){
    game.load.image('fundo', 'images/fundo')
    }
    function create(){
        game.add.sprite(100,50, 'fundo')
    }
    function update(){
    
    }
class example extends Phaser.Scene{
    constructor() {
    super({Key:"example"});
    }
    preload()
    {
    this.load.image('GFS','assets/GFS.jpg');
    }
     
    create()
    {
    this.image = this.add.image(800,640,'GFS');
    }
     
    }

function preload(){
game.load.image('fundo', 'images/fundo')
}
function create(){
    game.add.sprite(100,50, 'fundo')
}
function update(){

}*/