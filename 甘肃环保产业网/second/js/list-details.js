$(function() {
	$("#header").load("../../common/html/header1.html");


	
//百度分享	
	window._bd_share_config = {
				"common": {
					"bdSnsKey": {},
					"bdText": "",
					"bdMini": "2",
					"bdMiniList": false,
					"bdPic": "",
					"bdStyle": "0",
					"bdSize": "16"
				},
				"share": {
					"bdSize": 16
				}
			};
	with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
		

//  分页插件的请求数据
	$(".pageBox").pageFun({ /*在本地服务器上才能访问哦*/
		interFace: "../list_1.json",
		/*接口*/
		displayCount: 25,
		/*每页显示总条数*/
		maxPage: 5,
		/*每次最多加载多少页*/
		dataFun: function(data) {
			var dataHtml = "<p>"+data.title+"</p>"
			return dataHtml;
		},
		pageFun: function(i) {
			var pageHtml = '<li class="pageNum">' + i + '</li>';
			return pageHtml;
		}

	});

    
  
//用angualr的请求数据的话 相对来说比较简单,我只是做了主体1其他的没有做
	(function() {
		var app = angular.module('app', []);
		
//		标题的请求
		app.controller('Ctrl1', function($scope, $http, $rootScope) {

			$http({
				url: "../list_1.json",
				mettod: 'get'
			}).then(function(data) {
				$scope.txt1 = data.data.biaoti;
				
				//收藏点击以后
				$scope.menuState={};    //把变量绑定上作用域
                $scope.menuState.show=true;
                $scope.menuState1={};    //把变量绑定上作用域
                $scope.menuState1.show=false;
				$scope.change = function(){
				    $scope.menuState.show=!$scope.menuState.show;
				    $scope.menuState1.show=!$scope.menuState1.show;
				}		
				

				//   判断pageDiv下p的个数
			     var plen=data.data.data.length;
			     console.log(plen);
			     if(plen>=25){
			     	$(".page").css({display:"block"})
			     }else{
			     	$(".page").css({display:"none"})
			     }
				
			})

		})
		
		
		app.controller('Ctrl', function($scope, $http, $rootScope) {

			$http({
				url: "../list.json",
				mettod: 'get'
			}).then(function(data) {
				$scope.txt = data.data.data;
//				$scope.txt1 = data.data[0].data.list;
                				

			})

		})
	})();
   
   
   
   

	//	接受从..里面传入的hash值
	(function() {
		//  	     判断接受的值,然后从后台数据调去相对应的数据渲染到页面当中
		if(getUrlParams("nub")) {
            
            
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