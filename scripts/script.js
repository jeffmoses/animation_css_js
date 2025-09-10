// Get the ball element by its ID
const ball = document.getElementById('ball');

// Function to start the ball's animation
function play(){
    ball.style.animationPlayState = 'running';
}

// Function to pause the ball's animation
function pause(){
    ball.style.animationPlayState = 'paused';
}
