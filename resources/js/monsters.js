Crafty.c("monsterai",{ 

	hp:{
		current:60,
		max:60
	},
	combat:false,
	
	init:function(){

		this.requires("SpriteAnimation, Collision, 2D, Canvas, Flicker")	
		.onHit("hero",function(ent){
            var player = ent[0].obj;
            Crafty(player[0]).trigger("Hurt",this.hp);
            this.trigger("Hurt",this.hp);
        })
        .bind("Hurt",function(dmg){
	    this.combat=true;
	    this.flicker = true;
	    this.hp.current--;
            if(this.hp.current <= 0) this.trigger("Die");
        })
        .bind("Die",function(){
            this.trigger("Reset");
            this.destroy();
        })
        .bind("Reset",function(){
        	Crafty.e("2D,Canvas,spr_floor1").attr({x:this.x,y:this.y}); 
            this.hp.current = this.hp.max;      	
        })
	.bind("EnterFrame",function(){ 
		if(this.combat){
		this.flicker = true;
		}else {
		this.flicker = false;
		}
	});
	},

})
