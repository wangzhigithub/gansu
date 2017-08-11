//收藏本页
function AddFavorite(sURL, sTitle) {
	try {
		window.external.addFavorite(sURL, sTitle);
	} catch(e) {
		try {
			window.sidebar.addPanel(sTitle, sURL, "");
		} catch(e) {
			alert("加入收藏失败，请使用Ctrl+D进行添加");
		};
	};
};

//			//收藏设置页面（首页）
//			function addToFavorite() {
//				var d = "http://www.jsfoot.com/";
//				var c = "jsfoot代码素材";
//				if(document.all) {
//					window.external.AddFavorite(d, c);
//				} else {
//					if(window.sidebar) {
//						window.sidebar.addPanel(c, d, "");
//					} else {
//						alert("对不起，您的浏览器不支持此操作!\n请您使用菜单栏或Ctrl+D收藏本站。");
//					}
//				}
//			}

//设为首页
function SetHome(obj) {
	try {
		obj.style.behavior = 'url(#default#homepage)';
		obj.setHomePage('http://www.jsfoot.com/');
	} catch(e) {
		if(window.netscape) {
			try {
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			} catch(e) {
				alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
			};
		} else {
			alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将'http://www.sina.com.cn/'设置为首页。");
		};
	};
};
//主体的其他js			
$(function() {
	//用angualr的请求数据的话 相对来说比较简单,我只是做了主体1其他的没有做
	(function() {
		var app = angular.module('app', []);
		app.controller('Ctrl', function($scope, $http, $rootScope) {

			$http({
				url: "../listData.json",
				mettod: 'get'
			}).then(function(data) {
				$scope.txt = data.data;
				$scope.txt1 = data.data[0].data.list;
			})

		})
	})();

	//获取证书查询的内容
	$(".section2_right_x4").click(function() {

		var cer1 = $('.section2_right_x1').find('option:selected').html();
		var cer2 = $('.section2_right_x2').find('option:selected').html();
		var cer3 = $("input[class='section2_right_x3']").attr("value")

	})

	//	百叶窗轮播插件的使用
	jQuery(function($) {
		$(window).load(function() {
			$('#slider').nivoSlider({
				directionNav: false,
				captionOpacity: 0.4,
				controlNav: true,
				boxCols: 8,
				boxRows: 4,
				slices: 15,
				effect: 'random',
				animSpeed: 500,
				pauseTime: 3000
			});
		});
	});

	//swiper轮播插件
	var swiper = new Swiper('.swiper-container', {
		autoplay: 5000,
		speed: 1500,
		loop: true,
		grabCursor: true,
		paginationClickable: true
	})

	$('.arrow-left').on('click', function(e) {
		e.preventDefault()
		swiper.swipePrev()
	})
	$('.arrow-right').on('click', function(e) {
		e.preventDefault()
		swiper.swipeNext()
	})

	//	鼠标悬停停止轮播、移开重新开始轮播
	$(".swiper-container").hover(function() {
		swiper.stopAutoplay();
	}, function() {
		swiper.startAutoplay();
	})

	//友情链接 可以根据选中那个然后跳转页面    
	$(".section8_1").bind('change', function() {
		//获取被选中的option标签  
		var vs = $('.section8_1  option:selected').html();
		if($(this).val() == 1) {
			window.open("http://www.gansuepi.com/");
		}
	})

	$(".section8_2").bind('change', function() {
		if($(this).val() == 1) {
			window.open("http://www.gsly.cn/");
		}
	})

	$(".section8_3").bind('change', function() {
		if($(this).val() == 1) {
			window.open("http://www.gansu.gov.cn/");
		}
		if($(this).val() == 2) {
			window.open("http://www.gsep.gansu.gov.cn/");
		}
	})
	$(".section8_4").bind('change', function() {
		if($(this).val() == 1) {
			window.open("http://hbj.lanzhou.gov.cn/");
		}
		if($(this).val() == 2) {
			window.open("http://www.tshb.gov.cn/");
		}
	})

	//解决input的placeholder的样式设置问题，兼容多种浏览器

	$(function() {

		handlePlaceholderForIE();
	});

	function handlePlaceholderForIE() {
		// placeholder attribute for ie7 & ie8
		if(jQuery.browser.msie && jQuery.browser.version.substr(0, 1) <= 9) {

			// ie7&ie8
			jQuery('input[placeholder], textarea[placeholder]').each(function() {
				var input = jQuery(this);
				jQuery(input).val(input.attr('placeholder'));
				jQuery(input).focus(function() {
					if(input.val() == input.attr('placeholder')) {
						input.val('');
					}
				});
				jQuery(input).blur(function() {
					if(input.val() == '' || input.val() == input.attr('placeholder')) {
						input.val(input.attr('placeholder'));
					}
				});
			});
		}
	}

});