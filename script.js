var halfButton = document.getElementById("half-button");
var inputNum = document.getElementById("half-input");


halfButton.addEventListener("click", halfNumber);
function halfNumber() {
  alert(inputNum.value / 2);
  console.log("Half of " + inputNum.value + " is " + inputNum.value / 2 + ".");
}



var fortuneButton = document.getElementById("fortune-button");
var imputText = document.getElementById("fortune-input");
var outputText = document.getElementById("fortune-output")

var myArray = ["Happiness is forever", "Love is dangerous", "You will get better really soon"];
var randomIndex = myArray[Math.floor( Math.random() * myArray.length)];

fortuneButton.addEventListener("click", fortune);

function fortune() {
  alert([randomIndex]);
}



var fortuneOutput = document.getElementById("fortune-output").value;

function restyle() {

  fortuneOutput.style.color = "red";
  fortuneOutput.style.font = "Courier";
  fortuneOutput.style.textShadow = "0px 0px 1px #ff0072";
}
