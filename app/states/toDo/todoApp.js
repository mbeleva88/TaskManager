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

    controller.$inject = ['$scope', 'todo', 'prompt'];
    function controller($scope, todo, prompt) {
        $scope.vm = {};
        $scope.addNewTodoList = addNewTodoList;
        $scope.addNewTodoListTEST = addNewTodoListTEST;
        $scope.listAllTodoLists = listAllTodoLists;
        $scope.todo = todo;

        function addNewTodoList() {
            todo.addList($scope.vm.name);
            $scope.vm.name = '';
        }

        function addNewTodoListTEST() {
             prompt({
                title: 'Give me a name',
                message: 'What would you like to name it?',
                input: true,
                label: 'Name',
                value: ''
             }).then(function(name) {
                todo.addList(name);
                name = '';
             }); 
        }
    
        function listAllTodoLists() {
            return todo.todoLists;
        } 
    }

}(angular));