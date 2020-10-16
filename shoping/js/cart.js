$(function(){
	$(".checkall").change(function(){
		$(".j-checkbox,.checkall").prop("checked",$(this).prop("checked"));
		if($(this).prop("checked")){
			//让所有商品添加check-cart-item 类名
			$(".cart-item").addClass("check-cart-item");
		}else{
			//check-cart-item 移除
			$(".cart-item").removeClass("check-cart-item");
		}
	});
	
	$(".j-checkbox").change(function(){
		if($(".j-checkbox:checked").length===$(".j-checkbox").length){
			$(".checkall").prop("checked",true);
		}else{
			$(".checkall").prop("checked",false);
		}
		if($(this).prop("checked")){
			//让所有商品添加check-cart-item 类名
			$($(this)).parents(".cart-item").addClass("check-cart-item");
		}else{
			//check-cart-item 移除
			$($(this)).parents(".cart-item").removeClass("check-cart-item");
		}

	});
	$(".increment").click(function(){
		var n=$(this).siblings(".itxt").val();
		n++;
		$(this).siblings(".itxt").val(n);
		var p=$(this).parent().parent().siblings(".p-price").html();
		p=p.substr(1);
		$(this).parent().parent().siblings(".p-sum").html("￥"+(p*n).toFixed(2));
		getSum();
	});
	$(".decrement").click(function(){
		var n=$(this).siblings(".itxt").val();
		if(n==1){
			return false;
		}
		n--;
		$(this).siblings(".itxt").val(n);
		var p=$(this).parent().parent().siblings(".p-price").html();
		p=p.substr(1);
		$(this).parent().parent().siblings(".p-sum").html("￥"+(p*n).toFixed(2));
		getSum();
	});
	$(".itxt").change(function(){
		var n=$(this).val();
		var p=$(this).parents(".p-num").siblings(".p-price").html();
		p=p.substr(1);
		$(this).parents(".p-num").siblings(".p-sum").html("￥"+(p*n).toFixed(2));
		getSum();
	});
	getSum();
	function getSum(){
		var count=0;//计算总件数
		var money=0;//计算总价钱
		$(".itxt").each(function(i,ele){
			count+=parseInt($(ele).val());
		});
		$(".amount-sum em").text(count);
		$(".p-sum").each(function(i,ele){
			money+=parseFloat($(ele).text().substr(1));
		});
		$(".price-sum em").text("￥"+money.toFixed(2));
	}
	//删除选中的商品
	$(".p-action a").click(function(){
		//删除的是当前的商品
		$(this).parents(".cart-item").remove();
		getSum();
	});
	//删除的选中的商品
	$(".remove-batch").click(function(){
		$(".j-checkbox:checked").parents(".cart-item").remove();
		getSum();
	});
	
	//清空购物车 删除全部商品
	$(".clear-all").click(function(){
		$(".cart-item").remove();
		getSum();
	})
})
