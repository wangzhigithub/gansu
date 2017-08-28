$(function() {
	$("#header").load("../../common/html/header.html");

	//用angualr的请求数据的话 相对来说比较简单,我只是做了主体1其他的没有做

	var app = angular.module('app', []);
	app.controller('Ctrl', function($scope, $http) {

		$scope.arrayLimit = 12;
		angualr();
		var i = 1;
		
		$("#btn1").click(function() {
			
            if($scope.arrayLimit<=$scope.txt.length){
            	 i++;
				$scope.arrayLimit = 12 * i;
	            angualr();
            }else{
            	alert("已经没有了")
            }
            
		})
    
		function angualr() {
			$scope.sdata2 = {
				name: $(".personal_r2_li3 p span").html()
			}
			$http({
				url: "../download.json",
				method: 'get',
				params: $scope.sdata2,
				dataType: 'json',
			}).then(function(data) {
				$scope.txt = data.data.data;

			})
		}

	})

});