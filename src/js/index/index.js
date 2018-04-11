require("../common/lazyload.js");

var IScroll = require("../common/iscroll.js");
var categoryTpl = require("./category_item.mustache");
var goodsTpl = require("./goods.mustache");


function Page() {
	this.categoryElem = $(".js-category");
	this.contentElem = $(".js-content");
	this.ulList = $(".js-category");
	this.flag = false;
	this.loading = false;
	this.loadNoticeElem = $("#loadNotice");
	this.listItem = $("#list");
};

$.extend(Page.prototype, {

	init: function() {
		this.promoteEfficiency();
		this.getCategoryData();
	},
	
	promoteEfficiency: function() {
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, this.isPassive() ? {
			capture: false,
			passive: false
		} : false);         //性能优化
	},

	getCategoryData: function(){
		$.ajax({
			url: "../mock/index.json",
			success: $.proxy(this.handleGetDataSucc, this)
		})
	},
     
	handleGetDataSucc: function(response) {
		this.response = response;
		this.data = response.data.category;
  		this.goods = response.data.goods;
  		var goods = this.goods[0];
		var classifyHtml = categoryTpl({categories: this.data});
		var contenthtml = goodsTpl({goods: goods});

	    this.categoryElem.html(classifyHtml);
	    this.contentElem.html(contenthtml);

	    var liList = this.categoryElem.children();
	    liList.eq(0).addClass("category-item-active");

	    this.initIscroll();
	    this.lazyload();
	},

	initIscroll: function() {
		this.classifyScroll = new IScroll(".classify-wrapper", {
			scrollX: true,
			scrollY: false
		});

		this.contentScroll = new IScroll(".content-wrapper", {
			scrollX: false,
			scrollY: true,
			probeType: 3   
		});

		this.contentScroll.on("scroll", $.proxy(this.handleScroll, this));
		this.ulList.on("click", $.proxy(this.bandleRemoveClassName, this));
		this.contentScroll.on("scrollEnd", $.proxy(this.handleScrollEnd,this));
	},

	handleScroll: function() {
		$(window).trigger("scroll");
		if(!this.loading) {
			//console.log(this.contentScroll.y );
			if(this.contentScroll.y > 100) {
				this.flag = true;
			}
		}

	},

	handleScrollEnd: function() {
		if( this.flag ){
			this.loading = true;
			setTimeout($.proxy(this.handleCreateThing, this), 1000)
		}
	},

	handleCreateThing: function() {
		//this.listItem.append("<li>刷新获得的数据</li>");
		var goods = this.goods[1];
		var contenthtmlIindex = goodsTpl({goods: goods});
		this.contentElem.append(contenthtmlIindex);
		this.loading = false;
		this.flag = false;
		this.contentScroll.refresh();
		this.lazyload();
	},

	bandleRemoveClassName: function(e) {
		var target = $(e.target),
			siblings = target.siblings(),
			index = target.index(),
			goods = this.goods[index] || [];
		
		siblings.removeClass("category-item-active");
		target.addClass("category-item-active");

		var contenthtmlIindex = goodsTpl({goods: goods});
		this.contentElem.html(contenthtmlIindex);

		this.contentScroll.refresh();
		this.lazyload();

	},

	lazyload: function() {
		$(".lazy").lazyload();
	},

	isPassive: function() {
    	var supportsPassiveOption = false;
	    try {
	        addEventListener("test", null, Object.defineProperty({}, 'passive', {
	            get: function () {
	                supportsPassiveOption = true;
	            }
	        }));
	    } catch(e) {}
	    return supportsPassiveOption;
	}
})

var page = new Page();
page.init();

//以上是获取数据的过程

