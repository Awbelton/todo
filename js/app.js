"use strict";

$(document).ready(function() {
    $('.comp').hide();
    $('.add').hide();
})

var App = angular.module("todo",[]);

App.controller("mainCtrl",['$scope', function  ($scope) {

	// holding our tasks
	$scope.todos = [
		{ taskName: "Example task 1", isDone: false, due: '5/19' },
		{ taskName: "Example task 2", isDone: false, due: '5/20' },
		{ taskName: "Example task 3", isDone: false, due: '5/21' }
	];

    $scope.noDate;
    $scope.noTask;
	$scope.tasks = $scope.todos.length;

	// add tasks
	$scope.addTodo = function() {
        if ($scope.newTodo == undefined || $scope.newDate == undefined) {
            $scope.noDate = true;
            $scope.noTask = true;
        } else if ($scope.newTodo != "" && $scope.newTodo != null && $scope.newTodo.length < 45 && $scope.newDate.length != 0) {
			$scope.todos.push({ taskName: $scope.newTodo, isDone: false, due: $scope.newDate });
			$scope.newTodo = "";
            $scope.newDate = "";
			$scope.tasks += 1;
            $scope.noDate = false;
            $scope.noTask = false;
            $scope.newTodo = undefined;
            $scope.newDate = undefined;
            aTask();
		} else if ($scope.newTodo.length > 45) {
			$scope.newTodo = "";
            $scope.noTask = false;
            $scope.noDate = false;
        } else if ($scope.newTodo == undefined || $scope.newDate == null || $scope.newDate.length === 0) {
            $scope.noDate = true;
            $scope.noTask = true;
        } 
	};

	// deleting tasks
	$scope.delTodo = function(at) {
        xTask();
		$scope.todos.splice(at, 1);
		$scope.tasks -= 1;
	};
    
    function xTask() { // deleting tasks jQuery
        $(document).ready(function() {
            $('.comp').fadeIn('slow');
                $('.alert').fadeIn('slow');
                setTimeout(function() {
                    $('.comp').fadeOut('slow');
                    $('.alert').fadeOut('slow');
                }, 2000);
        })
    }
    
    function aTask() { // adding tasks jQuery
        $(document).ready(function() {
            $('.add').fadeIn('slow');
            $('.alert2').fadeIn('slow');
            setTimeout(function() {
                $('.add').fadeOut('slow');
                $('.alert2').fadeOut('slow');
            }, 2000);
        })
    }

}]);
