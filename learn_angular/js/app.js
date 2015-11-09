var app = angular
  .module('app', [
    'ui.router',
    'app.directives.contactCard' // dont get an error make sure directives here
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider // defines all the routing
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl',
        resolve: {
          // before template and controler run a dependant API
          friends: ['$http', function($http) {
            return $http.get('/api/friends.json').then(function(response) {
              return response.data; // actual friends data
            })
          }]
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'templates/contact.html'
      })
  }])
