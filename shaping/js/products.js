(function() {
  app = angular.module("store-directives", []);
  // Directives
  app.directive('productTabs', function() {
    return {
      restrict: "E",
      templateUrl: "directives/product-tabs.html",
      controller: function() {
        this.tab = 1;
        this.setTab = function(newValue) {
          this.tab = newValue;
        };
        this.isSet = function(tabName) {
          return this.tab === tabName;
        };
      },
      controllerAs: "tab"
    };
  });

  app.directive('productGallery', function() {
    return {
      restrict: "E",
      templateUrl: "directives/product-gallery.html",
      controller: function() {
        this.current = 0;
        this.setCurrent = function(imageNumber) {
          this.current = imageNumber || 0;
        };
      },
      controllerAs: "gallery"
    };
  });

  app.directive('productReviews', function() {
    return {
      restrict: "E",
      templateUrl: 'directives/product-reviews.html'
    }
  });

  app.directive('productDescription', function() {
    return {
      restrict: "E",
      templateUrl: 'directives/product-description.html'
    };
  });

  app.directive('productTitle', function() {
    return {
      restrict: "E",
      templateUrl: 'directives/product-title.html'
    };
  });

  app.directive('productSpecs', function() {
    return {
      restrict: "A",
      templateUrl: 'directives/product-specs.html'
    };
  });
})();
