// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function(){
    $("#computerChoice").empty();
    $("#userChoice").empty();
    var randomNumber = Math.random();
    console.log(randomNumber);
    var uC= $("#input").val();
    var cC;
    
    //Computer's Random Pick
    if(randomNumber > 0.66) {
        $("#computerChoice").html("Paper!");
         cC= "PAPER";
    }
    
    else if(randomNumber > 0.33) {
        $("#computerChoice").html("Rock!"); 
         cC="ROCK";
    }
    
     else {
        $("#computerChoice").html("Scissors!");
         cC="SCISSORS";
     }
     
     //Uppercase
     uC = uC.toUpperCase();
     console.log(uC);
     if (uC === "ROCK") {
         $("#userChoice").html("Rock!"); 
     }
     else if (uC === "PAPER") {
         $("#userChoice").html("Paper!"); 
     }
     else if (uC === "SCISSORS") {
         $("#userChoice").html("Scissors!"); 
     }
     
     //Winner
    if(cC === "PAPER" && uC === "SCISSORS") {
        $("#result").html("You Won");
        $("#end").attr("src","http://m.memegen.com/icj089.jpg");
    }
    else if(cC === "SCISSORS" && uC === "ROCK") {
        $("#result").html("You Won");
        $("#end").attr("src","http://m.memegen.com/icj089.jpg");
    }
    else if(cC === "ROCK" && uC === "PAPER") {
        $("#result").html("You Won");
        $("#end").attr("src","http://m.memegen.com/icj089.jpg");
    }
    else if(cC === uC) {
        $("#result").html("It's a tie");
        $("#end").attr("src","https://media.makeameme.org/created/its-a-tie-lu8m3b.jpg");
    }
    else {
        $("#result").html("You Lost");
        $("#end").attr("src","https://media.makeameme.org/created/you-didnt-win-9w58id.jpg");
    }
    

});


