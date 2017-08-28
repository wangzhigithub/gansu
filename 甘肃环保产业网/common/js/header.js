$(function() {
	var searchArr;
	//定义一个search的，判断浏览器有无数据存储（搜索历史）
	if(localStorage.search) {
		//如果有，转换成 数组的形式存放到searchArr的数组里（localStorage以字符串的形式存储，所以要把它转换成数组的形式）
		searchArr = localStorage.search.split(",")
	} else {
		//如果没有，则定义searchArr为一个空的数组
		searchArr = [];
	}
	//把存储的数据显示出来作为搜索历史
	MapSearchArr();

	//搜索按钮点击事件
	$(".search_btn").click(function() {
		var val = $(".search_input").val();
		//点击搜索按钮时，去重
		KillRepeat(val);
		//去重后把数组存储到浏览器localStorage
		localStorage.search = searchArr;
		//然后再把搜索内容显示出来
		MapSearchArr();

		if(val == "") {
			alert("请输入值搜索")
		} else {
			searchArr.splice(0, searchArr.length - 5)
			console.log(searchArr)
			MapSearchArr();
			window.open("../../second/html/search_result.html?name=" + val);
			//				window.location.reload()

		}

	})

	function MapSearchArr() {
		var tmpHtml = "";
		for(var i = 0; i < searchArr.length; i++) {
			tmpHtml += "<li>" + searchArr[i] + "</li>"
		}
		$("#keyname").html(tmpHtml);
	}
	//去重
	function KillRepeat(val) {
		var kill = 0;
		for(var i = 0; i < searchArr.length; i++) {
			if(val === searchArr[i]) {
				kill++;
			}
		}
		if(kill < 1) {
			searchArr.push(val);
		}
	}

	//	输入框双击事件

	$(".search_input").dblclick(function() {

		$("#keyname").css({
			display: "block"
		});
		$("#keyname li").hover(function() {
			var i = $(this).index()
			$("#keyname li").eq(i).css({
				background: "#ddd"
			}).siblings().css({
				background: "#fff"
			})
			var val = $("#keyname li").eq(i).html();
			$(".search_input").val(val);

		}, function() {

			$("#keyname li").css({
				background: "#fff"
			});

		})
		$("#keyname li").click(function() {
			var i = $(this).index()
			var val = $("#keyname li").eq(i).html();
			$(".search_input").val(val);
			$("#keyname").css({
				display: "none"
			});
		})

	})

	//	键盘点击事件
	var now = -1; //声明一个变量值为-1，是为了在使用上下键的时候记录li的序号
	//在输入框中按上下键的时候对应的每一条数据的样式要有改变，这里使用了keydown这个事件足够了
	$('.search_input').keydown(function(ev) {
		if(ev.keyCode == 40) { //按下键时，now应该变大
			now++;
			$("#keyname li").eq(now).css({
				background: "#ddd"
			}).siblings().css({
				background: "#fff"
			})
			$('.search_input').val($("#keyname li").eq(now).text())
			//resLength表示的是长度，now表示的是序号，所以要用resLength-1
			if(now == 4) {
				now = -1; //当选择的数据已经到了最底部的时候，就要从顶部开始重新循环，所以now又回到-1
			}
		};
		if(ev.keyCode == 38) {
			now--; //按上键的时候，光标往上走，所以now减小  
			$("#keyname li").eq(now).css({
				background: "#ddd"
			}).siblings().css({
				background: "#fff"
			})
			$('.search_input').val($("#keyname li").eq(now).text())
			if(now < -1) {
				now = 4 //当光标走到最上面的时候，再循环到底部重新往上走
			};

		};
		if(ev.keyCode==13) { //当按下回车的时候，应该开始查询具体的结果了，所以这里用的是百度查询的接口
			var val = $("#keyname li").eq(now).html();
			$(".search_input").val(val);
			$("#keyname").css({
				display: "none"
			});

		}
	})
})