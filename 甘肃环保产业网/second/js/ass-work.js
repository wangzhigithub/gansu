$(function(){
	$("#header").load("../../common/html/header.html");
      
      
      
      
//    tab栏点击
    $(".ass_ull li").click(function(){
    	var i=$(this).index();
    	$(this).addClass("ass_ull_2").siblings().removeClass("ass_ull_2");
    	  $(".ass_ulr1").eq(i).css({display:"block"}).siblings().css({display:"none"})
    });
      

      
      
      
	
//	接受从download_zone_list.html里面传入的hash值
	(function() {
		//  	     判断接受的值,然后从后台数据调去相对应的数据渲染到页面当中
		if(getUrlParams("nub")) {
			var ll =getUrlParams("nub");
			var ll1=getUrlParams("type") 
		    if (ll==1) {
		    	$(".ass_ull li").eq(0).addClass("ass_ull_2").siblings().removeClass("ass_ull_2");
				 $(".ass_ulr1").eq(0).css({display:"block"}).siblings().css({display:"none"})
			}
		    if (ll==2) {
		    	$(".ass_ull li").eq(1).addClass("ass_ull_2").siblings().removeClass("ass_ull_2");
				 $(".ass_ulr1").eq(1).css({display:"block"}).siblings().css({display:"none"})
			}
		    if (ll==3) {
		    	$(".ass_ull li").eq(2).addClass("ass_ull_2").siblings().removeClass("ass_ull_2");
				 $(".ass_ulr1").eq(2).css({display:"block"}).siblings().css({display:"none"})
			}
		    if (ll==4) {
		    	$(".ass_ull li").eq(3).addClass("ass_ull_2").siblings().removeClass("ass_ull_2");
				 $(".ass_ulr1").eq(3).css({display:"block"}).siblings().css({display:"none"})
			}
		}
		/*获取页面url传过来的参数*/
		function getUrlParams(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(reg);
			if(r != null)
				return r[2];
			else
				return "";
		}
	})();
})