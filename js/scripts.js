//business logic
var countingArray = [];

function inputToArray(inputNumber) { //make input into array
  //count to number
  for (var i = 1; i <= inputNumber; i++) {
    countingArray.push(i);
  }
  convertToPingPong();
}

function convertToPingPong() { //convert array items to ping/pong/pingpong
  var index = 0;
  countingArray.forEach(function(number) {
    if (number % 3 === 0) {
      countingArray[index] = "ping";
      console.log("div by 3!");
    } else if (number % 5 === 0) {
      countingArray[index] = "pong";
      console.log("div by 5!");
    }
    index++;
    console.log(countingArray);
  });
}





//user interface logic
$(document).ready(function(){
  $("form#userInput").submit(function(){
    event.preventDefault();
    var value = $("#inputString").val();
    $("#result").show();
    $("#resultDisplay").append("<li>" + inputToArray(value) + "</li>");
  });
});
