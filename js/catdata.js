var catMap = [
	{id:1,"name":"Beach Cat","src":"Beach Cat.jpg","clicks":0},
	{id:2,"name":"Burrito Cat","src":"Burrito Cat.jpeg","clicks":0},
	{id:3,"name":"Professor Cat","src":"Professor Cat.jpg","clicks":0}
	];

for (var i=0; i < catMap.length;i++){
	$("#catList").append(
		"<li>"+"<a data-catid="+
		catMap[i].id+">"+
		catMap[i].name+
		"</a>"+"</li>")
}

$("#catList > li > a").click(function() {
	var selectedCatId = $(this).data("catid");
	$("#clickCountDisplay").show();
	for (var i = 0; i<catMap.length;i++){
		var cat = catMap[i];
		if (cat.id == selectedCatId ) {
			cat.clicks += 1;
			var catImgSrc = cat.src;
			$("img#selectedCat").attr("src","img/"+catImgSrc);
			$("#clkPicName").html(cat.name);
			$("#clkCount").html(cat.clicks);
		}
	}
});