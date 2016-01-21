(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('toDo', toDo)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('toDo', {
                url: '/todo',
                template: '<to-do></to-do>'
            });
    }

    function toDo() {
        var directive = {
            templateUrl: './states/toDo/toDo.html',
            restrict: 'E',
            controller: controller,
            scope: {
                name: '='
            }
        };

        return directive;
    }

    controller.$inject = ['$scope', 'todos'];
    function controller($scope, todos) {
        $scope.todos = todos;

        function todos() {
            alert('Todos!');
        }
    }

}(angular));