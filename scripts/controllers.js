
// 控制器模块，专门管理控制器
angular.module('Controllers', [])

.controller('DemoController', ['$scope', function ($scope) {
	console.log('控制器成功启动');
}])

// 首页控制器
.controller('HomeController', ['$scope', '$http', function ($scope, $http) {
	$http({
		method: 'get',
		url: './public/php/moz0.php',
		params: {
			page: 1
		}
	}).then(function (response) {
		$scope.vols = response.data;
	});
	var navAs = angular.element(document.querySelectorAll('.page a'));
	navAs.removeClass('current');
	navAs.eq(0).addClass('current');
}])

// 推荐控制器
.controller('RecommendController', ['$scope', function ($scope) {
	var navAs = angular.element(document.querySelectorAll('.page a'));
	navAs.removeClass('current');
	navAs.eq(1).addClass('current');
}])

// 关于控制器
.controller('AboutController', ['$scope', function ($scope) {
	var navAs = angular.element(document.querySelectorAll('.page a'));
	navAs.removeClass('current');
	navAs.eq(2).addClass('current');
}])