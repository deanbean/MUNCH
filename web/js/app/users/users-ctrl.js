munchApp

.controller('UsersCtrl', function ($scope, $rootScope, MunchService, user, users) {
    if (!$rootScope.user) $scope.user = user.data;
    $scope.users = users.data;
    $rootScope.friends = [];

    $scope.inviteUser = function (user) {
        $rootScope.friends.push(user);
    }
});