//import { Phaser } from "./phaser.js";
//const { Phaser } = require("./phaser.js");
//const Phaser = require('./phaser');

var gridSize = 10;
var squareSize = 45;
//var figter;
//var playerspeed;


let gameScene = new Phaser.Scene('Game');

gameScene.init = function(){
    this.playerSpeed = 1.5;
}

gameScene.preload = function(){

    this.load.image('background', 'images/fundo.png');
    this.load.image('figter', 'images/Groom.png');
    this.load.image('espada', 'images/espadinha.png');
    this.load.image('perigo', 'images/javaperigo.png');

};

gameScene.create = function(){
    for (var x=0;x<gridSize; x++){
        for (var y=0; y<gridSize; y++){
            var square = this.add.sprite(x*squareSize,y*squareSize,'background');
            square.setOrigin =(0,0);
            square.width =squareSize;
        square.height = squareSize;
        
        }
    }

    this.player = this.add.sprite(0,0,"figter");
    this.player.setOrigin(0,0);

   this.espada = this.add.sprite(this.sys.game.config.width-250,this.sys.game.config.height/100,'espada');
   this.espada.setScale(0.6);


   this.enemies =this.add.group({
       key: 'perigo',
       repeat: 5,
       setXY: {
           x:110,
           y:100,
           stepX: 80,
           stepY:20
       }
   });
   Phaser.Actions.ScaleXY(this.enemies.getChildren(), -0.5,-0.5);

};

gameScene.gameOver = function(){
    this.scene.restart();
};

gameScene.update =function(){

   // keyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);



    /*key1 = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    key1.onDown.add(addPhaserDude, this);*/
    if(this.input.activePointer.isDown){
        this.player.x += this.playerSpeed;
        //this.input.keyboard.
    }

    if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(),this.espada.getBounds())){
        this.gameOver();
    }
};

let config= {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    scene: gameScene
};

let game = new Phaser.Game(config);