var shorePhotos = [];
var holidayPhotos = [];
var mountainPhotos = [];

function createPhoto(photosArray, fileName) {
	photosArray.push(fileName);
}

createPhoto(shorePhotos, "waves.jpg");
createPhoto(shorePhotos, "boardwalk.jpg");
createPhoto(shorePhotos, "candy.jpg");
createPhoto(shorePhotos, "fries.jpg");

createPhoto(mountainPhotos, "peaks.jpg");
createPhoto(mountainPhotos, "valleys.jpg");
createPhoto(mountainPhotos, "river.jpg");

createPhoto(holidayPhotos, "decorations.jpg");
createPhoto(holidayPhotos, "presents.jpg");

function createImgTag(gallery) {
	var galleryDiv = "<div class='gallery'>";
	// console.log("When I create galleryDiv, it looks like this.", galleryDiv);
	for (var i = 0; i < gallery.length; i++) {
		var img = '<img class="gallery-photo" src="' + gallery[i] + '">';
		galleryDiv += img;
		// console.log("After iteration " + i + ", galleryDiv looks like this:", galleryDiv);	
	}
	galleryDiv += "</div>";
	// console.log("After the loop, galleryDiv looks like this:", galleryDiv);

	document.getElementsByClassName('gallery-container')[0].innerHTML += galleryDiv;

}

createImgTag(holidayPhotos);



// function createImgTag(gallery) {
// 	console.log(gallery);
// 	for (var i = 0; i < gallery.length; i++) {
// 		console.log("The current index is " + i + ". The current photo is " + gallery[i] + ".");
// 	}

// }


// var names = ["Chris", "Ethan", "Kostas", "Suzann"];

// var instructor = "Chris";

// function whoTheInstructor() {
// 	for (var i = 0; i < names.length; i++) {
// 		if (names[i] === instructor) {
// 			console.log("The instructor is " + names[i]);
// 		} else {
// 			console.log(names[i] + " is not the instructor.");
// 		}
// 	}
// }


