
function Total(element, total) {
	this.total = total;
	this.element = element;
	this.init();
};

$.extend(Total.prototype, {
	init: function() {
		if(this.total || this.total ===0) {
			var totalArea = this.element.find("#total");
			totalArea.html(this.total);
		}
	},

	setTotal: function(total) {
		this.total = total;
		var totalArea = this.element.find("#total");
		totalArea.html(this.total);
	}
});

module.exports = {
	total: Total
}