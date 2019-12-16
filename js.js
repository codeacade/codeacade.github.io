// Stop browser scrolling
document.body.addEventListener("touchmove", function(event) {
  event.preventDefault();
});

// Define image to use
var imgArray = ['http://image-url/image1.jpg', 'http://image-url/image2.jpg', 'http://image-url/image3.jpg', 'http://image-url/image4.jpg', 'http://image-url/image5.jpg', ]

// Variables for which card to pick randomly
var num1, num2; 

// Create object for Player 1
var player1 = {score: 0, id: 1}

// Create object for Player2
var player1 = {score: 0, id: 2}

// Create snapMade variable
var snapMade = "NO";

// Use h1 to play
$("h1").click(function() {
  // Run Play function
  play();
  // Use jQuery "hide" function to hide h1 when it has been pressed
  $("h1").hide();
  
  // Use jQuery "show" function to show h1 when play is started
  $("h1").show();
})
// Create variable for canvas 1 and 2
var canvas = document.getElementById("1");
var canvas = document.getElementById("2");

// User clicks Canvas1
function playTouch1() {
  if(snapMade == "NO") sapCheck(player1);
}
// User clicks Canvas2
function playTouch2() {
  if(snapMade == "NO") sapCheck(player2);
}
 
// Create play function
function play() {

  // Check if there is a winner
  if(isTheWinner(player1) || isTheWiner(player2)) {return}
  else {
    // Reset snapMode
    snapMode = "NO";

    // Randomly change numbeer
    num1 = Math.floor(Math.random() * imgArray.length );
    num2 = Math.floor(Math.random() * imgArray.length );
    
  }
}


console.log("SCRIPT END");
