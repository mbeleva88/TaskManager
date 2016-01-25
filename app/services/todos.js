(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('todos', service);

    service.$inject = ['$http'];

    var idLists = 1;
    var idTodos = 1;
    var todoListArray = [];
    var todos = [];
    function service($http) {
        return {
            todoLists: todoListArray,
            addList: addTodoList
        };

        // Add TODO List
        function addTodoList(name) {
            if (isDuplicatedList(name)) {
                alert('The list already exists!')
            } else {
                if (todoListArray.length > 0) {
                    var last = _.last(todoListArray);
                    idLists = last.id + 1; 
                }

                var todoList = {
                    id: idLists, 
                    name: name, 
                    todos: todos,
                    addTodo: addTodoInList
                };

                todoListArray.push(todoList);
                    alert('The list has been created successfully')
                }
            }

            // Add todo in TODO List
            function addTodoInList(name) {
                
                if (isDuplicatedTodo(name)) {
                alert('The todo already exists!')
                } else {
                    if (todos.length > 0) {
                    var last = _.last(todos);
                    idTodos = last.id + 1; 
                }
                    var todo = {
                    id: idTodos, 
                    name: name
                };

                todos.push(todo);
                    alert('The todo has been created successfully')
                }
            }

            // Check if TODO List is duplicated
            function isDuplicatedList(name) {
            return _.some(todoListArray, function(todoList) { 
                        return todoList.name == name; 
                    });
            }

            // Check if todo in TODO List is duplicated
            function isDuplicatedTodo(name) {
            return _.some(todos, function(todo) { 
                        return todo.name == name; 
                    });
            }
    }
}(angular));