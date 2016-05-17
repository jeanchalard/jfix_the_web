 function OnLoadDocument () {
     alert ("The document has been loaded.");
     document.body.style.backgroundColor = "red";
 }
document.addEventListener("load", OnLoadDocument, false);
