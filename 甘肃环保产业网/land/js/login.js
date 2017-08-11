$(function(){


////	var reg=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
////	var reg1=/^[A-Za-z]+$/;	



  
//提交的时候进行判断  
$("#denglu").click(function(){
	var user = $("#username_1").val();
	var pwd = $("#pwd_1").val();
	
	if(user==""){
		$(".tishi").css({display:"block"});
		$(".tishi span").html("！请输入用户名")
	}
	if(pwd==""){
		$(".tishi").css({display:"block"});
		$(".tishi span").html("！请输入密码")
	}
	
	if (pwd=="" && user=="") {
		$(".tishi").css({display:"block"});
		$(".tishi span").html("！请输入用户名和密码")
	}
	
//请求后台的数据来看看密码和用户名是否存在进行判断



       
   
	
	
})
  
	
})


//jQuery将用户名密码存储到cookie中
    $(document).ready(function () {  
        if ($.cookie("rmbUser") == "true") {  
        $("#ck_rmbUser").attr("checked", true);  
        $("#username_1").val($.cookie("username"));  
        $("#pwd_1").val($.cookie("password"));  
        }  
    });  
  
    //记住用户名密码  
    function Save() {  
        if ($("#ck_rmbUser").attr("checked")) {  
            var str_username = $("#username_1").val();  
            var str_password = $("#pwd_1").val();  
            $.cookie("rmbUser", "true", { expires: 7 }); //存储一个带7天期限的cookie  
            $.cookie("username", str_username, { expires: 7 });  
            $.cookie("password", str_password, { expires: 7 });  
        }  
        else {  
            $.cookie("rmbUser", "false", { expire: -1 });  
            $.cookie("username", "", { expires: -1 });  
            $.cookie("password", "", { expires: -1 });  
        }  
    };  
