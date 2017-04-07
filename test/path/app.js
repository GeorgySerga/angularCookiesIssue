var app = angular.module('plunker', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ngCookies']);

app.controller('MainCtrl', function($scope, $cookies) {

  console.log('create cookie at `/test/path/`');
  $cookies.put('testCookie', '2');
  console.log('Returns new cookie from `/test/path/`', $cookies.get('testCookie'));

  console.log('remove cookie with the same name');
  $cookies.remove('testCookie');
  console.log('Returns old cookie from `/`', $cookies.get('testCookie'));

  // multiple removes do not help,
  // remove method takes default path
  // or needs path parameter explicitly
  console.log('second remove cookie with the same name');
  $cookies.remove('testCookie');
  console.log('Returns old cookie from `/`', $cookies.get('testCookie'));

  $scope.name = 'World';
});
