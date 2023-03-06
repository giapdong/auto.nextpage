console.log('Extension working!');

async function autoNextPage() {

	var { enable } = await chrome.storage.local.get('enable');
	if (!enable) {
		return;
	}

	console.log('Trigger next page');

	var selector = document.querySelector('.page-item.active ~ .page-item');
	if (selector) {
		var button = selector.querySelector('button');
		button.click();
	} else  {
		// alert('ALL PAGE DONE');
	}
};


async function wait(ms) {

	return new Promise(function(resolve, reject) {
		setTimeout(() => {
			resolve();
		}, ms);
	});
};


async function main() {

	while (true) {
		await wait(3000);
		await autoNextPage();
	};
};

main();
