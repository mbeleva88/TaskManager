(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('todos', service);

    service.$inject = ['$http'];

    var id = 1;
    function service($http) {
        return {
            toDoLists: [],
            addList: add,
        };

        function add(name) {
            if (isDuplicatedList()) {
                alert('The list already exists!')
            } else {
            toDoLists.push(name); {
                {id: id, 
                name: name, 
                todos: []};
                alert('The list has been created successfully')
            }
        }
            id++;
        }

        function isDuplicatedList(name) {
            for (var i = 0; i < toDoLists.length; i++) {
                var isDuplicated = false;

                if (toDoLists[i].name == name) {
                    isDuplicated = true;
                    break;
                }
                return isDuplicated;
            }
        }
    }

}(angular));