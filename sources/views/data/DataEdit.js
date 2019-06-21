import {JetView} from "webix-jet";

export default class DataEdit extends JetView {
	constructor(app, name, data) {
		super(app, name);
		this._dta = data;
	}

	config() {
		return {
			rows: [
				{view: "datatable", localId: "dataTable", editable: true, editaction: "click", autoConfig: true, css: "webix_shadow_medium", scroll: "auto"},
				{view: "button", value: "Add new", click: () => { this.addRow(); }}
			]
		};
	}

	init() {
		this.$$("dataTable").parse(this._dta);
	}

	addRow() {
		let dataTable = this.$$("dataTable");
		dataTable.editStop();
		let id = dataTable.add([""], 0);
		dataTable.editRow(id);
	}
}
