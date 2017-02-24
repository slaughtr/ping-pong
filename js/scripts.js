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
      countingArray[index] = "class='pingpong'>\u221EPINGPONG\u221E";
    } else if (number % 3 === 0) {
      countingArray[index] = "class='ping'>\u2022PING\u2022";
    } else if (number % 5 === 0) {
      countingArray[index] = "class='pong'>\u00B0PONG\u00B0";
    } else {
      countingArray[index] = "class='number'>"+number
    }
    index++;
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
    countingArray.forEach(function(output){
      $("#resultDisplay").append("<li " + output + "</li>");
    });
    $(".ping").slideDown(1000);
    $(".pong").show(2222);
    $(".pingpong").fadeIn(1212);
    $(".number").show(4444);
  });
});
