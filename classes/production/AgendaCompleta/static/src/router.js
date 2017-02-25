var HOME_PAGE = "templates/home.html"
var ADD_PAGE = "templates/add.html"
var CONTACT_PAGE = "templates/contact.html"
var PDF_PAGE = "templates/pdf.html"

var PDF_CONTROLLER = "pdfCtrl"


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
	.when('/pdf', {
		templateUrl: PDF_PAGE,
		controller: PDF_CONTROLLER
	})
	.when('/contact', {
		templateUrl: CONTACT_PAGE
	})
	.otherwise({
		redirectTo: 'home'
	})
})