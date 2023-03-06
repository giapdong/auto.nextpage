// Initialize button with user's preferred color
let switcher = document.getElementById("switcher");

const ENABLE_COLOR = '#63b814';
const DISABLE_COLOR = '#c34343';

let switcherListener = function() {
	chrome.storage.local.get("enable", function({ enable }) {

		if (enable) {
			chrome.storage.local.set({ enable: false }, function() {
				switcher.style.backgroundColor = DISABLE_COLOR;
			});
		} else {
			chrome.storage.local.set({ enable: true }, function() {
				switcher.style.backgroundColor = ENABLE_COLOR;
			});
		}
	});
};


switcher.addEventListener('click', switcherListener);


chrome.storage.local.get("enable", function({ enable }) {

	if (enable) {
		switcher.style.backgroundColor = ENABLE_COLOR;
	} else {
		switcher.style.backgroundColor = DISABLE_COLOR;
	}
});


