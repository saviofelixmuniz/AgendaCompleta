angular.module('agendaApp')
.controller("homeController", function($scope,$rootScope,$location, $uibModal, $log, $document) {
	$scope.priorities = [
		"Alta",
		"Média",
		"Baixa"
	]
    $scope.itemsToAdd = [
        "Tarefa",
        "Lista"
    ]
    $scope.categories = [
        "Trabalho",
        "Lazer",
        "Casa",
        "Faculdade",
        "Escola"
    ]
    $scope.items = ['item1', 'item2', 'item3'];


	$scope.isActive = function (page) {
		if ($location.url() == page) return 'active';
		else return '';
	}

	$scope.newTask = "";

    $scope.subtasks = [];
    $scope.lists = [ 
        {name : "savio",
         tasks : [
            {name : "savio1"}
         ]
         }         
    ];

    $scope.indexes = [];
    $scope.currentPage = 0;

    $scope.priority = "Prioridade";
    $scope.itemToAdd = "Tarefa";
    $scope.selectedCategory = "Categoria";
    $scope.selectedList = {name : "Lista"};
    $scope.currentTask = undefined;


    $scope.coisinha = function(name) {
        console.log(name);
    }

    $scope.selectPriority = function(priority) {
    	$scope.priority = priority;
    }

    $scope.selectItem = function (item) {
        $scope.itemToAdd = item;
    }

    $scope.selectCategory = function (category) {
        $scope.selectedCategory = category;
    }

    $scope.selectList = function (list) {
        $scope.selectedList = list;
    }

    $scope.addSubTask = function(newTask) {
   		$scope.subtasks.push(newTask);
   		$scope.newTask = "";
    }

    $scope.processPages = function () {
        $scope.pages = [[]];
        var j = 0;
        for (var i = 0; i < $scope.lists.length; i++) {
            if (i >= (j + 1) * 3) {
                j++;
                $scope.pages[j] = [];
            }  

            $scope.pages[j].push($scope.lists[i]);
        }
    }

  	$scope.remove = function (subtask) {
		var index = $scope.subtasks.indexOf(subtask);
		$scope.subtasks.splice(index,1);
    }

    $scope.saveTask = function () {
    	var newTask = { name : $scope.name,
    		            subtasks : $scope.subtasks,
    		            priority : $scope.priority,
                        list : $scope.selectedList,
                        category : $scope.selectedCategory,
    		            description : $scope.description };

        $scope.lists.some (function (list) {
            if (list.name == newTask.list.name) {
                list.tasks.push(newTask);
                return true;
            }
        });

        $scope.name = "";
        $scope.subtasks = [];
        $scope.priority = "Prioridade";
        $scope.selectedList = { name : "Lista"};
        $scope.category = "Categoria";
        $scope.description = "";
    }

    $scope.saveList = function (name) {
        var newList = { name : name,
                        tasks : [] };
        $scope.lists.push(newList);
        $scope.listName = "";
    }

    $scope.getIndex = function () {
        var indexes = [];
        for (var i = 1; i <= $scope.pages.length;i ++) {
            indexes.push(i);
        }
        return indexes;
    }

    $scope.setPage = function (index) {
        $scope.currentPage = index - 1;
    }

    $scope.status = {
    	isopen: false
 	 };

    $scope.openModal = function (task, size, parentSelector) {  
        var parentElem = parentSelector ? 
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            controller: 'homeController',
            controllerAs: '$ctrl',
            size: size,
            appendTo: parentElem,
            resolve: {
                items: function () {
                  return $scope.items;
                }
            }
        });

        $rootScope.currentModal = modalInstance;

        $rootScope.currentModal.result.then(function () {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.ok = function () {
        $rootScope.currentModal.close();
    };

    $scope.setTask = function(task) {
        $scope.currentTask = task;
    }

    $scope.cancel = function () {
        $rootScope.currentModal.dismiss({$value: 'cancel'});
    };

})