import {JetView} from "webix-jet";

export default class DataEdit extends JetView {
	constructor(app, name, data) {
		super(app, name);
		this._dta = data;
	}

	config() {
		return {view: "datatable", autoConfig: true, css: "webix_shadow_medium", scroll: "auto"};
	}

	init(view) {
		view.parse(this._dta);
	}
}
