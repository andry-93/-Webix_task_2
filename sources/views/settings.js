import {
	JetView
} from "webix-jet";

export default class Settings extends JetView {
	config() {
		return {
			rows: [{
				type: "header",
				template: "Data",
				css: "webix_header app_header"
			},
			{
				rows: [{
					view: "segmented",
					value: "en",
					options: [{
						id: "en",
						value: "English"
					},
					{
						id: "ru",
						value: "Russian"
					}]
				}]
			}]
		};
	}
}
