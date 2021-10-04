function showQS1() {
    var x = document.getElementById("q1");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("b1").innerHTML="Hide Answer";
    } else {
      x.style.display = "none";
      document.getElementById("b1").innerHTML="Show Answer";
    }      
}

function showQS2() {
    var x = document.getElementById("q2");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("b2").innerHTML="Hide Answer";
    } else {
      x.style.display = "none";
      document.getElementById("b2").innerHTML="Show Answer";
    }      
}

function showQS3() {
    var x = document.getElementById("q3");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("b3").innerHTML="Hide Answer";
    } else {
      x.style.display = "none";
      document.getElementById("b3").innerHTML="Show Answer";
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