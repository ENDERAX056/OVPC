$(document).ready(function() {

	$(".navShowHide").on("click",function() {
 	console.log("CLICKED!!")

 	var main = $("#mainSectionContainer");
 	var nav = $("#sideNavContainer");

 	if(main.hasClass("leftPadding")) {
 		nav.hide();
 	} else {
 		nav.show();
 	}

 	main.toggleClass("leftPadding");

	});

});