angular.module('apiApp').controller('mainController', function($scope, mainSrvc) {
   
    $scope.getCharacter = function(num) {
        mainSrvc.getCharacters(num).then(function(results) {
            console.log(results);
            $scope.character = results;
        });
    }

});