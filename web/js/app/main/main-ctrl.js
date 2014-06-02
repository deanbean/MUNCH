munchApp

.controller('MainCtrl', function ($scope, foods) {
    console.log('main ctrl', foods);
    $scope.foods = foods.data;
    $scope.test = 'Angular Online!';
});