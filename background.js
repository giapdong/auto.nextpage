// background.js

let color = '#3aa757';
let _enable = true;

// Run once when this extension installed
chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.local.set({ enable: true });

	console.log('Default background color set to %cgreen', `color: ${color}`);
});

// Get current value of enable
chrome.storage.local.get("enable", function({ enable }) {
	_enable = enable;
});

// Update enable state
chrome.storage.onChanged.addListener(function (changes, areaName) {
	_enable = changes.enable.newValue;
});

// Register event for content.js get data from background
// Reference: https://developer.chrome.com/docs/extensions/reference/runtime/
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message === 'get-enable') {
		sendResponse({ enable: _enable });
	}
});