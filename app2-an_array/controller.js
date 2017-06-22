angular.module('arrayApp').controller('arrayController', function($scope, arraySrvc) {
    
    $scope.users = arraySrvc.users();
})