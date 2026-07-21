(() => {
	const root = document.documentElement;
	const carrier = document.getElementById("config-carrier");
	const baseHue = Number.parseInt(carrier?.dataset.hue || "120", 10);
	const cycleMs = 60 * 1000;

	function getTimeHue() {
		const progress = (Date.now() % cycleMs) / cycleMs;
		return Math.round((baseHue + progress * 360) % 360);
	}

	function applyTimeHue() {
		root.style.setProperty("--hue", String(getTimeHue()));
	}

	function applySoon() {
		window.requestAnimationFrame(applyTimeHue);
	}

	applyTimeHue();
	window.setInterval(applyTimeHue, 6000);
	document.addEventListener("swup:contentReplaced", applyTimeHue);
	document.addEventListener("click", applySoon, true);
	window.addEventListener("wallpaper-mode-change", applySoon);
	window.addEventListener("layoutChange", applySoon);
	window.addEventListener("storage", applySoon);
})();
