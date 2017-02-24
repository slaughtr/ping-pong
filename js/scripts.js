//business logic
var countingArray = [];

function inputToArray(inputNumber) { //make input into array
  //count to number
  for (var i = 1; i <= inputNumber; i++) {
    countingArray.push(i);
  }
  return convertToPingPong();
}

function convertToPingPong() { //convert array items to ping/pong/pingpong
  var index = 0;
  countingArray.forEach(function(number) {
    if (number % 15 === 0) {
      countingArray[index] = "\u221EPINGPONG\u221E";
    } else if (number % 3 === 0) {
      countingArray[index] = "\u2022PING\u2022";
    } else if (number % 5 === 0) {
      countingArray[index] = "\u00B0PONG\u00B0";
    }
    index++;
  });
  convertArrayToList();
}

function convertArrayToList(input) { //this is the bit that outputs the items onto the page
  countingArray.forEach(function(output){
    $("#resultDisplay").append("<li class='output'>" + output + "</li>");
  });
}

//user interface logic
$(document).ready(function(){

  $("form#resetPage").submit(function(){
    //I can't get it to reset my list any other way. all .remove, .empty, etc functions are non-operational. So, let's not prevent that default, I guess.
  });

  $("form#userInput").submit(function(){
    event.preventDefault();
    var value = $("#inputString").val();


    inputToArray(value);
  });
});
