munchApp

.controller('MainCtrl', function ($scope, results) {
    console.log('main ctrl', results.data);
    $scope.results = results.data;
    $scope.test = 'Angular Online!';
});