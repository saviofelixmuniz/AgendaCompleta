angular.module('agendaApp')
.controller("homeController", function($scope,$rootScope, $http, $location, $uibModal, $log, $document, sharedModalProperties) {
	$scope.priorities = [
		"Alta",
		"Média",
		"Baixa"
	]
    $scope.itemsToAdd = [
        "Tarefa",
        "Lista",
        "Categoria"
    ]
    $scope.categories = [
        "Trabalho",
        "Lazer",
        "Casa",
        "Faculdade",
        "Escola"
    ]


	$scope.isActive = function (page) {
		if ($location.url() == page) return 'active';
		else return '';
	}

	$scope.newTask = "";

    $scope.subtasks = { undone: [],
                        done: []
                      };

    $scope.indexes = [];
    $scope.currentPage = 0;

    $scope.priority = "Prioridade";
    $scope.itemToAdd = "Tarefa";
    $scope.selectedCategory = "Categoria";
    $scope.selectedList = {name : "Lista"};

    $scope.okiedokie = function () {
        console.log("fudeu");
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
   		$scope.subtasks.undone.push(newTask);
   		$scope.newTask = "";
    }

    $scope.processPages = function () {
        $scope.pages = [[]];
        var j = 0;
        for (var i = 0; i < $rootScope.lists.length; i++) {
            if (i >= (j + 1) * 3) {
                j++;
                $scope.pages[j] = [];
            }  

            $scope.pages[j].push($rootScope.lists[i]);
        }
    }

  	$scope.remove = function (subtask) {
		var index = $scope.subtasks.undone.indexOf(subtask);
		$scope.subtasks.undone.splice(index,1);
    }

    $scope.saveTask = function () {
    	var newTask = { name : $scope.name,
    		            subtasks : $scope.subtasks,
    		            priority : $scope.priority,
                        category : $scope.selectedCategory,
    		            description : $scope.description };

        $rootScope.lists.some (function (list) {
            if (list.name == $scope.selectedList.name) {
                list.tasks.push(newTask);
                return true;
            }
        });

        $scope.name = "";
        $scope.subtasks = { undone: [],
                            done: []
                          };
        $scope.priority = "Prioridade";
        $scope.selectedList = { name : "Lista"};
        $scope.category = "Categoria";
        $scope.description = "";

        $scope.save($rootScope.lists);
    }

    $scope.saveList = function (name) {
        var newList = { name : name,
                        tasks : [] };
        $rootScope.lists.push(newList);
        $scope.listName = "";

        $scope.save($rootScope.lists);
    }

    $scope.getIndex = function () {
        var indexes = [];
        for (var i = 1; i <= $scope.pages.length;i ++) {
            indexes.push(i);
        }
        return indexes;
    }

    $scope.setPage = function (index) {
        if (index > $scope.pages.length || index <= 0) return;
        $scope.currentPage = index - 1;
    }

    $scope.openModal = function (task, size, parentSelector) {  
        var parentElem = parentSelector ? 
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            scope: $scope,
            size: size,
            appendTo: parentElem,
            controller: function($scope, task) {
                $scope.currentTask = task;
            },
            resolve: {
                task: function () {
                  return $scope.currentTask;
            }
        }
            
        });

        sharedModalProperties.setActiveModal(modalInstance);

        modalInstance.result.then(function () {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }

    $scope.saveCategory = function(categoryName) {
        $scope.categories.push(categoryName);
        $scope.categoryName = "";
    }

    $scope.setTask = function(task) {
        sharedModalProperties.setCurrentTask(task);
    }

    $scope.save = function(lists) {
        lists.forEach(function(list) {
            delete list['$$hashKey'];
            console.log(JSON.stringify(list));

            var optionJson_Value = {headers: {'Content-Type':'application/json'}};

            $http.post("/list/save", JSON.stringify(list), optionJson_Value);
        });
    }

    $scope.load = function () {
        var optionJson_Value = {headers: {'Content-Type':'application/json'}};
        $http.get("/list/get",optionJson_Value)
        .then (function (response) {
             $rootScope.lists = response.data;
             console.log($rootScope.lists);
             $scope.processPages();
             $scope.indexes = $scope.getIndex();
        });
    }

})