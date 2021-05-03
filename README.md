#                               OrbitalGrounds 

OrbitalGrounds is game taking place in space. The player will be a spaceship with a mission to shoot or dodge meteorites successfully until the set time ends. Once the time ends and the players didn't collide with any meteorites, the player wins. If the player collides with the meteorites HE/SHE does not win the game.

#                                HOW TO PLAY

        To play this game. Press right on the arrow pad to move left and press right on the arrow pad to move right in order to dodge the meteors coming you way. If you feel a bit lazy dodging the meteors and want to shoot your way out of things, press z on your keypad to shoot the meteors in front of you.

## Start Up Screen:
Images of the start up screen go here 

# HOW TO INSTALL

## Example
1. *`Fork`* and *`Clone`* this respository to your local machine
2. Open `index.html` in your browser to play or 
3. Open the directory in your text editor of choice to view or edit the code

Other install instructions will go here


# HOW IT WORKS
How the game works will go here
Code snippets go here

## Recources Used
https://www.youtube.com/channel/UC9Yp2yz6-pwhQuPlIDV_mjA



# PROCESS WORK
I first started off by getting my boiler plate ready and inside the body I put 2 divs centering them both. One for the backgrounds of the game and the other inside of the div which is the actual game display screen.

After all of this planning I decided to go with canvas so i deleted the div inside the container div and replaced that with a canvas tag. I then activated canvas API by declaring it and giving it a getContext function which. I also get the element canvas by id so it can be manipulated. I first created my player by creating a class with a contructor function and made my player a circular shape which required the PI method times 2 to create a circle and required the x and y coordinates aswell as the radius as shown.

```javascript
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
```
I included the appear function inside of the class in order for the shape to be created and then I added the update function for it to update and recreate the shape each time it moves because in order for shapes to move in canvas and in gaming in general, the shape must be erased and redrawn each time the shape is moved which is why inside of my animate function I used request animation which is required if you want you shape to move and I also included the clearRect method. This laid the foundation which allowed me to reuse this code for my asteroid. My asteroid is a bit different in terms of code layout because I wanted to have multiple asteroid coming from the top of the page. I still made a class function but when it came to the y coordinates it did math.random * 100 - canvas.height. This made the asteroids appear and come from the top of the page and basically fall down. to make the endless astroids appear, I made an empty array of astroids.
```javascript 
let all_Asteroids = [];
```
I then did the .push method pushing new astroids into the array inside of a function if the gameframe moves at 50 frames per second like so.
```javascript
function newAsteroid(){
    if( gameFrame % 50 == 0){
        all_Asteroids.push(new Astroider());
    }
 ```
"Astroider" is a class with a constructor function and thats our astroids. what brings everything together when it comes to putting everything on the screen. I developed a function as follows
```javascript let endAnimation 

   updateAster = function() { 
        endAnimation = requestAnimationFrame(updateAster);
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ship.Appear1();
        ship.update();
        gameFrame++;
        newAsteroid();
        ctx.fillStyle = 'white';
        ctx.font = '50px georgia';
        ctx.fillText('Score: ' + score, 20, 50);


        
    }

    updateAster();
```
This made sure that player and asteroids repeated everything they moved. the end animation variable is for collision detection which I put under my for loop in the newAsteroid function. RequestanimationFrame is required if one wants to make everything move on the screen so I made sure I emplemented that and it also played a part in my collisions detection.

## Initial Wireframes:
Initial Wireframes go here ( images )
<img src="OrbitalGrounds-logo.png">

## Future Condsiderations:

want to add projectiles to shoot the asteroids and also want to add actual images of the asteroids coming down as well as a space ship picture.

