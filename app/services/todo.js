(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('todo', service);

    service.$inject = ['$http'];

    var idLists = 1;
    var idTodos = 1;
    var todoListArray = [];
    var todosArray = [];
    function service($http) {
        return {
            todoLists: todoListArray,
            addList: addTodoList,
            addNewTodo: addTodoInList,
            getTodosFromList: getTodos
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
                    todos: todosArray
                };

                todoListArray.push(todoList);
                    alert('The list has been created successfully')
                }
            }

            // Add task in TODO List
            function addTodoInList(listId, name) {
                var list = _.find(todoListArray, function(obj) { return obj.id == listId; }); 
                if (isDuplicatedTodo(list, name)) {
                alert('The task already exists!')
                } else {   
                    if (list && list.todos.length > 0) {
                    var lastTodo = _.last(list.todos);
                    idTodos = lastTodo.id + 1; 
                }
                    var todo = {
                    id: idTodos, 
                    name: name
                };

                list.todos.push(todo);
                    alert('The task has been created successfully')
                }
            }

            function getTodos(id) {
                var list = _.find(todoListArray, function(obj) { return obj.id == id; });
                return  list.todos;
            }


            // Check if TODO List is duplicated
            function isDuplicatedList(name) {
            return _.some(todoListArray, function(todoList) { 
                        return todoList.name == name; 
                    });
            }

            // Check if todo in TODO List is duplicated
            function isDuplicatedTodo(list, todoName) {
            return _.some(list.todos, function(todo) { 
                        return todo.name == todoName; 
                    });
            }
    }
}(angular));