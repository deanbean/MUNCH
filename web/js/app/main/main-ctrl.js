munchApp

.controller('MainCtrl', function ($scope, $rootScope, $firebase, MunchService, results) {
    $scope.results = results.data;
    //var userRef = new Firebase("https://munchio.firebaseio.com/users/-JOTOAanXpKaaqE3c57X/");
    // Automatically syncs everywhere in realtime
    //$scope.user = $firebase(userRef);
    
    $scope.test = 'Angular Online!';

    $rootScope.user = {id: 1, username: 'sam', restrictions: ['gluten', 'dairy'], savedResults: [], location: 'Canada'};

    console.log('user: ', $scope.user);
    //$scope.users = $rootScope.users;

    $scope.saveResult = function (obj) {
        // save result here
        MunchService.save('user-results/', obj);
    }
});