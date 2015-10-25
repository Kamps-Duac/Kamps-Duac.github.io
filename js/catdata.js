var initialCats = [
	{
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
	}
]

var Cat = function(data) {
	this.clickCount = ko.observable(data.clicks);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.catImgSrc);

	this.level = ko.computed(function() {
		var clicks = this.clickCount();
		if (clicks <= 5) {
			return "Infant";
		} else if (clicks <= 20) {
			return "Child";
		} else if (clicks <= 50) {
			return "Teen"
		} else {
			return "Adult"
		}
	}, this);
}

var ViewModel = function() {

	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable( this.catList()[0] );

	this.setCurrentCat = function(cat){
		self.currentCat(cat);
		console.log("setCurrentCat was called " + cat.name())
		//console.log("current cat is " + currentCat());
		console.log("self current cat is " + self.currentCat().name())
	};

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
		console.log("Incremented Counter");
	};
}

ko.applyBindings(new ViewModel());