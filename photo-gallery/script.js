var photos = document.getElementsByClassName("photo");
var modal = document.getElementsByClassName("modal")[0];
var modalImg = document.getElementsByClassName("modal-image")[0];
var overlay = document.getElementsByClassName("overlay")[0];
var modalContent = document.getElementsByClassName("modal-content")[0];

for (var i = 0; i < photos.length; i++) {
	photos[i].addEventListener("click", showModal);
}

function showModal(event) {
	modal.style.display = "block";
	overlay.style.display = "block";
	var photoClass = event.target.classList[1];
	modalImg.classList.add(photoClass);
	// setTimeout(function() {
	modalContent.classList.add("add-opacity");
	// }, 0);
}