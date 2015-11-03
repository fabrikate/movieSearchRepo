var app = angular.module("movieSearch");


app.controller('searchController', ['$scope', '$http', function($scope, $http) {
  $scope.types = ['movie', 'series', 'episode'];
  $scope.media = {type: ''}
  $scope.findMovie = function() {
    $http.get('http://www.omdbapi.com/?s='+ $scope.userSearch +'&y=&plot=short&type=' + $scope.media.type + '&r=json').then(function(data) {
      console.log($scope.media.type);
      $scope.titles = data.data.Search;
    })
  }
}])

app.controller('showController', function($scope, $http, $routeParams) {
  $http.get('http://www.omdbapi.com/?i=' + $routeParams.titleId + '&plot=long&tomatoes=true&r=json').then(function(data) {
    $scope.movie = data.data;
    $scope.title = data.data.Title;
    $http.get('http://api.giphy.com/v1/gifs/search?q=' + $scope.title + '&api_key=dc6zaTOxFJmzC').then(function(data) {
      var randomNum = Math.floor(Math.random() * 25);
      $scope.giphy = data.data.data[randomNum].images.original.url;
    })
  })

});

