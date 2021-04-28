const canvas = document.getElementById('Game-Screen');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 900;

let gameFrame = 0;
const titleScreen = document.getElementById('gamestart_Screen')
const button = document.getElementById('playerbutton');

function fadeOut(){
    const square = document.getElementById('gamestart_Screen');
    square.style.opacity = '0';
    square.style.zIndex = '-1';
}



// have to use beginpath before using arc to make a circle


// PLAYER WELLBEING
let canvasPosition =canvas.getBoundingClientRect();
 const mouse = {
     x: canvas.width / 2,
     y: canvas.height / 2,
     
 }

canvas.addEventListener('mousemove', function(event){
mouse.x = event.x -= canvasPosition.left;
mouse.y = event.y -= canvasPosition.top;
});



class Player {
    constructor(x, y, radius, speed, x_velocity, y_velocity, forward) {
    
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
    if (mouse.click) {
     ctx.lineWidth = 0.2;
     ctx.beginPath();
     ctx.moveTo(this.x, this.y);
     ctx.lineTo(mouse.x, mouse.y);
     ctx.fill();
        } 
    ctx.beginPath(); 
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    }

    update() {
       const dx = this.x = mouse.x;
       const dy = this.y = mouse.y;
       if(mouse.x !== this.x) {
           this.x -= dx/50;
       }
       if(mouse.y !== this.y) {
           this.y -= dy/50;
       }
   }
};
 


   // tried to center by dividng by two but ran into a blocker so instead 
//    I just adjested the x and y axis inside of the constant "Ship"
const ship = new Player(550, 800, 25, 0, 0);
ship.Appear();
// Ship.movement();





// ***************************************************************************
// ***************************************************************************
// Meteorites ****************************************************************



let all_Asteroids = [];
class Astroider {
    constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * 100 - canvas.height;
    this.radius = Math.random() * 40 + 60;
    this.speed = Math.random() * 5 + 1;
    this.distance;
    } 

    Appear() {
    ctx.beginPath();
    //       x    y 
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
    }

    update() { 
    
    
        this.y += this.speed;
    
    }


}

function newAsteroid(){
    if( gameFrame % 50 == 0){
        all_Asteroids.push(new Astroider());
    }
    for(let i = 0; i < all_Asteroids.length; i++ ) {
        all_Asteroids[i].update();
        all_Asteroids[i].Appear();
    }
}




    let updateAster = function() { 
        requestAnimationFrame(updateAster);
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ship.Appear();
        ship.update();
        gameFrame++;
        newAsteroid();


    }

    updateAster();


// for ( let numbers = 0; numbers < 10; numbers++) {
//      let random_x = Math.random() * canvas.width;
//      let random_y = Math.random() * canvas.width;

//      let ran_Asteroid = new Astroider(random_x, random_y, 50, 'black', asteroid_Count, 1);
//      all_Asteroids.push(ran_Asteroid);
//      createAsteroid(all_Asteroids[numbers]);
//      all_Asteroids++;
// }

 

// function move(){
//     Astro;
//     x=x+1;

// }




// FUNCTIONS FOR PLAYER             (PLAYER)



// FUNCTIONS FOR METEORITE         (METEORITE)



// functions for display screen       (GAME)



//Functions that puts the whole game together (EVERYPIECE)



