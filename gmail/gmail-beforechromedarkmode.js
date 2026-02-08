function OnLoadDocument() {
  alert("The document has been loaded.");
  document.body.style.backgroundColor = "red";
}
window.addEventListener("load", OnLoadDocument, false);
