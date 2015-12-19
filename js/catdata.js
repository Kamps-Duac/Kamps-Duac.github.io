
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
		controller.setCurrentCat(data.cats[0]);

		catImgView.init();
		catListView.init();
		catAdminView.init();
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
	},

	saveAdminForm: function(name, url, clicks) {
		data.currentCat.name = name;
		data.currentCat.catImgSrc = url;
		data.currentCat.clicks = clicks;
	},

	refreshViews: function() {
		catImgView.render();
		catAdminView.render();
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
			controller.refreshViews();
		});
		this.catImageElem.mousedown(function() {
			$(this).css("opacity", 0.5);
		});
		this.catImageElem.mouseup(function() {
			$(this).css("opacity", 1);
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
			$("#catList>li").removeClass("active");
			$("#clkPicName").text(currentCat.name);
		}
		
	}
};

var catListView = {
	init: function() {
		this.catListElem = $("#catList");
		//this.currentCat = data.cats[1];
		this.render();
	},

	render: function() {
		var cat, btnElem, i;

		var cats = controller.getCats();

		function generateCatClickHandler(catCopy) {
			return function() {
				controller.setCurrentCat(catCopy);
				catImgView.render();
				catListView.catListElem
					.children().removeClass("btn-success");
				$(this).addClass("btn-success");

				controller.refreshViews();
			};
		}

		for (i = 0; i < cats.length; i++) {
			cat = cats[i];

			// Here create button element for .btn-group
			btnElem = document.createElement('button');
			$(btnElem).addClass("btn btn-primary btn-sm");
			$(btnElem).attr('type', 'button');
			btnElem.textContent = cat.name;

			btnElem.addEventListener('click', (generateCatClickHandler(cat)));
			this.catListElem.append(btnElem);
		}
	}
};

var catAdminView = {
	init: function() {
		this.catAdminBtn = $("#catAdminBtn");
		this.catNameFld = $("#catNameFld");
		this.catImgUrlFld = $("#catImgUrlFld");
		this.catClickCounterFld = $("#catClickCounterFld");
		this.cancelAdmin = $("#cancelAdminForm");
		this.saveAdmin = $("#saveAdminForm");

		this.catAdminBtn.click(function() {
			$("#adminForm").toggle();
		});
		this.cancelAdmin.click(function() {
			$("#adminForm").toggle();
			catAdminView.render();
		});
		this.saveAdmin.click(function() {
			$("#adminForm").toggle();
			controller.saveAdminForm(
				catAdminView.catNameFld.val(),
				catAdminView.catImgUrlFld.val(),
				catAdminView.catClickCounterFld.val()
				);
			controller.refreshViews();

		});

		this.render();
	},

	render: function() {
		var currentCat = controller.getCurrentCat();

		this.catNameFld.val(currentCat.name);
		this.catImgUrlFld.val(currentCat.catImgSrc);
		this.catClickCounterFld.val(currentCat.clicks);
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

function generateCatClickHandler(catCopy) {
	return function() {
		controller.setCurrentCat(catCopy);
		catImgView.render();
	};
}

// for (i = 0; i < cats.length; i++) {
// 	cat = cats[i];
// 	elem.addEventListener('click', (generateCatClickHandler(cat)));
// }