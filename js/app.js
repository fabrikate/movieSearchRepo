var app = angular.module('movieSearch', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/search.html',
    controller: 'searchController'
  })
  .when('/:titleId/show', {
    templateUrl: 'partials/show.html',
    controller: 'showController'
  })
  .otherwise({
    templateUrl: 'partials/error.html',
    controller: 'errorController'
  })
});

$(document).ready(function() {
  $('.hide').hide();
})
