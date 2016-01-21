(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('todos', service);

    service.$inject = ['$http'];

    var id = 1;
    var todoListArray = [];
    var todos = [];
    function service($http) {
        return {
            todoLists: todoListArray,
            addList: add
        };

        function add(name) {
            if (isDuplicatedList(name)) {
                alert('The list already exists!')
            } else {
                var todo = {
                    id: id, 
                    name: name, 
                    todos: todos
                };

                todoListArray.push(todo);
                    alert('The list has been created successfully')
                    id++;
                }
            }

        function isDuplicatedList(name) {
            return _.some(todoListArray, function(todo) { 
                        return todo.name == name; 
                    });
            }
    }
}(angular));