const canvas = document.getElementById('Game-Screen');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 900;
const score = 0;

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
let canvasPosition = canvas.getBoundingClientRect();
 const mouse = {
     x: canvas.width / 2,
     y: canvas.height / 2,
     click: false
 }

canvas.addEventListener('mousedown', function(e){
mouse.click = true;
mouse.x = e.x -= canvasPosition.left;
mouse.y = e.y -= canvasPosition.top;
});



class Player {
    constructor(x, y, radius, speed, forward) {
    this.x = x;
    this.y = y;
    this.radius = radius; 
    this.speed = speed;
    this.forward = forward = true;
    } 

    Appear() {
    if (mouse.click) {
    }
    ctx.beginPath(); 
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();
        }

    update() {
       const dx = this.x = mouse.x;
       const dy = this.y = mouse.y;
   }
};








const ship = new Player(600, 500, 30, 0, Math.PI * 2);    

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
    this.speed = 5 + 1;
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
        const dx = this.x - ship.x;
        const dy = this.y - ship.y;
        this.distance = Math.sqrt(dx*dx + dy*dy);
    
    }


}


function newAsteroid(){
    if( gameFrame % 50 == 0){
        all_Asteroids.push(new Astroider());
    }
    for(let i = 0; i < all_Asteroids.length; i++ ) {
        all_Asteroids[i].update();
        all_Asteroids[i].Appear();
    if(all_Asteroids[i].distance < all_Asteroids[i].radius + ship.radius){
        cancelAnimationFrame(endAnimation);
        clearRect(0, 0, canvas.width, canvas.height);
        canvas.getElementsById();
        }
    }
}

// let gameover = document.getElementById('gameover');






   let endAnimation 

   updateAster = function() { 
        endAnimation = requestAnimationFrame(updateAster);
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ship.Appear();
        ship.update();
        gameFrame++;
        newAsteroid();
        ctx.font = '50px georgia';
        ctx.fillText('Score: ' + score, 20, 50);


        
    }

    updateAster();



// function collision() {
//     for( let c = 0; c < all_Asteroids.length; c++)
//           let parts = all_Asteroids[c];
    
// }
// collision detection           


// Projectiles










