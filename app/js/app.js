var app = angular.module('meanTea', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'meanTeacontroller'
      })
      .when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'contactController'
      })
      .when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'aboutController'
      })
      .when('/shopping-cart', {
        templateUrl: 'partials/shoppingCart.html',
        controller: 'shoppingCart'
      })
});
