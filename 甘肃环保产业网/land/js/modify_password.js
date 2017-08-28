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

	//   请求数据成功后判断密码是否输入正确

	var oldpas = 123456789;

	$("#old_pas").blur(function() {
		var par = $(this).parent().parent().find(".td3");
		if($("#old_pas").val() == oldpas) {
			$(this).parent().find("span").css({
				display: "block"
			})
			par.css({
				display: "none"
			})
		} else {
			$(this).parent().find("span").css({
				display: "none"
			})
			par.css({
				display: "block"
			})
			par.html("！请输入正确的密码");
		}

		if($("#old_pas").val() == "") {
			$(this).parent().find("span").css({
				display: "none"
			})
			par.css({
				display: "none"
			})
		}
	})



	//	新密码验证
	$("#pas").blur(function() {
	
		var pass = $(this).val();
		var pass2 = $("#new_pas").val();
		var par = $(this).parent().parent().find(".td3");
		var reg = /^(?=.*\d)(?=.*[a-z]).{6,24}$/;

		if(reg.test(pass) || pass == pass2) {
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
	$("#new_pas").blur(function() {
		var pass1 = $("#pas").val();
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
	
	
//	点击按钮的时候让他的红字消失
	$("#old_pas").click(function() {
		var par = $(this).parent().parent().find(".td3");
		par.css({
			display: "none"
		})
	})
	$("#pas").click(function() {
		var par = $(this).parent().parent().find(".td3");
		par.css({
			display: "none"
		})
	})
	$("#new_pas").click(function() {
		var par = $(this).parent().parent().find(".td3");
		par.css({
			display: "none"
		})
	})
	

	$("#fasong").click(function() {
		var t1 = $(".personal_old_pas .td2 span");
		var t2 = $(".personal_pas .td2 span");
		var t3 = $(".personal_new_pas .td2 span");
		var k = 0;

		function aa() {
			if((t1).css("display") != 'none') {　　　　
				k++;
			}
			if((t2).css("display") != 'none') {　　　　
				k++;
			}
			if((t3).css("display") != 'none') {　　　　
				k++;
			}

		}

		aa();
		if(k == 3) {
			//判断从后台请求回来的数据是否成功,成功的话
			alert("修改成功")
			window.open("per_information.html")
			window.location.reload();
		}

	})

});