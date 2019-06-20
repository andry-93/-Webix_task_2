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
			select: true,
			data: ["Countries", "Statuses"]
		};

		let ui = {
			type: "clean",
			paddingX: 5,
			css: "app_layout",
			rows: [
				header,
				{cols: [
					{
						rows: [menu]
					},
					{
						cells: [
							{$subview: new DataEdit(this.app, "", countries), localId: "Countries"},
							{$subview: new DataEdit(this.app, "", statuses), localId: "Statuses"}
						]
					}
				]}
			]
		};

		return ui;
	}

	init() {
		this.$$("dataMenu").attachEvent("onAfterSelect", (id) => {
			this.$$(id);
		});
		this.$$("dataMenu").select("Countries");
	}
}
