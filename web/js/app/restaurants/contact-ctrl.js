munchApp

.controller('ContactCtrl', function ($scope, $rootScope, MunchService, contact) {
    console.log('foo')
    $scope.contact = contact.data;
});