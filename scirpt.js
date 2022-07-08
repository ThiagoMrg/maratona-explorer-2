function darkMode () {
  document.body.classList.add('dark')
  document.getElementById('darkmode').style.visibility = "hidden";
  document.getElementById('cleanMode').style.visibility = "visible";
}

function cleanMode () {
  document.body.classList.remove('dark')
  document.getElementById('darkmode').style.visibility = "visible";
  document.getElementById('cleanMode').style.visibility = "hidden";
}