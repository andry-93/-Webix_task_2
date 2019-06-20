import {JetView, plugins} from "webix-jet";

export default class DataView extends JetView {
	config() {
		let header = {
			type: "header", template: "Data", css: "webix_header app_header"
		};

		let menu = {
			view: "menu",
			localId: "menu",
			css: "data_menu",
			layout: "y",
			select: true,
			template: "#value# ",
			data: [
				{value: "Countries", id: "countries"},
				{value: "Statuses", id: "statuses"}
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
						padding: {right: 5},
						paddingY: 10,
						rows: [{css: "webix_shadow_medium", rows: [menu]}]
					},
					{
						paddingY: 10,
						padding: {left: 5},
						rows: [
							{$subview: true}
						]
					}
				]}
			]
		};

		return ui;
	}

	init() {
		this.use(plugins.Menu, {
			id: "menu",
			urls: {
				countries: "data.countries",
				statuses: "data.statuses"
			}
		});
	}
}
