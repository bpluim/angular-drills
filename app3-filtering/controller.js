angular.module("thirdApp").controller("mainController", function($scope, mainSrvc) {

    $scope.users = mainSrvc.users();
});