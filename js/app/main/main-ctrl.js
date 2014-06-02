munchApp

.controller('MainCtrl', function ($scope, users) {
    console.log('main ctrl');
    $scope.users = users.data;
    $scope.test = 'Angular Online!';
});