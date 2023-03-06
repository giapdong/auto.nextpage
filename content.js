console.log('Auto Next extension working!');

function next() {

	console.log('Trigger next page');

	var selector = document.querySelector('.page-item.active ~ .page-item');
	if (selector) {
		var button = selector.querySelector('button');
		button.click();
	} else  {
		// alert('ALL PAGE DONE');
	}
};

async function autoNextPage() {

	var { enable } = await chrome.storage.local.get('enable');
	if (!enable) {
		return;
	}

	// next();
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

// Register manual next page by right-arrow
document.addEventListener("keyup", (event) => {
	if (event.keyCode == 39) {
		next();
	}
});
