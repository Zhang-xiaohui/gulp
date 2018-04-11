
function Item(price, container, url) {
	this.price = price;
	this.imgUrl = url;
	this.number = 1;
	this.container = container;
	this.init();
};

$.extend(Item.prototype, {
	init: function() {
		this.createDom();
		this.bindEvents();
	},

	createDom: function() {
		this.element = $("<div class='cart-message'>" +	
							"<div class='left'><img src='"+ this.imgUrl +"'</div>"+
							"<div class='right'>" +
								"<span>" + this.price + "</span>" +						
								"<div><span class='sp-minus js-minus'>-</span>" +
								"<input class='goodsPrice js-input' type='text' value='" + this.number + "'/>" +
								"<span class='sp-add js-add'>+</span></div>" +
							"</div>" +
						"</div>");
		this.minusBtn = this.element.find(".js-minus");
		this.addBtn = this.element.find(".js-add");
		this.numberInput = this.element.find(".js-input");
		this.container.append(this.element);
	},

	bindEvents: function() {
		this.minusBtn.on("click", $.proxy(this.handleMinus, this));
		this.addBtn.on("click", $.proxy(this.handleAdd, this));
	},

	handleMinus: function() {
		this.number--;
		if(this.number < 1 ){
			this.number = 1
		};
		this.numberInput.val(this.number);
		$(this).trigger("change");
	},
	//加减操作存储商品信息还未做（localStorage）
	handleAdd: function() {
		this.number++;
		this.numberInput.val(this.number);
		$(this).trigger("change");
	},

	getTotalPrice: function() {
		return this.number * this.price;
	}

});

module.exports = {
	item: Item
}