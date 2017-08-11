$(function(){
	
//	判断手机号码或者用户名是否正确  得请求数据


    var phone=1;
    var ming=1;
    
    if(phone==1 || ming==1){
    	$(".back_box1 #btn").click(function(){
    		$(".back_ul").css({display:"none"});
    		$(".back_ul2").css({display:"block"});
    	})
    }
    if(phone!=1){
    	$(".back_box1 .tishi").css({display:"block"});
    	$(".back_box1 .tishi").html("你的电话输入错误")
    }
     if(ming!=1){
    	$(".back_box1 .tishi").css({display:"block"});
    	$(".back_box1 .tishi").html("你的用户名输入错误")
    }


//2 请求回来的数据 

  var name='anima';
  var phone=1245345258;
  
  $(".back_user .td22").html(name)
  $(".back_phone .td22").html(phone)




//手机验证码倒计时
	$(".td2 .text").click(function() {

		alert("已发送，请你耐心等待");
        $(".td2 .text").css({"background-color":"#b4b2b3","pointer-events":"none"})
		//下面就是实现倒计时的效果代码
		var d = new Date();
		d.setSeconds(d.getSeconds() + 59);
		var m = d.getMonth() + 1;
		var time = d.getFullYear() + '-' + m + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
		var end_time = new Date(Date.parse(time.replace(/-/g, "/"))).getTime(),
			//月份是实际月份-1
		sys_second = (end_time - new Date().getTime()) / 1000;
		var timer = setInterval(function() {
				if(sys_second > 1) {
					sys_second -= 1;
					var day = Math.floor((sys_second / 3600) / 24);
					var hour = Math.floor((sys_second / 3600) % 24);
					var minute = Math.floor((sys_second / 60) % 60);
					var second = Math.floor(sys_second % 60);
					var time_text = '';
					if(day > 0) {
						time_text += day + '天';
					}
					if(hour > 0) {
						if(hour < 10) {
							hour = '0' + hour;
						}
						time_text += hour + '小时';
					}
					if(minute > 0) {
						if(minute < 10) {
							minute = '0' + minute;
						}
						time_text += minute + '分';
					}
					if(second > 0) {
						if(second < 10) {
							second = '0' + second;
						}
						time_text += second + '秒';
					}
					$(".td2 .text").html(time_text);
					console.log(time_text)

				} else {
					clearInterval(timer);
					$(".td2 .text").html('获取验证码');
					$(".td2 .text").css({"background-color":"#eeeeee","pointer-events":"auto"});					
				}
			},1000);

	});


//图片验证
var verifyCode = new GVerify("v_container");

//2的下一步
//判断用户名和密码是否存在
//判断手机的验证码是否一样
//判断图片的验证码是否一样

//设置一个手机的验证码
var fa=1;

$("#btn1").click(function(){
     if(fa!=1){
     	$(".back_pyan .td3").css({display:"block"});
     	$(".back_pyan .td3").html("手机验证码输入错误")
     }   
	var res = verifyCode.validate(document.getElementById("tu").value);
	if(!res){　
	 $(".back_tupin .td3").css({display:"block"});
	   $(".back_tupin .td3").html("图片验证码输入错误")
	}
    if(res==true  && fa==1 && name!="" && phone!=""){
    	$(".back_ul").css({display:"none"});
    	$(".back_ul3").css({display:"block"});
    }
});



//3
//密码验证
	$("#pass1").blur(function() {
		var pass = $(this).val();
		var pass2 = $("#pass2").val();
		var par = $(this).parent().find(".tishi");
		var reg = /^(?=.*\d)(?=.*[a-z]).{6,24}$/;

		if(reg.test(pass) || pass==pass2) {
			$(".tishi").css({display: "none"})
			$(this).parent().find("span").css({display: "block"})
			
			if (pass==pass2 && pass!="") {
				$(".back_box3_li").find("span").css({display: "block"})
			}
		} else {
			$(this).parent().find("span").css({display: "none"})
			par.css({display: "block"})
			par.html("由中文、字母、数字组成的6-24个字符");
		}
		if(pass == "") {
			$(this).parent().find("span").css({display: "none"})
			par.css({display: "none"})
		}
	});
//密码的再次验证	
	$("#pass2").blur(function() {
		var pass1 = $("#pass1").val();
		var pass2 = $(this).val();
		var par = $(this).parent().find(".tishi");
		if(pass1 == pass2) {
			$(".tishi").css({display: "none"})
			$(this).parent().find("span").css({display: "block"})
		} else {
			$(this).parent().find("span").css({display: "none"})
			par.css({display: "block"})
			par.html("两次输入的密码不一样");
		}
		
		if(pass2 == "") {
			$(this).parent().find("span").css({display: "none"})
			par.css({display: "none"})
		}
	});
	
//3的下一步
$("#btn2").click(function(){
	var pass = $("#pass1").val();
	var pass2 = $("#pass2").val();
	if(pass!="" && pass2!="" && pass==pass2){
		$(".back_ul").css({display:"none"});
    	$(".back_ul4").css({display:"block"});
//  	进入到第四步的时候设置定时器然后转到首页
        var down=$(".down").html();
		 var timer = setInterval(function() {
		 	if(down>0){
		 		down--;
		 		$(".down").html(down)
		 	}else{
		 		clearInterval(timer);
		 		window.location.href="../../pages/html/index.html"
		 	}	
		 },1000)
        
    	
	}else{
		alert("信息不完全,请重新输入");
//		刷新页面
         window.location.reload();
	}
	
})




//消除红字提示
$(".back_box1 #phone").focus(function(){
	$(".reg_tr .tishi").css({display:"none"});
})
$(".reg_tr #yan").focus(function(){
	$(".reg_tr .td3").css({display:"none"});
})
$(".reg_tr #tu").focus(function(){
	$(".reg_tr .td3").css({display:"none"});
});
$(".back_box3_pas1 #pass1").focus(function(){
	$(".back_box3_pas1 .tishi").css({display:"none"});
})
$(".back_box3_pas2 #pass2").focus(function(){
	$(".back_box3_pas2 .tishi").css({display:"none"});
})







})