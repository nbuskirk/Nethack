
/* Temporary Scene array */
scene1 = new Array();
scene1[0] = [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0];
scene1[1] = [0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0];
scene1[2] = [0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0];
scene1[3] = [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0];
scene1[4] = [0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0];
scene1[5] = [1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0];
scene1[6] = [0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0];
scene1[7] = [0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0];
scene1[8] = [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0];

function generateMap(n){

	tilesx = Crafty.canvas._canvas.width / tilew;
	tilesy = Crafty.canvas._canvas.height / tilew;
	console.log(tilesx+" "+tilesy);
	
	for(x=0;x<tilesx;x++){ 
		for(y=0;y<tilesy;y++){

			switch(n[y][x]){
				case 0:
					Crafty.e("2D,Canvas,spr_blank, solid").attr({x:x*32,y:y*32});
					break;
				case 1:
					if(Crafty.math.randomInt(0, 10) > 9){
				
					Crafty.sprite(tilew, "resources/sprites/gamesprites.jpg", {
	    				monster: [Crafty.math.randomInt(0, 22),Crafty.math.randomInt(0, 8)]	
	    			});
					Crafty.e("2D,Canvas, monster, monsterai").attr({x:x*32,y:y*32});
				}else {
					Crafty.e("2D,Canvas,spr_floor1").attr({x:x*32,y:y*32});
					}
					break;
			};
		}
	}
//	generateMonsters();

}
