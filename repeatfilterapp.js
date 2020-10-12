!function(){
    "use strict";
    var shopList= ["Eyeliner","Lipstick","Kajal","Foundation","Mascara","Hairgel","BB cream","Sandal powder","Saffron cream"];

    var shopListDetails= [
        { name:"Eyeliner", price:749, quan:100},
        { name:"Lipstick", price:340,quan:707},
        { name:"Kajal", price:235,quan:678},
        { name:"Foundation", price:889,quan:400},
        { name:"Mascara", price:675,quan:100},
        { name:"Hairgel", price:235,quan:140},
        { name:"BB cream", price:567,quan:190},
        { name:"Sandal powder", price:895,quan:10},
        { name:"Saffron cream", price:2320,quan:13},
    ];

    angular.module('repApp', [])
    .controller('repController', repController);

    repController.$inject = ['$scope'];
    function repController($scope) {
        $scope.shopList = shopList;
        $scope.shopListDetails = shopListDetails;
        $scope.addToTable = function(){
            var newItem = {
                name: $scope.newItemName,
                price: $scope.newItemPrice,
                quan: $scope.newItemQuan
            };
            $scope.shopListDetails.push(newItem);
        };
    }
}();
