// For now control display click with js, but move to angular
// show the main menu when you click the menu button
var moveOnMenuOpen = $(".mobileNavWrapper, .wrapper, .header, .footer")
$("#mobileMenuButton").on("click", function(e) {
    e.stopPropagation();
    moveOnMenuOpen.toggleClass("showNav");
});
