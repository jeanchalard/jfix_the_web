function fixScroll() {
  if (document.body.classList.contains("didomi-popup-open"))
    document.body.setAttribute("style", "overflow : scroll !important");
}

let observer = new MutationObserver((mutations, observer) => {
  for (const m of mutations)
    if (m.type === "attributes" && m.attributeName === "class")
      fixScroll();
});
observer.observe(document.body, { attributes : true, childList : false, subtree : false });
fixScroll();
