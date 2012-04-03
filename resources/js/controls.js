Crafty.c("gamecontrols", {
	init: function() {
		this.requires('Fourway');
	},
	
	gamecontrols: function() {
		this.fourway(this.movementSpeed, {W: -90, S: 90, D: 0, A: 180})
		return this;
	},
});