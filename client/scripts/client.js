var myApp = angular.module('myApp', []);

myApp.controller('OneController', ['$scope', 'MovieService', function($scope, MovieService) {
  $scope.newMovie = MovieService.newMovie;
  $scope.allMovies = MovieService.allMovies;
  $scope.addMovie = MovieService.addMovie;
  console.log(MovieService.newMovie);
  console.log(MovieService.allMovies);
}]);

myApp.controller('TwoController', ['$scope','MovieService', function($scope, MovieService) {
  $scope.allMovies = MovieService.allMovies;
}]);

myApp.factory('MovieService', [function() {
  //Private

var allMovies = {
  movies : []
};

var newMovie = {
  name : '',
  desc : '',
  director : '',
  length : ''
};

function addMovie() {

  var movie = {
    name : newMovie.name,
    desc : newMovie.desc,
    director : newMovie.director,
    length : newMovie.length
  };
  allMovies.movies.push(movie);
  console.log(allMovies.movies);
}


  //Public
  return {
    newMovie : newMovie,
    allMovies : allMovies,
    addMovie : addMovie
  };
}]);
