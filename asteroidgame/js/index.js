var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

// Key event manager
var Key = {
	down: {},
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,
	FIRE: 90,
	START: 32,
	// check if key has been pressed
	isPressed: function(keyCode) {
		if (Key.down[keyCode] === true) {
			Key.down[keyCode] = 'down'; // detected but still down
			return true;
		}
		return false;
	},
	// check if key is still down
	isDown: function(keyCode) {
		return Key.down[keyCode];
	},
	keyDownHandler: function(e) {
		e.preventDefault();
		if (!Key.down[e.keyCode]) // not detected
			Key.down[e.keyCode] = true;
	},
	keyUpHandler: function(e) {
		e.preventDefault();
		Key.down[e.keyCode] = false;
	}
}

// Helper functions
var Helper = {
	clamp: function(value, min, max) {
		return Math.max(min, Math.min(value, max));
	},
	random: function(min, max){
		return Math.random() * (max - min) + min;
	}
}

// Circle class
function Circle(x,y,radius,color){
	this.x = x || Math.random() * canvas.width;
	this.y = y || Math.random() * canvas.height;
	this.radius = radius || Math.random()*1.5;
	this.color = color;
	this.active = true;
}
Circle.prototype.draw = function() {
	ctx.fillStyle = this.color;
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
	ctx.fill();
}
Circle.prototype.inBounds = function() {
	return this.x >= 0 && this.x <= canvas.width &&
			this.y >= 0 && this.y <= canvas.height;
}


// Star class (inherits from Circle)
function Star(x,y,radius) {
	Circle.call(this,x,y,radius,'#DDD');
}
Star.prototype = new Circle();
Star.prototype.update = function() {
	// move star to the left
	this.x--;
	if (this.x <= 0) this.x = canvas.width;
	// make star smaller over time
	this.radius = this.radius - 0.0005;
	// make a new one when the star is gone
	if (this.radius <= 0) {
		var tmp = new Star();
		this.x = tmp.x;
		this.y = tmp.y;
		this.radius = tmp.radius;
		tmp = null;
		delete tmp;
	}
}


// SpaceShip class
function SpaceShip(x,y,w,h) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.bullets = [];
	this.points = 0;
	this.active = true;
}
SpaceShip.prototype.draw = function() {
	ctx.fillStyle = "#CCC";
	ctx.fillRect(this.x,this.y,this.w,this.h);
	// bullet things
	for (var i = 0, bl = this.bullets.length; i < bl; i++) {
		this.bullets[i].update();
		if (this.bullets[i].active) this.bullets[i].draw();
	}
	this.bullets = this.bullets.filter(function(bullet) {
		return bullet.active;
	});
}
SpaceShip.prototype.update = function() {
	// Fire!
	if (Key.isDown(Key.FIRE)) {
		this.fire();
	}
	// Go up
	if (Key.isDown(Key.UP)) {
		this.y-=3;
	}
	// Go down
	if (Key.isDown(Key.DOWN)) {
		this.y+=3;
	}
	// Go left
	if (Key.isDown(Key.LEFT)) {
		this.x-=3;
	}
	// Go up
	if (Key.isDown(Key.RIGHT)) {
		this.x+=3;
	}
	this.x = Helper.clamp(this.x, 0, canvas.width - this.w);
	this.y = Helper.clamp(this.y, 0, canvas.height - this.h);
}
SpaceShip.prototype.fire = function() {
	this.bullets.push(new Bullet(
		this.x + this.w,
		this.y + this.h/2
	));
}
SpaceShip.prototype.addPoints = function() {
	this.points++;
}
SpaceShip.prototype.explode = function() {
	this.active = false;
	game.changeCurrentState(game.GAME_STATE_OVER);
}


// Bullet class (inherits from Cirle)
function Bullet(x,y) {
	Circle.call(this,x,y,1,'#CCC');
}
Bullet.prototype = new Circle();
Bullet.prototype.update = function() {
	this.x+=3;
	this.active = this.active && this.inBounds();
}
Bullet.prototype.used = function() {
	this.active = false;
}


// Meteor class (inherits from Star)
function Meteor() {
	var radius = Helper.random(10,35);
	var x = canvas.width - this.radius;
	var y = Math.random() * canvas.height;
	Star.call(this,x,y,radius,'#DDD');
}
Meteor.prototype = new Star();
Meteor.prototype.update = function() {
	// move meteor to the left
	this.x--;
	// destroy when reaches the screen
	this.active = this.active && this.inBounds();
}
Meteor.prototype.collides1 = function(obj) {
	// circle to circle detection
	var dx = this.x - obj.x;
	var dy = this.y - obj.y;
	var distance = Math.sqrt(dx * dx + dy * dy);
	return (distance < this.radius + obj.radius);
}
Meteor.prototype.collides2 = function(obj) {
	// circle to rectangle detection https://gist.github.com/vonWolfehaus/5023015
	// Find the closest point to the circle within the rectangle. Assumes axis alignment! ie rect must not be rotated
	var closestX = Helper.clamp(this.x, obj.x, obj.x + obj.w);
	var closestY = Helper.clamp(this.y, obj.y, obj.y + obj.h);
	// Calculate the distance between the this's center and this closest point
	var distanceX = this.x - closestX;
	var distanceY = this.y - closestY;
	// If the distance is less than the this's radius, an intersection occurs
	var distanceSquared = (distanceX * distanceX) + (distanceY * distanceY);
	return distanceSquared < (this.radius * this.radius);
}
Meteor.prototype.collides3 = function(obj) {
	// rectangle to rectangle detection
}
Meteor.prototype.attacked = function(i) {
	this.radius-=3;
	if (this.radius <= 0) {
		this.explode();
		game.spaceship.addPoints();
	}
}
Meteor.prototype.explode = function() {
	this.active = false;
}


