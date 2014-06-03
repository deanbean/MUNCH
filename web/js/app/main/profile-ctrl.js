munchApp

.controller('ProfileCtrl', function ($scope, $rootScope, MunchService, user) {
    console.log('user!', user.data);

    if (!$rootScope.user) $scope.user = user.data;
});