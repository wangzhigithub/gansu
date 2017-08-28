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


//  请求成功后
   var username='admin';
   var phone='18234456888';
    $("#user_name").val(username)
    $("#phone").val(phone)
   
   
//点击保存
$("#fasong").on("click",function(){
	var  username=$("#user_name").val();
	var  realname=$("#real_name").val();
	var  gender=$("input[type='radio']:checked").parent().find("span").html();
	var  province=$('#province option:selected').html();
	var  city=$('#city option:selected').html();
	var  districtAndCounty=$('#districtAndCounty option:selected').html();
    var phone=$("#phone").val();
	var email=$("#email").val();
	var qq=$("#qq").val();
	window.location.href="per_information.html"
	
})
 
   
   
});