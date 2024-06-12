function cleanup() {
  const wrapper = document.getElementsByClassName("wrapper")[0];
  const widget = document.getElementById("poool-widget");
  if (wrapper == null || widget == null) {
    window.setTimeout(cleanup, 100);
    return;
  }
  wrapper.removeAttribute("style");
  widget.remove();
}

cleanup();
