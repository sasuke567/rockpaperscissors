// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var randomNumber = 0;
var userChoice = "";
var computerChoice = "";

// DOCUMENT READY FUNCTION BELOW
$("search").val()

$("button").click(function() { 
    userChoice = $("#input").val()
    $("#userChoice").text(userChoice);
    
    randomNumber = Math.random()
    if(randomNumber >.66){
        computerChoice = "rock";
    
    } else if(randomNumber>.33){
        computerChoice = "scissors";
        
    } else {
        computerChoice = "paper";
}
    computerChoice
});

 
