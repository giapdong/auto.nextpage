/**
 * @desc Convert url image to it's Base64
 */
function urlImageToBase64(url, callback) {

	var img = new Image;
	var canvas = document.createElement("canvas")
	var ctx = canvas.getContext("2d")
	// var src = "https://myfoto-io.s3.ap-southeast-1.amazonaws.com/foto/10-dalat-ultra-trail-2023/thumbs/40097-khuvucvedich-11730-thumbs.jpg"; // insert image url here
	var src = url;

	img.crossOrigin = "Anonymous";

	img.onload = function() {
		canvas.width = img.width;
		canvas.height = img.height;
		ctx.drawImage( img, 0, 0 );

		var base64 = canvas.toDataURL("image/png");
		callback(base64)
	}

	img.src = src;

	// make sure the load event fires for cached images too
	if ( img.complete || img.complete === undefined ) {
		img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
		img.src = src;
	}
};