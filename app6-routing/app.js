angular.module('app6', ['ui-router'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider 
        .state('home') {
            url: '/'
        }
})