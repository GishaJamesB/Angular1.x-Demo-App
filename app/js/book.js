'use strict';

angular.module('myApp.book', ['ngRoute', 'ig.linkHeaderParser'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/book', {
    templateUrl: '/templates/book/index.html',
    controller: 'BookCtrl'
  });
}])

.controller('BookCtrl', ['$scope', 'Data', 'linkHeaderParser',  function($scope, Data, linkHeaderParser) {
  $scope.books = ''
  $scope.Url = 'https://www.anapioficeandfire.com/api/books?page=1'
  $scope.prevUrl = 'https://www.anapioficeandfire.com/api/books?page=1'
  $scope.nextUrl = 'https://www.anapioficeandfire.com/api/books?page=2'
  $scope.progress = 1

  if($scope.books == ''){
    loadData($scope.Url)
  }

  $scope.loadData = function($url){
    loadData($url)
  }

  function loadData($url){
    $scope.progress = 1
    Data.get($url,{
    }).then(function (result) {
        $scope.books  = result.data
        $scope.progress = 0
        var json = linkHeaderParser.parse(result.headers('Link'))

    })
  }

  $scope.loadBookDetails = function(book){
    $scope.characterDetails = ''
    bookDetails(book)
  }

  function bookDetails(book){
    $scope.bookDetails = book
    $scope.bookDetails.charcts = []
    angular.forEach($scope.bookDetails.characters, function(value, key) {
       Data.get(value,{
        }).then(function (result) {
            $scope.bookDetails.charcts.push(result.data)
        })
    })
  }

  $scope.loadCharacterDetails = function(character){
    characterDetails(character)
  }

  function characterDetails(character){
    $scope.characterDetails = character
  }

}]);