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
    console.log(countingArray);
  });
  convertArrayToList();
}

function convertArrayToList(input) {
  // $("ul#resultDisplay").html("<li>Here we go</li>")
  countingArray.forEach(function(output){
    $("#result").append("<div id='output'>" + output + "</div>");
  });
}





//user interface logic
$(document).ready(function(){
  $("form#userInput").submit(function(){

    // var displayUL = document.getElementById("resultDisplay");
    // displayUL.innerHTML = '';

  // $("ul#resultDisplay").html("<li>Here we go</li>");

    event.preventDefault();
    var value = $("#inputString").val();
    inputToArray(value);
  });
});
