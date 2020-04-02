// Business Interface
function isVowel(letter) {  //Defined the function "isVowel" with the paramater of "letter".
  var vowelsArray = ["a", "e", "i" , "o", "u"]; //Defined var "vowelsArray" as an array with every vowel

  for (var i = 0; i < vowelsArray.length; i++) { //for loop that defines i as 0 (first character) which will run the length of the array (5), and will search each consecutive array element.
    if (vowelsArray[i] === letter) { //this will make the array defined above "look" at the first letter to see if it is a vowel if it is not it will continue till we run the .length of the array.
      return true; //
    }
  }
  return false; //if it is not false will return
}

function igPayatinLay(userInput) {
  var numberInput = parseInt(userInput); // defined a variable to change inputted strings to #s
    if (numberInput) {
      return"'"+ userInput+ "'" + " is a number, my dude. How about some words next time?"; //if user input a # they will recieve this "return" (if false move to next branch)
    } else if (userInput === "i" || userInput === "a"){ //if userInput = single letter words "I" or "A" will return userInput with with "ay" added to end. (if false move to next branch)
      return userInput + "ay";
    } else if (isVowel(userInput.charAt(0)) ) { //will search the "first letter" (0th) of user input for a vowel with our predefined function "isVowel". Will return userInput with "way" added if true (if false move to next branch)
      return userInput + "way";
    } else if (userInput.slice(0, 2) === "qu") { //will look at first 2 letter of userInput to compare to provided string. If true will concat from 2nd letter to end, to the back of first to second letter and add "ay". (if false move to next branch)
      return  userInput.slice(2) + userInput.slice(0,2) + "ay";
    } else {
     for (var i = 0; i < userInput.length; i++) { 
      if ( isVowel(userInput.charAt(i))) { //If these have all come back false we have a consonant (oppositve of vowel... kinda) this For Loop will look through the user input starting at the first letter (0th) and will "look" at each consecutive letter trying to find a vowel. When it does find a vowel it will run  this return.
        return userInput.slice(i)       //sliced from the vowel to the end (slice is placeholder does not change original string) concats with down below.
         + userInput.slice(0,i) //from beginning of word to the vowel but not including the vowel
         + "ay";    // then adds "AY"
      }
    }
  }
}

// UI
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#userInput").val();
    $('#output').text(igPayatinLay(userInput)); //this will display the result of our  User input after it has run through out igPayatinLay function
  });
});