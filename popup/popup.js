// Initialize button with user's preferred color
let switcher = document.getElementById("switcher");

let switcherListener = function() {
	chrome.storage.local.get("enable", function({ enable }) {

		if (enable) {
			chrome.storage.local.set({ enable: false }, function() {
				switcher.style.backgroundColor = '#c34343';
			});
		} else {
			chrome.storage.local.set({ enable: true }, function() {
				switcher.style.backgroundColor = '#63b814';
			});
		}
	});
};

switcher.addEventListener('click', switcherListener);

chrome.storage.local.get("enable", function({ enable }) {

	if (enable) {
		switcher.style.backgroundColor = '#63b814';
	} else {
		switcher.style.backgroundColor = '#c34343';
	}
});


