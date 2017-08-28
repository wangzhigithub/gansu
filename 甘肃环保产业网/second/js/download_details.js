$(function() {
	$("#header").load("../../common/html/header.html");
	
	
    //用angualr的请求数据的话 相对来说比较简单,我只是做了主体1其他的没有做
	(function() {
		var app = angular.module('app', []);
		

//		热门文章和环保要闻
		app.controller('Ctrl', function($scope, $http, $rootScope) {

			$http({
				url: "../list.json",
				mettod: 'get'
			}).then(function(data) {
				$scope.txt = data.data.data;
//				$scope.txt1 = data.data[0].data.list;
                				

			})

		})
//		相关下载
		app.controller('Ctrl1', function($scope, $http, $rootScope) {

			$http({
				url: "../download.json",
				mettod: 'get'
			}).then(function(data) {
				$scope.text = data.data.data;
//				$scope.txt1 = data.data[0].data.list;
                				

			})

		})
		
	})();
   


	//	接受从..里面传入的hash值
	(function() {
		//  	     判断接受的值,然后从后台数据调去相对应的数据渲染到页面当中
		if(getUrlParams("nub")) {
			var ll = getUrlParams("nub");

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

});