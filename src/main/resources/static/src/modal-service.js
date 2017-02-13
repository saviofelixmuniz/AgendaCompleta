var app = angular.module('agendaApp');

app.service('sharedModalProperties', function() {
	var task = undefined;
	var activeModal = undefined;

	return {
		setCurrentTask : function (task) {
			this.task = task;
		},

		getCurrentTask : function () {
			return this.task;
		},

		setActiveModal : function (modal) {
			this.modal = modal;
		},

		getActiveModal : function () {
			return this.modal;
		},

		setLists : function (lists) {
			this.lists = lists;
		},

		getLists : function () {
			return this.lists;
		}
	}
});