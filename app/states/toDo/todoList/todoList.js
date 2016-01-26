(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('todoList', todoList);
        
    function todoList() {
        var directive = {
            templateUrl: './states/toDo/todoList/todoList.html',
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
        $scope.addNewTodoInList = addNewTodoInList;
        $scope.listAllTodos = listAllTodos;
        $scope.todo = todo;

         function addNewTodoInList() {
            return todo.addNewTodo($scope.data.id, $scope.vm.name);
        }

         function listAllTodos() {
            return todo.getTodosFromList($scope.data.id);
        }
    }

}(angular));