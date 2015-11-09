angular.module('app.directives.contactCard', [])
       .directive('contactCard', function() { // dependency injected function
         return { // object return in the directive
           restrict: 'E', // sets the HTML 5.0 element use this thing on element attribute class 'E A C'
           scope: {
             friend: '=', // binds both directions,
             title: '='
           },
           transclude: true,
           templateUrl: "templates/contactCard.html",
           link: function(scope, element, attrs) {
             console.log(attrs.id);
             element.bind('click', function() {
               alert('click');
             });
           },
           controller: function($scope, $interval) {
             console.log($scope.friend);
           },
           remove: true
         };
       });
