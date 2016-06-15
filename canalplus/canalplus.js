// Stop clicks on the background from opening fucking ads
document.body.addEventListener("click", function(ev) {
    ev.stopPropagation();
});
