function clockStart() {
  timer = setInterval(clockUpdate, 1000);
  clockUpdate();
}

function clockUpdate() {
  var date = new Date();
  document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}

clockStart();
