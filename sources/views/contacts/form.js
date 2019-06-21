import {JetView} from "webix-jet";
import {countries} from "../../models/countries";
import {statuses} from "../../models/statuses";

export default class ContactsForm extends JetView {
	constructor(app, name, data) {
		super(app, name);
		this._contacts = data;
	}

	config() {
		return {
			view: "form",
			elements: [
				{view: "text", label: "User Name", labelPosition: "top", name: "Name"},
				{view: "text", label: "Email", labelPosition: "top", name: "Email"},
				{
					view: "richselect",
					labelPosition: "top",
					name: "Country",
					label: "Country",
					options: {
						body: {
							template: "#Name#",
							data: countries
						}
					}
				},
				{
					view: "richselect",
					labelPosition: "top",
					name: "Status",
					label: "Status",
					options: {
						body: {
							template: "#Name#",
							data: statuses
						}
					}
				},
				{
					view: "button",
					localId: "onSave",
					value: "Save"
				},
				{}
			]
		};
	}

	init(view) {
		this.$$("onSave").attachEvent("onItemClick", () => {
			if (this.getParam("id") <= this._contacts.count()) {
				let id = this.getParam("id");
				this._contacts.updateItem(id, view.getValues());
			}
		});
	}

	urlChange(view) {
		if (this.getParam("id") <= this._contacts.count()) {
			let id = this.getParam("id");
			view.setValues(this._contacts.getItem(id));
		}
	}
}
