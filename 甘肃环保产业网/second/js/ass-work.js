$(function(){
	$("#header").load("../../common/html/header.html");
      
      
      
      
//    tab栏点击
    $(".ass_ull li").click(function(){
    	var i=$(this).index();
    	$(this).addClass("ass_ull_2").siblings().removeClass("ass_ull_2");
    	$(".ass_ulr1").eq(i).css({display:"block"}).siblings().css({display:"none"});
    	if(i==0){
    		$(".xiehui2").html("组织机构")
    	}
    	if(i==1){
    		$(".xiehui2").html("协会简介")
    	}
    	if(i==2){
    		$(".xiehui2").html("协会里程碑")
    	}
    	if(i==3){
    		$(".xiehui2").html("联系我们")
    	}
    });
      

      
      
      
	
//	接受从..里面传入的hash值
	(function() {
		//  	     判断接受的值,然后从后台数据调去相对应的数据渲染到页面当中
		if(getUrlParams("nub")) {
			var ll =getUrlParams("nub");
			var ll1=getUrlParams("type") 
		    
		    $(".ass_ull li").eq(ll-1).addClass("ass_ull_2").siblings().removeClass("ass_ull_2");
			$(".ass_ulr1").eq(ll-1).css({display:"block"}).siblings().css({display:"none"});
			if(ll-1==0){
	    		$(".xiehui2").html("组织机构")
	    	}
	    	if(ll-1==1){
	    		$(".xiehui2").html("协会简介")
	    	}
	    	if(ll-1==2){
	    		$(".xiehui2").html("协会里程碑")
	    	}
	    	if(ll-1==3){
	    		$(".xiehui2").html("联系我们")
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