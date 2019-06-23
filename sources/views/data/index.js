import {JetView} from "webix-jet";
import DataEdit from "./DataEdit";
import {countries} from "../../models/countries";
import {statuses} from "../../models/statuses";

export default class DataView extends JetView {
	config() {
		let header = {
			type: "header", template: "Data", css: "webix_header app_header"
		};

		let menu = {
			view: "list",
			localId: "dataMenu",
			scroll: "auto",
			select: true,
			data: ["Countries", "Statuses"]
		};

		let cells = {
			cells: [
				{localId: "Countries", rows: [{$subview: new DataEdit(this.app, "", countries)}]},
				{localId: "Statuses", rows: [{$subview: new DataEdit(this.app, "", statuses)}]}
			]
		};

		let ui = {
			type: "clean",
			paddingX: 5,
			css: "app_layout",
			rows: [
				header,
				{cols: [
					{
						width: 200,
						rows: [menu]
					},
					cells
				]}
			]
		};

		return ui;
	}

	init() {
		let dataMenu = this.$$("dataMenu");
		dataMenu.attachEvent("onAfterSelect", (id) => {
			this.$$(id).show();
		});
		dataMenu.select(dataMenu.getFirstId());
	}
}
