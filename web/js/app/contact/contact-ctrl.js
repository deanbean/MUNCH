munchApp

.controller('ContactCtrl', function ($scope, $rootScope, MunchService, contact) {
    $scope.contact = contact.data;
});