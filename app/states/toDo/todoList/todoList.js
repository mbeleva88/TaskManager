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

    controller.$inject = ['$scope', 'todos'];
    function controller($scope, todos) {
        $scope.vm = {};
        $scope.addNewTodoInList = addNewTodoInList;
        $scope.todos = todos;

         function addNewTodoInList() {
            return todos.addNewTodo($scope.data.id, $scope.vm.name);
        }
    }

}(angular));