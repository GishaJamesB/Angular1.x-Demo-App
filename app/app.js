'use strict';

var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.book',
  'myApp.character'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {


  $routeProvider.otherwise({redirectTo: '/book'});
}]);
