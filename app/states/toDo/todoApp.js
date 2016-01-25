(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('todoApp', todoApp)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('todoApp', {
                url: '/todo-app',
                template: '<todo-app></todo-app>'
            });
    }

    function todoApp() {
        var directive = {
            templateUrl: './states/todo/todoApp.html',
            restrict: 'E',
            controller: controller,
            scope: {
                data: '='
            }
        };

        return directive;
    }

    controller.$inject = ['$scope', 'todos'];
    function controller($scope, todos) {
        $scope.vm = {};
        $scope.addNewTodoList = addNewTodoList;
        $scope.listAllTodoList = listAllTodoList;
        $scope.todos = todos;

        function addNewTodoList() {
            return todos.addList($scope.vm.name);
        }
    
        function listAllTodoList() {
            return todos.todoLists();
        }
    }

}(angular));