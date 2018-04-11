require("./swiper.min.js");

var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        autoplay : 3000,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });

function Page() {
    this.wrapperElem = $(".js-wrapper");
    this.messageElem = $(".js-message");
    this.slideElem   = $(".swiper-slide");
    this.nowPrice    = $(".now-price");
    this.btn         = $(".js-btn");
    this.hrefElem    = $(".js-localHref");
};

$.extend(Page.prototype, {
    init: function() {
        this.getGoodsDate();
        this.getLocation();
        this.addShoppingCar();
        this.defineCart();
        this.localHref();
    },

    localHref: function() {
        this.hrefElem.on("click", $.proxy(this.handleLocalHref, this));
    },

    handleLocalHref: function() {
        window.location.href = "./shoppingCar.html";
    },

    defineCart: function(){

        if(window.localStorage.cart == undefined){
            this.cart = [];
        }else{            
             this.cart = JSON.parse(window.localStorage.cart);
        }
    },

    getLocation: function() {
        var str = location.href,
            arrList = str.split("?")[1],
            arr = arrList.split("&");
        this.id = arr[0].split("=")[1];
        this.classify = arr[1].split("=")[1];
    },

    getGoodsDate: function() {
        $.ajax({
            url: "../mock/index.json",
            success: $.proxy(this.handleGetDataSucc, this) 
        })
    },

    handleGetDataSucc: function(response) {
        this.response = response;
        this.goodsList = response.data.goods[this.classify];
        this.addGoods();
    },

    addGoods: function() {

        for( var i=0; i<this.goodsList.length; i++ ){
            var goodsArr = [];
            goodsArr.push(this.goodsList[i].id)
            if( this.id == this.goodsList[i].id ){
                this.goodsStr = this.goodsList[i];        
            };
        };

        this.slideElem.attr({
                            "style": "background:url("+this.goodsStr.imgUrl+")",
                            "background-size": "cover"
                            });
        this.nowPrice.append(this.goodsStr.price);
    },

    addShoppingCar: function() {
        this.btn.on("click", $.proxy(this.handleBtnClick, this));
    },
    
    handleBtnClick: function() {

        try{

            window.localStorage.imgUrl = this.goodsStr.imgUrl;
            window.localStorage.price  = this.goodsStr.price;
            window.localStorage.id     = this.goodsStr.id;
            var obj = {
                "imgUrl":window.localStorage.imgUrl ,
                "price":window.localStorage.price,
                "id": window.localStorage.id
            };
             
            this.cart.push(obj);
            window.localStorage.cart  = JSON.stringify(this.cart);
            console.log(this.cart);

        }catch(e) {}
    },

});
var page = new Page();
page.init();
