angular.module('agendaApp')
.controller("pdfCtrl", function($scope,$rootScope) {

	var doc = new jsPDF('landscape');

	$scope.download = function() {

		generatePDF();
		doc.save($scope.agendaName + '.pdf');
	}

	function generatePDF () {
		addTitle();
		addTasks();
	}

	function addTasks() {
		$rootScope.lists.forEach(function(taskList) {
			for (var i = 0; i < taskList.tasks.length; i += 2) {
				var currentTask = taskList.tasks[i];
				var forwardTask = (i + 1 < taskList.tasks.length) ? taskList.tasks[i + 1] : null;
				addListLayout(taskList.name);
				addTaskLayout(currentTask, 40);
				addTaskLayout(forwardTask, 160);

				doc.addPage();
			}
		});
	}

	function addListLayout(listName) {
		doc.setFontSize(20);
		doc.setFontStyle("bold");
		doc.roundedRect(20, 40, 260, 160, 10, 10, 'S');
		doc.text (30, 55, listName);
	}

	function addTitle () { 
		doc.setFontSize(30);
		doc.setFontStyle("bold");
	    doc.text($scope.agendaName, 20, 25);
	}

	function addTaskLayout (task, x_position) {
		if (!task) return;

		doc.setFontSize(16);
		doc.setFontStyle("bold");
		doc.text (x_position,70, task.name);


		doc.setFontSize(12);
		doc.setFontStyle("regular");
		doc.text(x_position,80, task.description);

		doc.text (x_position,95, 'Prioridade: ' + task.priority + ", Categoria: " + task.category);

		doc.setFontStyle("bold");
		doc.text (x_position,110,"Subtarefas:");
		doc.text (x_position,120,'A fazer:');
		doc.setFontStyle("regular");

		for (var i = 1; i <= task.subtasks.undone.length; i++) {
			doc.text (x_position,120 + (10 * i),task.subtasks.undone[i - 1]);
		}

		doc.setFontStyle("bold");
		doc.text (x_position + 60,120,'Feitas:')
		doc.setFontStyle("regular");

		for (var i = 1; i <= task.subtasks.done.length; i++) {
			doc.text (x_position + 60,120 + (10 * i),task.subtasks.done[i - 1]);
		}
	}
});