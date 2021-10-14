function showQS(message) {

  //Checks if the answer element exists, if so, delete it
  let check = document.getElementById("element")
  if (check != null){
    check.parentElement.removeChild(check);
  }

  let element = document.createElement("div");
  element.setAttribute("id", "element");
  element.innerHTML = message + "<br><br>";

  let button = document.createElement("button");
  button.innerHTML = "Close Question"
  button.onclick = function () {
    let check = document.getElementById("element");
    check.parentElement.removeChild(check);
  }
  element.appendChild(button);
  
  document.body.insertBefore(element, document.getElementById("answers"));
}

function swapStyleSheet(){
    let x = document.getElementById("styleSwitchDiv");
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