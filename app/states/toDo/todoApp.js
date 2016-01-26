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

    controller.$inject = ['$scope', 'todo'];
    function controller($scope, todo) {
        $scope.vm = {};
        $scope.addNewTodoList = addNewTodoList;
        $scope.listAllTodoLists = listAllTodoLists;
        $scope.todo = todo;

        function addNewTodoList() {
            return todo.addList($scope.vm.name);
        }
    
        function listAllTodoLists() {
            return todo.todoLists;
        } 
    }

}(angular));