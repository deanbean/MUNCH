munchApp

.controller('ProfileCtrl', function ($scope, $rootScope, MunchService, user) {
    console.log('user!', user.data);

    if (!$rootScope.user) $rootScope.user = user.data;

    $scope.severities = [{name: 'allergy'}, {name: 'preference'}];
    $scope.newRestriction = {};

    $scope.addRestriction = function (obj) {
        //var newRestriction = {name: obj.}
        $rootScope.user.restrictions.push(obj);
        $scope.newRestriction = {};
    }
});