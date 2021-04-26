const canvas = document.getElementById('Game-Screen');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// window.addEventListener('keydown', keyPressed);

// window.addEventListener('keyup', keyReleased);




// have to use beginpath before using arc to make a circle


// PLAYER WELLBEING


class Player {
    constructor(x, y, radius, speed, x_velocity, y_velocity, forward) {
    
    // this.width = width;
    // this.height = height;
    // this.color = color;
    // this.angle = 0;
    // this.speed = 2;
    this.x = x;
    this.y = y;
    this.radius = radius; 
    this.speed = speed;
    this.x_velocity = x_velocity;
    this.y_velocity = y_velocity;
    this.forward = forward = true;
    // this.color = color;
    } 

    Appear() {
    ctx.beginPath();
    //       x    y 
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    }
};



  controls = {
    right: false,
    left: false,
    up: false,
    keyEvent: function(pressed) {

        let keyCondition =  (pressed.type == 'keydown')?true:false; 
       console.log(keyCondition);
            switch (pressed.keyCode) {
           case 37: //will go left
               controls.left = keyCondition;
               break;
            case 38: //will go up
                controls.up = keyCondition;
                break;
            case 39: // will go down
                controls.right = keyCondition;
                break;
            }
        }
    };



 const movement = function() {
     if(controls.up && Ship.forward == false) {

        Ship.y_velocity -= 20;
        Ship.forward = true;
     }

     if(controls.left) {
         Ship.x_velocity -= 0.5;
     }

     if(controls.right) {
         Ship.x_velocity += 0.5;
     }
 

     controls.y_velocity += 1.5;
     controls.x += controls.x_velocity;
     controls.y += controls.y_velocity;
     controls.x_velocity += 0.9;
     controls.y_velocity += 0.9;
 };



  window.addEventListener('keydown', controls.keyEvent);
  window.addEventListener('keyup', controls.keyEvent);


   // tried to center by dividng by two but ran into a blocker so instead 
//    I just adjested the x and y axis inside of the constant "Ship"
const Ship = new Player(1000, 600, 30, 0, 0);

Ship.Appear();


window.requestAnimationFrame(movement);




// Meteorites 



// FUNCTIONS FOR PLAYER             (PLAYER)



// FUNCTIONS FOR METEORITE         (METEORITE)



// functions for display screen       (GAME)



//Functions that puts the whole game together (EVERYPIECE)



