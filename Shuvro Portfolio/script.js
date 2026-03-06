// Select the toggle button
const darkToggle = document.querySelector('.dark-toggle');

// Initialize icon based on current theme
if(document.body.classList.contains('dark')){
    darkToggle.textContent = '☀️';
} else {
    darkToggle.textContent = '🌙';
}

// Toggle dark mode on click
darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
    // Update icon
    if(document.body.classList.contains('dark')){
        darkToggle.textContent = '☀️'; // Sun icon in dark mode
    } else {
        darkToggle.textContent = '🌙'; // Moon icon in light mode
    }
});


// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('show'));

// Particle Background
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particlesArray;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor() {
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.size = Math.random()*2+1;
    this.speedX = Math.random()*1-0.5;
    this.speedY = Math.random()*1-0.5;
  }
  update() { this.x += this.speedX; this.y += this.speedY; if(this.x>canvas.width)this.x=0; if(this.x<0)this.x=canvas.width; if(this.y>canvas.height)this.y=0; if(this.y<0)this.y=canvas.height; }
  draw() { ctx.fillStyle = 'rgba(0,255,255,0.7)'; ctx.beginPath(); ctx.arc(this.x,this.y,this.size,0,Math.PI*2); ctx.fill(); }
}

function init() { particlesArray=[]; for(let i=0;i<100;i++){ particlesArray.push(new Particle()); } }
function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particlesArray.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animate);
}
window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; init(); });
init(); animate();
