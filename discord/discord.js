// Fix the horrible bug where home/end behave differently than in all
// other text fields in any app or on the web since the start of time
// Courtesy of https://yal.cc/discord-home-end/
let attrMark = "yal-undo-home-end";
let query = `div[role="textbox"]:not([${attrMark}])`;
setInterval(() => {
	for (let tb of document.querySelectorAll(query)) {
		tb.setAttribute(attrMark, "");
		tb.addEventListener("keydown", (e) => {
			if (e.key == "Home" || e.key == "End") {
				e.stopImmediatePropagation();
			}
		});
	}
}, 300);
