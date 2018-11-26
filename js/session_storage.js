function handleNameSave() {
  // TODO: add name to session storage
  var nameEle = document.getElementById('name');
  var name = nameEle.value;

  sessionStorage.setItem('name', name);
  displayGreeting(name);
}

function displayGreeting(name) {
  var greetingEle = document.getElementById('greeting');
  greetingEle.innerHTML = "Hello, " + name + ". How's the weather in " + sessionStorage.getItem('city') + "?";
}

window.addEventListener('load', function() {
    // TODO: check if name is already present in session
    // session_storage and display it if it is
    var existingName = sessionStorage.getItem('name');
    if (existingName) {
      displayGreeting(existingName);
    } else {
      btn = document.getElementById("saveButton");
      btn.addEventListener('click', handleNameSave);
    }

    var resetButton = document.getElementById("reset");
    resetButton.addEventListener('click', clearName);
});

function clearName() {
  sessionStorage.removeItem('name');
  location.reload();
}
