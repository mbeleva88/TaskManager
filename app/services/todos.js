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
            addList: addTodoList,
            addNewTodo: addTodoInList
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
                    todos: todos
                };

                todoListArray.push(todoList);
                    alert('The list has been created successfully')
                }
            }

            // Add task in TODO List
            function addTodoInList(id, name) {
                if (isDuplicatedTodo(name)) {
                alert('The task already exists!')
                } else {
                    var todoList = _.find(todoListArray, function(obj) { return obj.id == id; });

                    if (todoList && todoList.todos.length > 0) {
                    var todos = _.last(todoList.todos);
                    idTodos = todoList.todos.id + 1; 
                }
                    var todo = {
                    id: idTodos, 
                    name: name
                };

                todoList.todos.push(todo);
                    alert('The task has been created successfully')
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