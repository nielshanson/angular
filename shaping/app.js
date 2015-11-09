

(function () {
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.00,
      description: "The Quick Brown Fox Jumpped Over the Lazy Dog.",
      canPurchase: true,
      soldOut:false
    },
    {
      name: 'Prntagonal Gem',
      price: 5.95,
      description: "The Quick Brown Fox Jumpped Over the Lazy Dog.",
      canPurchase: false,
      soldOut:false
    }
  ];
})(); // wrap entire application in closure
