function showQS(questionNo) {
    var x = document.getElementById("q"+questionNo);
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("b"+questionNo).innerHTML="Hide Answer";
    } else {
      x.style.display = "none";
      document.getElementById("b"+questionNo).innerHTML="Show Answer";
    }      
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