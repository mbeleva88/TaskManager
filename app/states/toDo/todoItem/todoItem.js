(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('todoItem', todoItem);
        
    function todoItem() {
        var directive = {
            templateUrl: './states/toDo/todoItem/todoItem.html',
            restrict: 'E',
            controller: controller,
            scope: {
                data: '=',
                list: '='
            }
        };

        return directive;
    }

    controller.$inject = ['$scope', 'todo'];
    function controller($scope, todo) {
        $scope.vm = {};
        $scope.todo = todo;

        function removeTodoFromList() {
            todo.removeListById($scope.list, $scope.data.id);
        }
    }

}(angular));