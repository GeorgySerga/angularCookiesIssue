var app = angular.module('plunker', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ngCookies']);

app.controller('MainCtrl', function($scope, $cookies) {

  console.log('create cookie at `/`');
  $cookies.put('testCookie', '1');
  console.log($cookies.get('testCookie'));

  $scope.name = 'World';
});
