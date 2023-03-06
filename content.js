console.log('Extension working!');

function autoNextPage() {

	var selector = document.querySelector('.page-item.active ~ .page-item');
	if (selector) {
		var button = selector.querySelector('button');
		button.click();
	} else  {
		alert('ALL PAGE DONE');
	}
};


setInterval(() => {
	autoNextPage();
}, 3000);
