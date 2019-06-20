import {JetView} from "webix-jet";

export default class DataEdit extends JetView {
	constructor(app, name, data) {
		super(app, name);
		this._data = data;
	}

	config() {
		return {view: "datatable", autoConfig: true, css: "webix_shadow_medium"};
	}

	init(view) {
		view.parse(this._data);
	}
}
