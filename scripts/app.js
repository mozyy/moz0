// angularJS入口
var moz0 = angular.module('moz0', ['ngRoute', 'Controllers']);

moz0.config(['$routeProvider', function ($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: './views/home.html',
		controller: 'HomeController'
	})
	.when('/recommend', {
		templateUrl: './views/recommend.html',
		controller: 'RecommendController'
	})
	.when('/about', {
		templateUrl: './views/about.html',
		controller: 'AboutController'
	})
	.otherwise({
		redirectTo: '/'
	})
}]);

moz0.run(['$rootScope', '$http', function ($rootScope, $http) {

	var navAs = angular.element(document.querySelectorAll('.page a'));
	navAs.on('click', function(){
		navAs.removeClass('current');
		angular.element(this).addClass('current');
		console.log(this);
	})
}])