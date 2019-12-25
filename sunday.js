// Stop browser scrolling
document.body.addEventListener("touchmove", function(event) {
  event.preventDefault();
});

// Define image to use
var imgArray = ['./fru1.jpg', './fru2.jpg', './fru3.jpg', './fru4.jpg', './fru5.jpg', ]

// Variables for which card to pick randomly
var num1, num2; 

// Create object for Player 1
var player1 = {score: 0, id: 1}

// Create object for Player2
var player2 = {score: 0, id: 2}

// Create snapMade variable
var snapMade = "NO";

// Use h1 to play
$("h1").click(function() {
  // ------------- Run play() function --------------
  play();
  // Use jQuery "hide" function to hide h1 when it has been pressed
  $("h1").hide();
  
  // Use jQuery "show" function to show ps's when play is started
  $("p").show();
})
// Create variable for canvas 1 and 2
var canvas1 = document.getElementById("1");
var canvas2 = document.getElementById("2");

// Create event listener for canvas 1 and 2 
// canvas1.addEventListener("touchstart", playTouch1);
// canvas2.addEventListener("touchstart", playTouch2);
$(canvas1).click(playTouch1);
$(canvas2).click(playTouch2);

// User clicks Canvas1
function playTouch1() {
  if(snapMade == "NO") snapCheck(player1);
}
// User clicks Canvas2
function playTouch2() {
  if(snapMade == "NO") snapCheck(player2);
}
 
// ----------- Create play() function --------------
function play() {

  // Check if there is a winner
  if(isTheWinner(player1) || isTheWinner(player2)) {return}
  else {
    // Reset snapMade
    snapMade = "NO";

    // Randomly change number
    num1 = Math.floor(Math.random() * imgArray.length );
    num2 = Math.floor(Math.random() * imgArray.length );
    
    // Test random numbers
    // console.log("First random number is " +num1);
    // console.log("Second random number is " +num2);

    // Create image variables
    var img1 = imgArray[ num1 ];
    var img2 = imgArray[ num2 ];

    // Create css value for background image
    var url1 = "url(" + img1 + ")";
    var url2 = "url(" + img2 + ")";

    // Use jQuerry to change css background image of canvas 1 and 2
    $("canvas#1").css("background-image", url1);
    $("canvas#2").css("background-image", url2);

    // Repeat loop every 2000 milliseconds
    setTimeout(play, 2000);

    // Reset player p backgrounds
    $('p').css("background", "yellow");
    
  } // isTheWinner logic ends here
} // play function ends here

// Find out if there was a snap
function snapCheck(player) {
  if (num1 == num2) {
    // Images match! Snap!
    // alert ("SNAP!");
    // Player gains 1 point
    player.score++;
    // update player score
    $("span#score" + player.id).html(player.score);
    // Highlight player won!
    $("p#player" + player.id).css("background", "LightGreen");
    //Snap Made
    snapMade = "YES";
  } else {
    // Images do not match!
    // alert("NO SNAP!");
    // Player loses 1 point
    player.score--;
    // Update player score

    $("span#score"+player.id).html(player.score);
    // Highlight player lost a point
    $("p#player" + player.id).css("background", "DeepPink");
  }
}

// Has s player won?
function isTheWinner(player) {
  // if player reaches a score of 5 points they win!!
  if(player.score == 2) {
    $("p").hide();
    $("h1").html("PLAYER " + player.id + " WINS!");
    $("h1").show();
    // Tell play() function there is a winner!
    return true;
  }
  // Tell play() function there is no winner
  return false;
}
console.log("SCRIPT END");
