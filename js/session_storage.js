function handleNameSave() {
  // TODO: add name to session storage
}

window.addEventListener('load', function() {
    // TODO: check if name is already present in session
    // session_storage and display it if it is
    btn = document.getElementById("saveButton");
    btn.addEventListener('click', handleNameSave);
});
