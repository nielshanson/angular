angular
  .module('app')
  .controller('homeCtrl', ['$scope', 'Friends', function($scope, Friends) { // square brackets here are for minification of code
    $scope.title = "Home";
    Friends.get().then(function(data) {
      $scope.friends = data;
    });
    $scope.items = ['home','about','contact'];
    $scope.selectedValue = 'home';

    $scope.save = function() {
      $http.post('/api/friends', friends); // puts the data back in
    };
  }]);
