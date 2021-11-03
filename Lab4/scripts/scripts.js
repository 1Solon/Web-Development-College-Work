$(function () {
  //Hides elements when the document opens
  $("#q1").hide();
  $("#q2").hide();
  $("#q3").hide();
});

function showQS(num) {
  $(function () {
    $("#q" + num).toggle();
  });
}

function swapStyleSheet() {
  var x = document.getElementById("styleSwitchDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("styleSwitchButton").innerHTML = "Creative";
    document
      .getElementById("pagestyle")
      .setAttribute("href", "styles/creative.css");
  } else {
    x.style.display = "none";
    document.getElementById("styleSwitchButton").innerHTML = "Professional";
    document
      .getElementById("pagestyle")
      .setAttribute("href", "styles/professional.css");
  }
}
