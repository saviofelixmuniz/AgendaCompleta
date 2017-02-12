angular.module('agendaApp')
.controller("modalController", function($scope, $uibModal, sharedModalProperties, $document) {
	$scope.currentTask = sharedModalProperties.getCurrentTask();
	$scope.modal = sharedModalProperties.getActiveModal();
	$scope.changeList = {
		wasChanged : false,
		newList : undefined
	}

	$scope.print = function () {
	}

	$scope.ok = function () {
		if ($scope.changeList.wasChanged) {
			$scope.changeList.newList.tasks.push($scope.currentTask);

			var index = $scope.currentTask.list.tasks.indexOf($scope.currentTask,1);
			$scope.currentTask.list.tasks.splice(index,1);

			$scope.currentTask.list = $scope.changeList.newList;
		}
		$scope.modal.close();
	}

	$scope.cancel = function() {
		$scope.modal.close();
	}

	$scope.done = function(subtask) {
	    var index = $scope.currentTask.subtasks.undone.indexOf(subtask);
	    $scope.currentTask.subtasks.undone.splice(index,1);
	    $scope.currentTask.subtasks.done.push(subtask);
	    console.log($scope.currentTask.subtasks.done);
	}

	$scope.undone = function(subtask) {
		var index = $scope.currentTask.subtasks.done.indexOf(subtask);
	    $scope.currentTask.subtasks.done.splice(index,1);
	    $scope.currentTask.subtasks.undone.push(subtask);
	}

	$scope.getProgress = function() {
		var total = $scope.currentTask.subtasks.done.length + $scope.currentTask.subtasks.undone.length;
		var percent = ($scope.currentTask.subtasks.done.length / total) * 100;
		return parseFloat(percent).toFixed(1) + "%";
	}

	$scope.edit = {
		newSubtask : "",
		removeSubTask : function (subtask) {
		    var index = $scope.currentTask.subtasks.undone.indexOf(subtask);
		    $scope.currentTask.subtasks.undone.splice(index,1);
		},
		addSubTask : function (subtask) {
			$scope.currentTask.subtasks.undone.push(subtask);
		},
		selectCategory: function(category) {
			console.log(category);
			$scope.currentTask.category = category;
		},
		selectPriority: function(priority) {
			$scope.currentTask.priority = priority;
		},
		selectList: function(list) {
			if ($scope.currentTask.list.name != list.name) {
				$scope.changeList = {
					wasChanged : true,
					newList : list
				};	
			}
		}
	}

});