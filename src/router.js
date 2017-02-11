var HOME_PAGE = "templates/home.html"
var ADD_PAGE = "templates/add.html"
var CONTACT_PAGE = "templates/contact.html"

angular.module('agendaApp')
.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		redirectTo:'home'
	})
	.when('/home', {
		templateUrl: HOME_PAGE
	})
	.when('/add', {
		templateUrl: ADD_PAGE
	})
	.when('/contact', {
		templateUrl: CONTACT_PAGE
	})
	.otherwise({
		redirectTo: 'home'
	})
})