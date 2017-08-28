$(function() {
	$("#header").load("../../common/html/header.html");

	//  三级联动
	(function() {
		var pro = $("#province");
		var city = $("#city");
		var dAC = $("#districtAndCounty");
		var num1 = null;
		var num2 = null;

		init();
		pro.change(function() {
			num1 = pro.prop("selectedIndex");
			city.find("option").eq(0).siblings().remove();
			dAC.find("option").eq(0).siblings().remove();
			if(num1 !== 0) {
				for(var i = 0; i < province[num1 - 1].city.length; i++) {
					var $temp = $("<option value=\"\">" + province[num1 - 1].city[i].name + "</option>");
					city.append($temp);
				}
			}
		});
		city.change(function() {
			num2 = city.prop("selectedIndex");
			dAC.find("option").eq(0).siblings().remove();
			if(num2 !== 0) {
				for(var i = 0; i < province[num1 - 1].city[num2 - 1].districtAndCounty.length; i++) {
					var $temp = $("<option value=\"\">" + province[num1 - 1].city[num2 - 1].districtAndCounty[i] + "</option>");
					dAC.append($temp);
				}
			}
		})

		function init() {
			var pro = $("#province");
			for(var i = 0; i < province.length; i++) {
				var $temp = $("<option value=\"\">" + province[i].name + "</option>");
				pro.append($temp);
			}
		}
	})();

	//获取图片预览
	function reads(fil) {
		var reader = new FileReader();
		reader.readAsDataURL(fil);
		reader.onload = function() {
			document.getElementById("dd_img").innerHTML += "<img src='" + reader.result + "'>";
			
			$.ajax({
				type: "post",
				url: "http://demo.helloweba.com/jsonp.php?callback=?",
				data:{
					zashi:reader.result
				} ,
				dataType: "json",
				success: function(data) {
                  
				}

			});
			
//			 这相当后台返回来的值,暂时的保存在页面上
			 var  src="http://127.0.0.1:8020/甘肃环保产业网/img";
			 $("input[name='wangzhi']").val(src);
			//到这结束 
			 
		};
	}
// 上传点击
	$(".filepath").on("change", function() {

		$("#dd_img span").html(" ")
		var fil = this.files;
		for(var i = 0; i < fil.length; i++) {
			reads(fil[i]);
		}

	})
//	预览点击
	$(".yulan").click(function() {

		$(".Dmid").css({
			display: "block"
		});
		$(".dd").css({
			display: "block"
		});
		var w = $("#dd_img img").width()
		if(w < 100) {

		}
		var h = $("#dd_img img").height() + 20;
		if(h <= 40) {
			h = 40
		}
		$("#dd_img").css({
			height: h
		})

	})
	$(".close").click(function() {
		temolte = "<span>你还没有上传图片</span>"
		$("#dd_img").html(temolte)
	})

	$(".dd_h").click(function() {

		$(".Dmid").css({
			display: "none"
		});
		$(".dd").css({
			display: "none"
		});
	})

	$("#myform").submit(function() {
		//				var data = $(this).serialize(); //序列化表单数据 

		var mingcheng = $("input[name='mingcheng']").val();
		var lxing1 = $('.mem_seclect1 option:selected').html();
		var lxing2 = $('.mem_seclect2 option:selected').html();
		var hangye = $("input[name='hangye']").val();
		var guimo = $('.mem_seclect3 option:selected').html();
		var ziben = $("input[name='ziben']").val();
		var province = $('#province option:selected').html();
		var city = $('#city option:selected').html();
		var districtAndCounty = $('#districtAndCounty option:selected').html();
		var dizhi = $("input[name='dizhi']").val();
		var phone = $("input[name='phone']").val();
		var fax = $("input[name='fax']").val();
		var email = $("input[name='email']").val();
		var introduce = $(".text2").val();
		var src=$("#dd_img img")[0].src;

		var data = {
			"mingcheng": mingcheng,
			"lxing1": lxing1,
			"lxing2": lxing2,
			"hangye": hangye,
			"guimo": guimo,
			"ziben": ziben,
			"province": province,
			"city": city,
			"districtAndCounty": districtAndCounty,
			"dizhi": dizhi,
			"phone": phone,
			"fax": fax,
			"email": email,
			"introduce": introduce,
			"src":src
		}

		$.ajax({
			type: "post",
			url: "http://demo.helloweba.com/jsonp.php?callback=?",
			data: data,
			dataType: "json",
			success: function(data) {

			}

		});

		return false;
	});

});