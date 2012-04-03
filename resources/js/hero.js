Crafty.c("hero",{ 
	
	hp:{
        current:200,
        max:200
    },
	movementSpeed:2,
	
	init:function(){ 
		
		this.requires("SpriteAnimation, Collision, spr_player, 2D, Canvas")
		.animate("walk_left", 6, 3, 8)
    	.animate("walk_right", 9, 3, 11)
    	.animate("walk_up", 3, 3, 5)
   		.animate("walk_down", 0, 3, 2)		
		.bind("NewDirection",
			function (direction) {		
				if (direction.x < 0) {
					if (!this.isPlaying("walk_left"))
						this.stop().animate("walk_left", 3, -1);
				}
				if (direction.x > 0) {
					if (!this.isPlaying("walk_right"))
						this.stop().animate("walk_right", 3, -1);
				}
				if (direction.y < 0) {
					if (!this.isPlaying("walk_up"))
						this.stop().animate("walk_up", 3, -1);
				}
				if (direction.y > 0) {
					if (!this.isPlaying("walk_down"))
						this.stop().animate("walk_down", 3, -1);
				}
				if(!direction.x && !direction.y) {
					this.stop();
				}
		})
		.bind('Moved', function(from) { 
            if(this.x+this.w > Crafty.viewport.width ||
                this.x+this.w < this.w || 
                this.y+this.h < this.h || 
                this.y+this.h > Crafty.viewport.height || this.preparing){
                this.attr({
                    x:from.x, 
                    y:from.y
                });
            }
            if(this.hit('solid')){
				this.attr({x: from.x, y:from.y});
			}
			
        })
        .bind("Hurt",function(){
            this.hp.current--;
            if(this.hp.current <= 0) this.trigger("Die");
        })
        .bind("Die",function(){
            this.destroy();
        	Crafty.scene("gameover");
        });
        
        	
	return this;
	
	}//end init   
});