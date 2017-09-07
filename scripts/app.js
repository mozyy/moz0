// angularJS入口
var moz0 = angular.module('moz0', ['ngRoute', 'Controllers']);

moz0.config(['$routeProvider', function ($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: './views/home.html',
		controller: 'HomeController'
	})
	.when('/recommend', {
		templateUrl: './views/recommend.html',
		controller: 'RecommendContorller'
	})
	.when('/about', {
		templateUrl: './views/about.html',
		controller: 'AboutContorller'
	})
	.otherwise({
		redirectTo: '/'
	})
}]);

moz0.run(['$rootScope', '$http', function ($rootScope, $http) {

	$rootScope.demo = function (){
		// $http({
		// 	method: 'get',
		// 	url: './public/php/moz0.php',
		// 	params: {
		// 		user: 1
		// 	}
		// }).then(function (response) {
		// 	// document.querySelector('.login').innerHTML += response.data;
		// })
		console.log(1);
	}
}])