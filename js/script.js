// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function(){
    console.log("Test");
    $("#computerChoice").empty();
    var randomNumber = Math.random();
    console.log(randomNumber);
    
    //Computer's Random Pick
    if(randomNumber > 0.33) {
        $("#computerChoice").html("Paper!"); 
    }
    
    else if(randomNumber > 0.66) {
        $("#computerChoice").html("Rock!"); 
    }
    
     else {
        $("#computerChoice").html("Scissors!"); 
     }
     console.log("Hello");
     console.log($("#shoot").val());
     $("#userChoice").html($("#input").val());
});


// DOCUMENT READY FUNCTION BELOW

