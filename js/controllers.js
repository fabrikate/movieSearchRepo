var app = angular.module("movieSearch");
app.controller('searchController', function($scope, $http) {
  $scope.types = ['movie', 'series', 'episode'];
  $scope.media = {type: ''}
  $scope.findMovie = function() {
    $http.get('http://www.omdbapi.com/?s='+ $scope.userSearch +'&y=&plot=short&type=' + $scope.media.type + '&r=json').then(function(data) {
      console.log($scope.media.type);
      $scope.titles = data.data.Search;
    })
  }
})

app.controller('showController', function($scope, $http, $routeParams) {
  console.log($routeParams.titleId);
  $http.get('http://www.omdbapi.com/?i=' + $routeParams.titleId + '&plot=long&tomatoes=true&r=json').then(function(data) {
    console.log(data.data);
    $scope.movie = data.data;
  })
  $scope.getInfo = function() {
    $http.get('http://www.omdbapi.com/?s='+ $scope.userSearch +'&y=&plot=long&tomatoes=true&r=json').then(function(data) {
      console.log(data.data.Search);
      $scope.titles = data.data.Search;
    })
  }
})
