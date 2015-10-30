var app = angular.module("movieSearch");
app.controller('searchController', function($scope, $http) {
  $scope.findMovie = function() {
    $http.get('http://www.omdbapi.com/?s='+ $scope.userSearch +'&y=&plot=short&r=json').then(function(data) {
      console.log(data.data.Search);
      $scope.titles = data.data.Search;
    })
  }
})

app.controller('showController', function($scope, $http, $routeParams) {
  console.log($routeParams.titleId);
  $http.get('http://www.omdbapi.com/?i=' + $routeParams.titleId + '&plot=short&r=json').then(function(data) {
    console.log(data.data);
    $scope.movie = data.data;
  })
  $scope.getInfo = function() {
    $http.get('http://www.omdbapi.com/?s='+ $scope.userSearch +'&y=&plot=short&r=json').then(function(data) {
      console.log(data.data.Search);
      $scope.titles = data.data.Search;
    })
  }
})
