//$(function(){
//	//当我们点击了小li 此时不需要执行 页面滚动事件里面的li 的背景选择 添加 current
//	//节流阀  互斥锁
//	var flag=true;
//	//1.显示隐藏电梯导航
//	var toolTop=$(".recom").offset().top;
//	toggleTool();
//	
//	function toggleTool(){
//		if($(document).scrollTop()>=toolTop){
//			$(".fixedtool").fadeIn();
//		}else{
//			$(".fixedtool").fadeOut();
//		};
//	}
//	$(window).scroll(function(){
//		toggleTool();
//		//页面滚动到某个区域，左侧电梯导航小li相应添加和删除current类名
//		
//		if(flag){
//			$(".floor .w").each(function(i,ele){
//			if($(document).scrollTop()>=$(ele).offset().top){
//				$(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
//			}
//		})
//		}
//	});
//	//2.点击导航页面可以滚动到相应内容区域
//	$(".fixedtool li").click(function(){
//		flag=false;
//		var current=$(".floor .w").eq($(this).index()).offset().top;
//		//页面滚动效果
//		$("body,html").stop().animate({
//			scrollTop:current
//		},function(){
//			flag=true;
//		});
//		//点击之后，让当前的小li 添加current 类名，姐妹移除current类名
//		$(this).addClass("current").siblings().removeClass();
//	})
//})

var imgs = ["adver01", "adver02", "adver03", "adver04", "adver05", "adver06"];
var index = 0;
var myTime; // 定时器
function listImg() {		
	//替换div中的背景图片	
	$(".focus").css("background", "url(../img/" + imgs[index] + ".jpg)");
	index++;
	
	//设置1,2,3,4,5,6的背景色
	$(".focus li:nth-of-type(" + index + ")").css("background", "orange");
	$(".focus li:nth-of-type(" + index + ")").siblings().css("background", "#333");
	//循环到数组最后一张图片则归零。
	if (index == imgs.length) {
		index = 0;
	}
	myTime = setTimeout("listImg()", 2000); //图片变换速度
	
}
$(function() {
	//div 鼠标移入
	$(".focus").mouseover(function() {
		clearTimeout(myTime); //清除定时器
		$(".prev").show();
		$(".next").show();
	});
	//div 鼠标移出
	$(".focus").mouseout(function() {		
		myTime = setTimeout("listImg()",2000); //重新开始定时
		//listImg();
		$(".prev").hide();
		$(".next").hide();
	});
	//左向箭头的点击
	$(".prev").click(function() {
		if (index == 1) {
			alert("已经是第一张图片");
		} else {
			index--;
			//替换div中的背景图片
			$(".focus").css("background", "url(../img/" + imgs[index-1] + ".jpg)");
			//设置1,2,3,4,5,6的背景色
			$(".focus li:nth-of-type(" + index + ")").css("background", "orange");
			$(".focus li:nth-of-type(" + index + ")").siblings().css("background", "#333");
		}
	});
	//右向箭头的点击
	$(".next").click(function() {		
		if (index == imgs.length) {
			alert("已经是最后一张图片");
			index=0;
		} else {
			index++;
			//替换div中的背景图片
			$(".focus").css("background", "url(../img/" + imgs[index-1] + ".jpg)");
			//设置1,2,3,4,5,6的背景色
			$(".focus li:nth-of-type(" + index + ")").css("background", "orange");
			$(".focus li:nth-of-type(" + index + ")").siblings().css("background", "#333");
		}
	});
});








$(function() {
    // 当我们点击了小li 此时不需要执行 页面滚动事件里面的 li 的背景选择 添加 current
    // 节流阀  互斥锁 
    var flag = true;
    // 1.显示隐藏电梯导航
    var toolTop = $(".recom").offset().top;
    
    toggleTool();


    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        };
    }

    $(window).scroll(function() {
        toggleTool();
        // 3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名


        if (flag) {
            $(".floor .w").each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    console.log(i);
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();

                }
            })
        }



    });
    // 2. 点击电梯导航页面可以滚动到相应内容区域
    $(".fixedtool li").click(function() {
        flag = false;
        console.log($(this).index());
        // 当我们每次点击小li 就需要计算出页面要去往的位置 
        // 选出对应索引号的内容区的盒子 计算它的.offset().top
        var current = $(".floor .w").eq($(this).index()).offset().top;
        // 页面动画滚动效果
        $("body, html").stop().animate({
            scrollTop: current
        }, function() {
            flag = true;
        });
        // 点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名
        $(this).addClass("current").siblings().removeClass();
    });


})