// game object
var game = {
	// Game constants
	GAME_STATE_TITLE: 0,
	GAME_STATE_NEW_GAME: 1,
	GAME_STATE_PLAY: 2,
	GAME_STATE_PAUSED: 3,
	GAME_STATE_OVER: 4,
	currentState: 0,
	currentStateFunction: null,
	// Game objects
	stars: [],
	meteors: [],
	spaceship: null,
	levels: [],
	changeCurrentState: function(state) {
		this.currentState = state;
		switch (state) {
			case this.GAME_STATE_TITLE:
				this.currentStateFunction = this.title;
				break;
			case this.GAME_STATE_NEW_GAME:
				this.currentStateFunction = this.start;
				break;
			case this.GAME_STATE_PLAY:
				this.currentStateFunction = this.play;
				break;
			case this.GAME_STATE_PAUSED:
				this.currentStateFunction = this.pause;
				break;
			case this.GAME_STATE_OVER:
				this.currentStateFunction = this.over;
				break;
		}
	},
	loop: function() {
		game.currentStateFunction();
		requestAnimationFrame(game.loop);
	},
	init: function() {
		// add event handlers
		window.addEventListener('keydown', Key.keyDownHandler, false);
		window.addEventListener('keyup', Key.keyUpHandler, false);
		// create stars
		var total_stars = Helper.random(250,500);
		for (var i = 0; i < total_stars; i++) {
			game.stars.push(new Star());
		}
		// start
		game.changeCurrentState(game.GAME_STATE_TITLE);
		game.loop();
	},
	// draw TITLE screen
	title: function() {
		// draw stars background
		game.drawBackground();
		// draw info
		game.setText('16px','#DDD','center');
		ctx.fillText('Move with ARROW KEYS', canvas.width/2, canvas.height/3);
		ctx.fillText('Fire with Z', canvas.width/2, canvas.height/2);
		ctx.fillText('Press SPACE to start or pause', canvas.width/2, 2*canvas.height/3);
		// check if start game
		if (Key.isPressed(Key.START)) {
			game.changeCurrentState(game.GAME_STATE_NEW_GAME);
		}
	},
	// prepare for a new game
	start: function() {
		// reset everything
		game.meteors = [];
		game.spaceship = null;
		// create spaceship
		game.spaceship = new SpaceShip(50, canvas.height/2, 15, 5);
		// start new game
		game.changeCurrentState(game.GAME_STATE_PLAY);
	},
	// draw PLAY state
	play: function() {
		// draw stars background
		game.drawBackground();
		// draw meteors
		for (var i = 0; i < game.meteors.length; i++) {
			game.meteors[i].update();
			if (game.meteors[i].active)
				game.meteors[i].draw();
		}
		// remove inactive meteors
		game.meteors = game.meteors.filter(function(meteor) {
			return meteor.active;
		});
		// create more meteors
		if (Math.random() < 0.01) {
			game.meteors.push(new Meteor());
		}
		// draw spaceship
		game.spaceship.update();
		game.spaceship.draw();
		// handle bullet+meteor collisions
		game.spaceship.bullets.forEach(function(bullet) {
			game.meteors.forEach(function(meteor) {
				if (meteor.collides1(bullet)){
					bullet.used();
					meteor.attacked();
				}
			});
		});
		// handle spaceship+meteor collisions
		game.meteors.forEach(function(meteor) {
			if (meteor.collides2(game.spaceship)){
				game.spaceship.explode();
			}
		});
		// check if pause
		if (Key.isPressed(Key.START)) {
			game.changeCurrentState(game.GAME_STATE_PAUSED);
		}
	},
	pause: function() {
		// draw stars background
		game.drawBackground();
		// draw paused text
		game.setText('32px','#DDD','center');
		ctx.fillText('PAUSE', canvas.width/2, canvas.width/4);
		// check if back to game
		if (Key.isPressed(Key.START)) {
			game.changeCurrentState(game.GAME_STATE_PLAY);
		}
	},
	over: function() {
		// draw stars background
		game.drawBackground();
		// draw meteors
		for (var i = 0; i < game.meteors.length; i++) {
			game.meteors[i].update();
			game.meteors[i].draw();
		}
		// draw game over text
		game.setText('32px','#DDD','center');
		ctx.fillText('GAME OVER', canvas.width/2, canvas.width/4);
		game.setText('16px','#FFF','center');
		ctx.fillText("Press SPACE to play again",canvas.width/2,300);
		// check if reset game
		if (Key.isPressed(Key.START)) {
			game.changeCurrentState(game.GAME_STATE_NEW_GAME);
		}
	},
	drawBackground: function() {
		ctx.clearRect(0,0,canvas.width,canvas.height);
		// draw background
		ctx.fillStyle = "#222";
		ctx.fillRect(0,0,canvas.width,canvas.height);
		// draw stars
		for (var i = 0; i < game.stars.length; i++) {
			game.stars[i].update();
			game.stars[i].draw();
		}
		// draw total points
		if (game.spaceship){
			game.setText('16px','#DDD','right');
			ctx.fillText(game.spaceship.points, canvas.width-25, 25);
		}
	},
	setText: function(size,color,align) {
		ctx.font = size + ' "Press Start 2P"';
		ctx.fillStyle = color;
		ctx.textAlign = align;
		ctx.textBaseline = "top";
	}
}

// start everything
game.init();