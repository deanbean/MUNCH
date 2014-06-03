munchApp

.controller('MainCtrl', function ($scope, $rootScope, $firebase, MunchService, user, results) {
    $scope.results = results.data;
    var userRef = new Firebase("https://munchio.firebaseio.com/users/");
    $scope.fireUser = $firebase(userRef);

    //console.log('fire-user ', $scope.fireUser.child('username'));
    
    $rootScope.user = user.data;

    $scope.saveResult = function (obj) {
        // save result here
        MunchService.save('user-results/', obj);
    }
});