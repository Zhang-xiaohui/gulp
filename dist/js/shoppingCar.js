!function(t){function c(l){if(n[l])return n[l].exports;var i=n[l]={exports:{},id:l,loaded:!1};return t[l].call(i.exports,i,i.exports,c),i.loaded=!0,i.exports}var n={};c.m=t,c.c=n,c.p="",c(0)}([function(t,c,n){t.exports=n(11)},,,,,,,,,,,function(module,exports,__webpack_require__){eval('/*** IMPORTS FROM imports-loader ***/\nvar define = false;\n\nvar Item = __webpack_require__(12).item;\r\nvar Total = __webpack_require__(13).total;\r\n\r\n//console.log(Item)\r\n\r\nfunction Page() {\r\n\tthis.total = 0;\r\n};\r\n\r\n$.extend(Page.prototype, {\r\n\tinit: function() {\r\n\t\tthis.getCartData();\r\n\t\tthis.createTotal();\r\n\t\tthis.createItems();\r\n\t},\r\n\r\n\tgetCartData: function() {\r\n\t\tthis.data = JSON.parse(window.localStorage.cart);\r\n\t},\r\n\r\n\tcreateTotal: function() {\r\n\t\tthis.total = new Total($(".js-price"), 0);\r\n\t},\r\n\r\n\tcreateItems: function() {\r\n\t\tthis.items = [];\r\n\t\tfor(var i = 0; i < this.data.length; i++) {\r\n\t\t\tvar item = new Item(this.data[i].price, $(".js-container"), this.data[i].imgUrl);\r\n\t\t\t$(item).on("change", $.proxy(this.handleNumberChange, this));\r\n\t\t\tthis.items.push(item)\r\n\t\t};\r\n\t},\r\n\r\n\thandleNumberChange: function() {\r\n\t\tvar totalPrice = 0;\r\n\t\tfor (var i = 0; i < this.items.length; i++) {\r\n\t\t\ttotalPrice += this.items[i].getTotalPrice();\r\n\t\t};\r\n\t\tthis.total.setTotal(totalPrice);\r\n\t}\r\n\r\n});\r\n\r\nvar page = new Page();\r\npage.init();\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2hvcHBpbmdDYXIvc2hvcHBpbmdDYXIuanM/NjczZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxnQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0EiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIElNUE9SVFMgRlJPTSBpbXBvcnRzLWxvYWRlciAqKiovXG52YXIgZGVmaW5lID0gZmFsc2U7XG5cbnZhciBJdGVtID0gcmVxdWlyZShcIi4vaXRlbS5qc1wiKS5pdGVtO1xyXG52YXIgVG90YWwgPSByZXF1aXJlKFwiLi90b3RhbC5qc1wiKS50b3RhbDtcclxuXHJcbi8vY29uc29sZS5sb2coSXRlbSlcclxuXHJcbmZ1bmN0aW9uIFBhZ2UoKSB7XHJcblx0dGhpcy50b3RhbCA9IDA7XHJcbn07XHJcblxyXG4kLmV4dGVuZChQYWdlLnByb3RvdHlwZSwge1xyXG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5nZXRDYXJ0RGF0YSgpO1xyXG5cdFx0dGhpcy5jcmVhdGVUb3RhbCgpO1xyXG5cdFx0dGhpcy5jcmVhdGVJdGVtcygpO1xyXG5cdH0sXHJcblxyXG5cdGdldENhcnREYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMuZGF0YSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5jYXJ0KTtcclxuXHR9LFxyXG5cclxuXHRjcmVhdGVUb3RhbDogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLnRvdGFsID0gbmV3IFRvdGFsKCQoXCIuanMtcHJpY2VcIiksIDApO1xyXG5cdH0sXHJcblxyXG5cdGNyZWF0ZUl0ZW1zOiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMuaXRlbXMgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBuZXcgSXRlbSh0aGlzLmRhdGFbaV0ucHJpY2UsICQoXCIuanMtY29udGFpbmVyXCIpLCB0aGlzLmRhdGFbaV0uaW1nVXJsKTtcclxuXHRcdFx0JChpdGVtKS5vbihcImNoYW5nZVwiLCAkLnByb3h5KHRoaXMuaGFuZGxlTnVtYmVyQ2hhbmdlLCB0aGlzKSk7XHJcblx0XHRcdHRoaXMuaXRlbXMucHVzaChpdGVtKVxyXG5cdFx0fTtcclxuXHR9LFxyXG5cclxuXHRoYW5kbGVOdW1iZXJDaGFuZ2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHRvdGFsUHJpY2UgPSAwO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHRvdGFsUHJpY2UgKz0gdGhpcy5pdGVtc1tpXS5nZXRUb3RhbFByaWNlKCk7XHJcblx0XHR9O1xyXG5cdFx0dGhpcy50b3RhbC5zZXRUb3RhbCh0b3RhbFByaWNlKTtcclxuXHR9XHJcblxyXG59KTtcclxuXHJcbnZhciBwYWdlID0gbmV3IFBhZ2UoKTtcclxucGFnZS5pbml0KCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9zaG9wcGluZ0Nhci9zaG9wcGluZ0Nhci5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==')},function(module,exports){eval('/*** IMPORTS FROM imports-loader ***/\nvar define = false;\n\n\r\nfunction Item(price, container, url) {\r\n\tthis.price = price;\r\n\tthis.imgUrl = url;\r\n\tthis.number = 1;\r\n\tthis.container = container;\r\n\tthis.init();\r\n};\r\n\r\n$.extend(Item.prototype, {\r\n\tinit: function() {\r\n\t\tthis.createDom();\r\n\t\tthis.bindEvents();\r\n\t},\r\n\r\n\tcreateDom: function() {\r\n\t\tthis.element = $("<div class=\'cart-message\'>" +\t\r\n\t\t\t\t\t\t\t"<div class=\'left\'><img src=\'"+ this.imgUrl +"\'</div>"+\r\n\t\t\t\t\t\t\t"<div class=\'right\'>" +\r\n\t\t\t\t\t\t\t\t"<span>" + this.price + "</span>" +\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t"<div><span class=\'sp-minus js-minus\'>-</span>" +\r\n\t\t\t\t\t\t\t\t"<input class=\'goodsPrice js-input\' type=\'text\' value=\'" + this.number + "\'/>" +\r\n\t\t\t\t\t\t\t\t"<span class=\'sp-add js-add\'>+</span></div>" +\r\n\t\t\t\t\t\t\t"</div>" +\r\n\t\t\t\t\t\t"</div>");\r\n\t\tthis.minusBtn = this.element.find(".js-minus");\r\n\t\tthis.addBtn = this.element.find(".js-add");\r\n\t\tthis.numberInput = this.element.find(".js-input");\r\n\t\tthis.container.append(this.element);\r\n\t},\r\n\r\n\tbindEvents: function() {\r\n\t\tthis.minusBtn.on("click", $.proxy(this.handleMinus, this));\r\n\t\tthis.addBtn.on("click", $.proxy(this.handleAdd, this));\r\n\t},\r\n\r\n\thandleMinus: function() {\r\n\t\tthis.number--;\r\n\t\tif(this.number < 1 ){\r\n\t\t\tthis.number = 1\r\n\t\t};\r\n\t\tthis.numberInput.val(this.number);\r\n\t\t$(this).trigger("change");\r\n\t},\r\n\t//加减操作存储商品信息还未做（localStorage）\r\n\thandleAdd: function() {\r\n\t\tthis.number++;\r\n\t\tthis.numberInput.val(this.number);\r\n\t\t$(this).trigger("change");\r\n\t},\r\n\r\n\tgetTotalPrice: function() {\r\n\t\treturn this.number * this.price;\r\n\t}\r\n\r\n});\r\n\r\nmodule.exports = {\r\n\titem: Item\r\n}\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2hvcHBpbmdDYXIvaXRlbS5qcz82OWNiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogSU1QT1JUUyBGUk9NIGltcG9ydHMtbG9hZGVyICoqKi9cbnZhciBkZWZpbmUgPSBmYWxzZTtcblxuXHJcbmZ1bmN0aW9uIEl0ZW0ocHJpY2UsIGNvbnRhaW5lciwgdXJsKSB7XHJcblx0dGhpcy5wcmljZSA9IHByaWNlO1xyXG5cdHRoaXMuaW1nVXJsID0gdXJsO1xyXG5cdHRoaXMubnVtYmVyID0gMTtcclxuXHR0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHR0aGlzLmluaXQoKTtcclxufTtcclxuXHJcbiQuZXh0ZW5kKEl0ZW0ucHJvdG90eXBlLCB7XHJcblx0aW5pdDogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLmNyZWF0ZURvbSgpO1xyXG5cdFx0dGhpcy5iaW5kRXZlbnRzKCk7XHJcblx0fSxcclxuXHJcblx0Y3JlYXRlRG9tOiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMuZWxlbWVudCA9ICQoXCI8ZGl2IGNsYXNzPSdjYXJ0LW1lc3NhZ2UnPlwiICtcdFxyXG5cdFx0XHRcdFx0XHRcdFwiPGRpdiBjbGFzcz0nbGVmdCc+PGltZyBzcmM9J1wiKyB0aGlzLmltZ1VybCArXCInPC9kaXY+XCIrXHJcblx0XHRcdFx0XHRcdFx0XCI8ZGl2IGNsYXNzPSdyaWdodCc+XCIgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XCI8c3Bhbj5cIiArIHRoaXMucHJpY2UgKyBcIjwvc3Bhbj5cIiArXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcIjxkaXY+PHNwYW4gY2xhc3M9J3NwLW1pbnVzIGpzLW1pbnVzJz4tPC9zcGFuPlwiICtcclxuXHRcdFx0XHRcdFx0XHRcdFwiPGlucHV0IGNsYXNzPSdnb29kc1ByaWNlIGpzLWlucHV0JyB0eXBlPSd0ZXh0JyB2YWx1ZT0nXCIgKyB0aGlzLm51bWJlciArIFwiJy8+XCIgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XCI8c3BhbiBjbGFzcz0nc3AtYWRkIGpzLWFkZCc+Kzwvc3Bhbj48L2Rpdj5cIiArXHJcblx0XHRcdFx0XHRcdFx0XCI8L2Rpdj5cIiArXHJcblx0XHRcdFx0XHRcdFwiPC9kaXY+XCIpO1xyXG5cdFx0dGhpcy5taW51c0J0biA9IHRoaXMuZWxlbWVudC5maW5kKFwiLmpzLW1pbnVzXCIpO1xyXG5cdFx0dGhpcy5hZGRCdG4gPSB0aGlzLmVsZW1lbnQuZmluZChcIi5qcy1hZGRcIik7XHJcblx0XHR0aGlzLm51bWJlcklucHV0ID0gdGhpcy5lbGVtZW50LmZpbmQoXCIuanMtaW5wdXRcIik7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy5lbGVtZW50KTtcclxuXHR9LFxyXG5cclxuXHRiaW5kRXZlbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMubWludXNCdG4ub24oXCJjbGlja1wiLCAkLnByb3h5KHRoaXMuaGFuZGxlTWludXMsIHRoaXMpKTtcclxuXHRcdHRoaXMuYWRkQnRuLm9uKFwiY2xpY2tcIiwgJC5wcm94eSh0aGlzLmhhbmRsZUFkZCwgdGhpcykpO1xyXG5cdH0sXHJcblxyXG5cdGhhbmRsZU1pbnVzOiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMubnVtYmVyLS07XHJcblx0XHRpZih0aGlzLm51bWJlciA8IDEgKXtcclxuXHRcdFx0dGhpcy5udW1iZXIgPSAxXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5udW1iZXJJbnB1dC52YWwodGhpcy5udW1iZXIpO1xyXG5cdFx0JCh0aGlzKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG5cdH0sXHJcblx0Ly/liqDlh4/mk43kvZzlrZjlgqjllYblk4Hkv6Hmga/ov5jmnKrlgZrvvIhsb2NhbFN0b3JhZ2XvvIlcclxuXHRoYW5kbGVBZGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5udW1iZXIrKztcclxuXHRcdHRoaXMubnVtYmVySW5wdXQudmFsKHRoaXMubnVtYmVyKTtcclxuXHRcdCQodGhpcykudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuXHR9LFxyXG5cclxuXHRnZXRUb3RhbFByaWNlOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLm51bWJlciAqIHRoaXMucHJpY2U7XHJcblx0fVxyXG5cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRpdGVtOiBJdGVtXHJcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3Nob3BwaW5nQ2FyL2l0ZW0uanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=')},function(module,exports){eval('/*** IMPORTS FROM imports-loader ***/\nvar define = false;\n\n\r\nfunction Total(element, total) {\r\n\tthis.total = total;\r\n\tthis.element = element;\r\n\tthis.init();\r\n};\r\n\r\n$.extend(Total.prototype, {\r\n\tinit: function() {\r\n\t\tif(this.total || this.total ===0) {\r\n\t\t\tvar totalArea = this.element.find("#total");\r\n\t\t\ttotalArea.html(this.total);\r\n\t\t}\r\n\t},\r\n\r\n\tsetTotal: function(total) {\r\n\t\tthis.total = total;\r\n\t\tvar totalArea = this.element.find("#total");\r\n\t\ttotalArea.html(this.total);\r\n\t}\r\n});\r\n\r\nmodule.exports = {\r\n\ttotal: Total\r\n}\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2hvcHBpbmdDYXIvdG90YWwuanM/NGY4OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBIiwiZmlsZSI6IjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBJTVBPUlRTIEZST00gaW1wb3J0cy1sb2FkZXIgKioqL1xudmFyIGRlZmluZSA9IGZhbHNlO1xuXG5cclxuZnVuY3Rpb24gVG90YWwoZWxlbWVudCwgdG90YWwpIHtcclxuXHR0aGlzLnRvdGFsID0gdG90YWw7XHJcblx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuXHR0aGlzLmluaXQoKTtcclxufTtcclxuXHJcbiQuZXh0ZW5kKFRvdGFsLnByb3RvdHlwZSwge1xyXG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYodGhpcy50b3RhbCB8fCB0aGlzLnRvdGFsID09PTApIHtcclxuXHRcdFx0dmFyIHRvdGFsQXJlYSA9IHRoaXMuZWxlbWVudC5maW5kKFwiI3RvdGFsXCIpO1xyXG5cdFx0XHR0b3RhbEFyZWEuaHRtbCh0aGlzLnRvdGFsKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRzZXRUb3RhbDogZnVuY3Rpb24odG90YWwpIHtcclxuXHRcdHRoaXMudG90YWwgPSB0b3RhbDtcclxuXHRcdHZhciB0b3RhbEFyZWEgPSB0aGlzLmVsZW1lbnQuZmluZChcIiN0b3RhbFwiKTtcclxuXHRcdHRvdGFsQXJlYS5odG1sKHRoaXMudG90YWwpO1xyXG5cdH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHR0b3RhbDogVG90YWxcclxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvc2hvcHBpbmdDYXIvdG90YWwuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=')}]);