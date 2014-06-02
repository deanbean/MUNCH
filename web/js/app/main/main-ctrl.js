munchApp

.controller('MainCtrl', function ($scope, $rootScope, MunchService, results) {
    console.log('main ctrl', results.data);
    if (!$rootScope.users) {
        $rootScope.users = {
            1: {id: 1, savedResults: [],},
            2: {id: 2, savedResults: [],},
        }
    }
    $scope.results = results.data;
    $scope.test = 'Angular Online!';

    $scope.saveResult = function (obj) {
        // save result here
        MunchService.save('user-results/', obj, 1);
    }

    $scope.user = $rootScope.users[1];
});