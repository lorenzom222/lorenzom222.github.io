// // Declare a variable for the sound
// let pianoSound;

// function preload() {
//   // Load the sound file in the preload function
//   pianoSound = loadSound('piano.mp3');
// }

class Ball {
  constructor(x, y, xspeed, yspeed, radius) {
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.radius = radius;
    this.gravity = 0.2;
    this.trail = [];
  }

  display() {
    stroke(255);
    fill(200);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    this.displayTrail();
  }

  displayTrail() {
    this.trail.push({x: this.x, y: this.y});
    if (this.trail.length > 100) {
      this.trail.shift();
    }
    for (let i = 0; i < this.trail.length; i++) {
      fill((i + frameCount) % 255, 255, 255);
      let pos = this.trail[i];
      ellipse(pos.x, pos.y, this.radius * 2, this.radius * 2);
    }
  }

  move() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  applyGravity() {
    this.yspeed = this.yspeed + this.gravity;
  }

  bounceOffEdges() {
    if (this.x > width - this.radius || this.x < this.radius) {
      this.xspeed = this.xspeed * -1;
    //   pianoSound.play(); // Play the sound when the ball bounces
    }
    if (this.y > height - this.radius || this.y < this.radius) {
      this.yspeed = this.yspeed * -0.9; // This will simulate energy loss when the ball hits the ground
      this.y = height - this.radius; // This line will prevent the ball from sticking to the bottom
    //   pianoSound.play(); // Play the sound when the ball bounces
    }
  }

  bounceOffMouse() {
    let d = dist(this.x, this.y, mouseX, mouseY);
    if (d < this.radius) {
      let angle = atan2(this.y - mouseY, this.x - mouseX);
      this.xspeed = 10 * cos(angle);
      this.yspeed = 10 * sin(angle);
    //   pianoSound.play(); // Play the sound when the ball bounces off the mouse
    }
  }

//   bounceOffBalls(balls) {
//     for (let i = 0; i < balls.length; i++) {
//       for (let j = i + 1; j < balls.length; j++) {
//         let other = balls[j];
//         let d = dist(this.x, this.y, other.x, other.y);
//         if (d < this.radius + other.radius) {
//           let angle = atan2(other.y - this.y, other.x - this.x);
//           let force = 10;
//           let dx = force * cos(angle);
//           let dy = force * sin(angle);
//           this.xspeed -= dx;
//           this.yspeed -= dy;
//           other.xspeed += dx;
//           other.yspeed += dy;
//           pianoSound.play(); // Play the sound when the balls bounce off each other
//         }
//       }
//     }
//   }
}

let radius = 20;

let balls = [
  new Ball(100, 100, 2, 0, radius),
  new Ball(200, 200, -2, 0, radius),
  new Ball(300, 300, 2, 0, radius),
  new Ball(400, 400, -2, 0, radius),
  new Ball(500, 500, 2, 0, radius)
];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('asmr-container');
  colorMode(HSB);
}

function draw() {
  background(0);
  for (let ball of balls) {
    ball.display();
    ball.move();
    ball.applyGravity();
    ball.bounceOffEdges();
    ball.bounceOffMouse();
    // ball.bounceOffBalls(balls);
  }
  displayMouse();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function displayMouse() {
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, radius * 2, radius * 2);
}
