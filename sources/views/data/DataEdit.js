import {JetView} from "webix-jet";

export default class DataEdit extends JetView {
	constructor(app, name, data) {
		super(app, name);
		this._dta = data;
	}

	config() {
		const _ = this.app.getService("locale")._;
		return {
			rows: [
				{view: "datatable", localId: "dataTable", editable: true, editaction: "click", autoConfig: true, css: "webix_shadow_medium", scroll: "auto"},
				{view: "button", value: _("Add"), click: () => { this.addRow(); }}
			]
		};
	}

	init() {
		this.$$("dataTable").sync(this._dta);
	}

	addRow() {
		let dataTable = this.$$("dataTable");
		let data = {id: "", Name: ""};
		dataTable.editStop();
		this._dta.waitSave(() => {
			this._dta.add(data, 0);
		}).then((res) => {
			dataTable.editRow(res.id);
		});
	}
}
