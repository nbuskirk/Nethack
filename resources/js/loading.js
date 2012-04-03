Crafty.scene("loading", function() { 

	tilew = 32;
	Crafty.background("#000");
	Crafty.e("2D,DOM,Text").attr({x:Crafty.canvas._canvas.width/2-75,y:Crafty.canvas._canvas.height/2,w:150}).text("Loading Game..");

	// Map our nethack sprites before loading
  	Crafty.sprite(tilew, "resources/sprites/gamesprites.jpg", {
	    spr_floor1: [8,21],
	    spr_blank: [29,20]
	});
	Crafty.sprite(tilew, "resources/sprites/playersprites.png", {
	    spr_player: [0,3]
	});
		
	Crafty.load(["resources/sprites/gamesprites.jpg","resources/sprites/playersprites.png"], function(){ 
		Crafty.scene("main");
	});
	
});

Crafty.scene("main", function(){ 

	generateMap(scene1); //an array of tile definitions replace later with json or something
	var player = Crafty.e("2D, Canvas, hero, gamecontrols").attr({x:256,y:64,z:1}).gamecontrols(3);

});

Crafty.scene("gameover",function(){ 

	Crafty.e("2D,DOM,Text").attr({x:Crafty.canvas._canvas.width/2-75,y:Crafty.canvas._canvas.height/2,w:150}).text("GAME OVER");

});