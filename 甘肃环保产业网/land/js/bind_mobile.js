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
		var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
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
			par.html("！请输入正确的手机格式");
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
	
//	手机验证码倒计时
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

				} else {
					clearInterval(timer);
					$(".td2 .text").html('获取验证码');
					$(".td2 .text").css({"background-color":"#eeeeee","pointer-events":"auto"});					
				}
			},1000);

	});

	
	
	
	
	//图片验证
	var verifyCode = new GVerify("v_container");

	$("#fasong").click(function() {
				var t1 = $(".personal_rbox_email .td2 span");
				var k = 0;
				function aa() {
					if((t1).css("display") != 'none') {　　　　
						k++;
					}
					//       判断res就是输入的值是否等于图片里面的值
					var res = verifyCode.validate(document.getElementById("tu").value);
					if(res) {　
						k++;
					}else{
						$(".personal_rbox_tupin #tu").val("");
						alert("图片验证码输入不正确");
						
					}
				}
		
				aa();
				if(k==2) {
		//         判断从后台请求回来的数据是否成功,成功的话
		          alert("修改成功")
		          window.open("per_information.html")
		          window.location.reload();
				}


	})
    


});