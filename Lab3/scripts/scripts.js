function showQS(tag, message) {

  var answer = document.createElement("div");

  if (answerChild == null){
    answer.getElementById("answers").removeChild(answer);
    var answerChild = document.createTextNode(message);
    answer.appendChild(answerChild);

  } else {
    var answerChild = document.createTextNode(message);
    answer.appendChild(answerChild);
  }
  document.getElementById("answers").appendChild(answer);
}

function swapStyleSheet(){
    var x = document.getElementById("styleSwitchDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("styleSwitchButton").innerHTML="Creative";
      document.getElementById("pagestyle").setAttribute("href", "styles/creative.css")
    } else {
      x.style.display = "none";
      document.getElementById("styleSwitchButton").innerHTML="Professional";
      document.getElementById("pagestyle").setAttribute("href", "styles/professional.css")
    }    
}