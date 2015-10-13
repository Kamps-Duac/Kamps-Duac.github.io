
// Model
var data = {
	currentCat: null,
	cats: [{
		id: 1,
		name: "Beach Cat",
		catImgSrc: "img/Beach Cat.jpg",
		clicks: 0
	}, {
		id: 2,
		name: "Burrito Cat",
		catImgSrc: "img/Burrito Cat.jpeg",
		clicks: 0
	}, {
		id: 3,
		name: "Professor Cat",
		catImgSrc: "img/Professor Cat.jpg",
		clicks: 0
	}]
};

// Controller
var controller = {
	init: function() {
		catListView.init();
		catImgView.init();
	},

	getCurrentCat: function() {
		return data.currentCat;
	},

	getCats: function() {
		return data.cats;
	},

	setCurrentCat: function(cat){
		data.currentCat = cat;
	},

	addOneClick: function() {
		data.currentCat.clicks++;
		catImgView.render();
	}
};

// View
var catImgView = {
	init: function() {
		this.clickCounterElem = $("#clkCount");
		this.catListElem = $("#catList");
		this.catImageElem = $("img#selectedCat");
		this.catNameElem = $("clkPicName");

		// Add click event for Cat Picture
		this.catImageElem.click(function() {
			controller.addOneClick();
		});

		// Render the view on load
		this.render();
	},

	render: function() {
		// Update the DOM elements with Current Cat data
		var currentCat = controller.getCurrentCat();
		if (currentCat !== null){
			this.clickCounterElem.text(currentCat.clicks);
			this.catNameElem.text(currentCat.name);
			this.catImageElem.attr("src",currentCat.catImgSrc);
			$("#clickCountDisplay").show();
		}
		
	}
};

var catListView = {
	init: function() {
		this.catListElem = $("#catList");
		this.currentCat = data.cats[1];
		this.render();
	},

	render: function() {
		var cat, elem, i;

		var cats = controller.getCats();

		this.catListElem.innerHTML = '';

		for (i = 0; i < cats.length; i++) {
			cat = cats[i];

			elem = document.createElement('li');
			$(elem).addClass("btn btn-priamary btn-xs active");
			elem.textContent = cat.name;

			elem.addEventListener('click', (function(catCopy) {
				return function() {
					controller.setCurrentCat(catCopy);
					catImgView.render();
				};
			})(cat));

			this.catListElem.append(elem);
		}
	}
};

controller.init();

// for (var i = 0; i < cats.length; i++) {
// 	$("#catList").append(
// 		"<li>" + '<a class="btn btn-primary btn-xs active"' +
// 		'role="button" data-catid=' +
// 		cats[i].id + ">" +
// 		cats[i].name +
// 		"</a>" + "</li>")
// }



// // Controller
// $("#catList > li > a").click(function() {
// 	var selectedCatId = $(this).data("catid");
// 	$("#clickCountDisplay").show();
// 	for (var i = 0; i < cats.length; i++) {
// 		var cat = cats[i];
// 		if (cat.id == selectedCatId) {
// 			cat.clicks += 1;
// 			var catImgSrc = cat.src;
// 			$("img#selectedCat").attr("src", "img/" + catImgSrc);
// 			$("img#selectedCat").data("catid", cat.id);
// 			$("#clkPicName").html(cat.name);
// 			$("#clkCount").html(cat.clicks);
// 		}
// 	}
// })

// // Can refector some here
// $("img#selectedCat").click(function() {
// 	var catid = $(this).data("catid");
// 	for (var i = 0; i < cats.length; i++) {
// 		var cat = cats[i];
// 		if (cat.id == catid) {
// 			cat.clicks += 1;
// 			view.clickCounterElem.html(cat.clicks);
// 		}
// 	}
// })