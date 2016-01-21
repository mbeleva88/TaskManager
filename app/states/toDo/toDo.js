(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('todo', todo)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('todo', {
                url: '/todo',
                template: '<todo></todo>'
            });
    }

    function todo() {
        var directive = {
            templateUrl: './states/todo/todo.html',
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
        $scope.vm = {};
        $scope.todos = todos;
        $scope.addNewTodo = addNewTodo;

        function addNewTodo() {
            return todos.addList($scope.vm.name);
        }
    }

}(angular));