Crafty.c("Flicker",{

	flicker:true,
	init:function(){

		this.bind("EnterFrame",function(frame){
		
			if(frame.frame % 5 == 0 && this.flicker){
			
				if(this.alpha == 0.0){
					this.alpha = 1.0;
				}else {
					this.alpha = 0.0;
				}
			
			}
			if(!this.flicker){
				this.alpha = 1.0;
			}
		
		});

	}


});
