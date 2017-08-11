$(function() {

	//	用户名验证
	$("#user").blur(function() {
		var suer = $(this).val();
		var par = $(this).parent().parent().find(".td3");
		var reg = /^[\u4E00-\u9FA5A-Za-z0-9]+$/;
		if(reg.test(suer)) {
			par.css({display: "none"})
			$(this).parent().find("span").css({
				display: "block"
			})
		} else {
			$(this).parent().find("span").css({
				display: "none"
			})
			par.css({
				display: "block"
			})
			par.html("！请输入正确的用户名");
		}
		if(suer == "") {
			$(this).parent().find("span").css({
				display: "none"
			})
			par.css({
				display: "none"
			})
		}

	})

	// 密码验证 
	$("#pwd1").blur(function() {
		var pass = $(this).val();
		var pass2 = $("#pwd1").val();
		var par = $(this).parent().parent().find(".td3");
		var reg = /^(?=.*\d)(?=.*[a-z]).{6,24}$/;

		if(reg.test(pass) || pass==pass2) {
			par.css({
				display: "none"
			})
			$(this).parent().find("span").css({
				display: "block"
			})
		} else {
			$(this).parent().find("span").css({
				display: "none"
			})
			par.css({
				display: "block"
			})
			par.html("由中文、字母、数字组成的6-24个字符");
		}
		if(pass == "") {
			$(this).parent().find("span").css({
				display: "none"
			})
			par.css({
				display: "none"
			})
		}
	});
	//密码的再次验证	
	$("#pwd2").blur(function() {
		var pass1 = $("#pwd1").val();
		var pass2 = $(this).val();

		var par = $(this).parent().parent().find(".td3");
		if(pass1 == pass2) {
			par.css({
				display: "none"
			})
			$(this).parent().find("span").css({
				display: "block"
			})
		} else {
			$(this).parent().find("span").css({
				display: "none"
			})
			par.css({
				display: "block"
			})
			par.html("两次输入的密码不一样");
		}
		if(pass2 == "") {
			$(this).parent().find("span").css({
				display: "none"
			})
			par.css({
				display: "none"
			})
		}
	});
	//手机号码的验证	
	$("#phone").blur(function() {
		var phone = $(this).val();
		var par = $(this).parent().parent().find(".td3");
		var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;

		if(reg.test(phone)) {
			par.css({
				display: "none"
			})
			$(this).parent().find("span").css({
				display: "block"
			})
		} else {
			$(this).parent().find("span").css({
				display: "none"
			})
			par.css({
				display: "block"
			})
			par.html("手机号码格式不正确");
		}
		if(phone == "") {
			$(this).parent().find("span").css({
				display: "none"
			})
			par.css({
				display: "none"
			})
		}
	});



	
	$("#tu").blur(function() {

		var tu = $(this).val();
		var par = $(this).parent().parent().find(".td3");

		if(tu == "") {
			$(this).parent().find("span").css({
				display: "none"
			})
			par.css({
				display: "none"
			})
		}

	})

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

//	获取屏幕的高和宽,来判断政策的显示
 $(document).ready(function(){   

    var h= $(window).height();//浏览器当前窗口可视区域高度     
    var w=$(window).width();//浏览器当前窗口可视区域宽度   
    $(".ui_mask").css({"width":w,"height":h})
      
	//用户协议点击时
	  $("#protocol").click(function(){
	  	$(".ui_mask").css({display:"block"});
	  	$(".ui_dh").css({display:"block"});
	  	$(".ui_dh_title span").html("用户协议");
	  	$(".yonghu").css({display:"block"});
	  	$(".yinsi").css({display:"none"});
	  })
	// 隐私政策点击 
	  $("#privacy").click(function(){
	  	$(".ui_mask").css({display:"block"});
	  	$(".ui_dh").css({display:"block"});
	  	$(".ui_dh_title span").html("隐私政策");
	  	$(".yonghu").css({display:"none"});
	  	$(".yinsi").css({display:"block"});
	  })
	  
	//关闭小按钮
	$(".ui_dh_close").click(function(){
		$(".ui_mask").css({display:"none"});
	  	$(".ui_dh").css({display:"none"});
	})
	//同意并继续按钮
	$(".protocol_button button").click(function(){
		$(".ui_mask").css({display:"none"});
	  	$(".ui_dh").css({display:"none"});
	})
	    
  
  });


//注册提交时

//图片验证
var verifyCode = new GVerify("v_container");
$(".tijiao").click(function(){
	$(".tijiao").attr("disabled","true")
	var t1=$(".reg_user .td2 span");
	var t2=$(".reg_pwd1 .td2 span");
	var t3=$(".reg_pwd2 .td2 span");
	var t4=$(".reg_phone .td2 span");
	var k=0;
	function aa(){
		if( (t1).css("display")!='none' ){　　
		　　k++;
		}
		if( (t2).css("display")!='none' ){　　
		　　k++;
		}
		if( (t3).css("display")!='none' ){　　
		　　k++;
		}
		if( (t4).css("display")!='none' ){　　
		　　k++;
		}


//       判断res就是输入的值是否等于图片里面的值
		var res = verifyCode.validate(document.getElementById("tu").value);
		if(res){　k++;}
      
       //这一步需要进行判断,判断从后台请求的数据是否和输入的值一样,一样的话就让k++
         
		
	}
		
	aa();	
//	当k=6的时候就是信息完全正确才让提交按钮放开
	if(k==6){
		$(".tijiao").attr("disabled","fasle")
	}else{
		alert("信息不完全请重新输入")
		 window.location.reload();
	}
	
})

	
	
	

});
	

	