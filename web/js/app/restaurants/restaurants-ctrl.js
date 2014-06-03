munchApp

.controller('RestaurantsCtrl', function ($scope, $rootScope, MunchService, restaurants, user) {
    $scope.user = user.data;
    $scope.restaurants = restaurants.data;
});