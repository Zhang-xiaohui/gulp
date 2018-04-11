var Item = require("./item.js").item;
var Total = require("./total.js").total;

//console.log(Item)

function Page() {
	this.total = 0;
};

$.extend(Page.prototype, {
	init: function() {
		this.getCartData();
		this.createTotal();
		this.createItems();
	},

	getCartData: function() {
		this.data = JSON.parse(window.localStorage.cart);
	},

	createTotal: function() {
		this.total = new Total($(".js-price"), 0);
	},

	createItems: function() {
		this.items = [];
		for(var i = 0; i < this.data.length; i++) {
			var item = new Item(this.data[i].price, $(".js-container"), this.data[i].imgUrl);
			$(item).on("change", $.proxy(this.handleNumberChange, this));
			this.items.push(item)
		};
	},

	handleNumberChange: function() {
		var totalPrice = 0;
		for (var i = 0; i < this.items.length; i++) {
			totalPrice += this.items[i].getTotalPrice();
		};
		this.total.setTotal(totalPrice);
	}

});

var page = new Page();
page.init();