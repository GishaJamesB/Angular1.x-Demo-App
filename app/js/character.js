'use strict';

angular.module('myApp.character', ['ngRoute', 'ig.linkHeaderParser'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/characters', {
    templateUrl: '/templates/characters/index.html',
    controller: 'CharacterCtrl'
  });
}])

.controller('CharacterCtrl', ['$scope', 'Data', 'linkHeaderParser',  function($scope, Data, linkHeaderParser) {
  $scope.Url = 'https://www.anapioficeandfire.com/api/characters?page=1'
  $scope.prevUrl = $scope.Url
  $scope.characters = ''
  if($scope.characters == ''){
    loadData($scope.Url)
  }

  $scope.loadData = function(url){
    console.log(url)
    loadData(url)
  }

  function loadData(url){
    $scope.progress = 1
    Data.get(url,{
    }).then(function (result) {
        $scope.characters  = result.data
        $scope.progress = 0
        var pages = linkHeaderParser.parse(result.headers('Link'))
        console.log(pages)
        console.log(pages.next.url)
        $scope.nextUrl = pages.next.url
        if(pages.prev){
          $scope.prevUrl = pages.prev.url
        }

    })
  }

}]);