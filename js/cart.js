$(function(){
    var cartList = (function(){
        //购物车详情类
        var CartDetail = function(detail){
            this.img = detail.img;
            this.name = detail.name;
            this.price = detail.price;
            this.quantity = detail.quantity;
        };
        var cartComp = {
            init : function(){
                //获取购物车列表
                $.get('product/get_cart_list', null, function (data) {
                    for(var i=0; i<data.cartInfo.length; i++){
                        var cartInfo = data.cartInfo[i];
                        var product = new Product(cartInfo.prod_id,cartInfo.prod_name,cartInfo.prod_quantity);
                        var carDetailHtml = template('cart-tpl', product);
                        $("#cart-mine").append(carDetailHtml);
                    }
                }.bind(this), 'json');
            }
        };
        return cartComp;
    })();
    cartList.init();
});
