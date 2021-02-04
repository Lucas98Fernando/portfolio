$(document).ready(function () {
	var navicon = document.getElementById("nav-icon")
	$('#nav-icon').click(function () {
		$(this).toggleClass('open');

		// if (navicon.style.position === "fixed") {
		// 	navicon.style.position = "relative";
		// }
		// else {
		// 	navicon.style.position = "fixed";
		// }
	});
});

function mobileToggle() {
	var x = document.getElementById("navbar-side");
	if (x.style.display === "flex") {
		x.style.display = "none";
	} else {
		x.style.display = "flex";
	}
}