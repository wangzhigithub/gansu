$(function() {
	$("#header").load("../../common/html/header.html");

	//	$.ajax({
	//		type: "post",
	//		url: "",
	//		data: {
	//			type: t
	//		},
	//		dataType: "json",
	//		success: function(data) {
	//
	//		}
	//
	//	});

	//	邮箱验证
	$("#email").blur(function() {
		var email = $(this).val();
		var par = $(this).parent().parent().find(".td3");
		var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		if(reg.test(email)) {
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
			par.html("！请输入正确的邮箱");
		}
		if(email == "") {
			$(this).parent().find("span").css({
				display: "none"
			})
			par.css({
				display: "none"
			})
		}
	})
	//图片验证
	var verifyCode = new GVerify("v_container");

	$("#fasong").click(function() {
		//		var res = verifyCode.validate(document.getElementById("tu").value);
		//		var t1 = $(".personal_rbox_email .td2 span");
		//		var k = 0;
		//		function aa() {
		//			if((t1).css("display") != 'none') {　　　　
		//				k++;
		//			}
		//			//       判断res就是输入的值是否等于图片里面的值
		//			var res = verifyCode.validate(document.getElementById("tu").value);
		//			if(res) {　
		//				k++;
		//			}else{
//			$(".personal_rbox_tupin #tu").val("");
//						alert("图片验证码输入不正确");
//		}
		//		}
		//
		//		aa();
		//		if(k==2) {
		////         判断从后台请求回来的数据是否成功,成功的话
		//        
		//       
		//       
		//		}

		//		先写成功了发生的事件
		$(".personal_r_x").hide();
		$(".personal_r_x2").css({
			display: "block"
		});

	})

	//邮箱域名数据
	var hash = {
		'qq.com': 'http://mail.qq.com',
		'gmail.com': 'http://mail.google.com',
		'sina.com': 'http://mail.sina.com.cn',
		'163.com': 'http://mail.163.com',
		'126.com': 'http://mail.126.com',
		'yeah.net': 'http://www.yeah.net/',
		'sohu.com': 'http://mail.sohu.com/',
		'tom.com': 'http://mail.tom.com/',
		'sogou.com': 'http://mail.sogou.com/',
		'139.com': 'http://mail.10086.cn/',
		'hotmail.com': 'http://www.hotmail.com',
		'live.com': 'http://login.live.com/',
		'live.cn': 'http://login.live.cn/',
		'live.com.cn': 'http://login.live.com.cn',
		'189.com': 'http://webmail16.189.cn/webmail/',
		'yahoo.com.cn': 'http://mail.cn.yahoo.com/',
		'yahoo.cn': 'http://mail.cn.yahoo.com/',
		'eyou.com': 'http://www.eyou.com/',
		'21cn.com': 'http://mail.21cn.com/',
		'188.com': 'http://www.188.com/',
		'foxmail.com': 'http://www.foxmail.com',
		'outlook.com': 'http://www.outlook.com'
	}

	$(".personal_x2box1 span").click(function() {
		var email = $(".personal_x2box1 span").html().split('@')[1];
		console.log(email);
		for(var j in hash) {
			if(j == email) {
				window.open(hash[email])
			}
		}
	})
	$("#yanzheng").click(function(){
		var email = $(".personal_x2box1 span").html().split('@')[1];
		console.log(email);
		for(var j in hash) {
			if(j == email) {
				window.open(hash[email])
			}
		}
	})

});