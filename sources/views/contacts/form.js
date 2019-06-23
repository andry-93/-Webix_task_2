import {JetView} from "webix-jet";
import {countries} from "../../models/countries";
import {statuses} from "../../models/statuses";
import {contacts} from "../../models/contacts";

export default class ContactsForm extends JetView {
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

	urlChange(view) {
		webix.promise.all([
			contacts.waitData,
			countries.waitData,
			statuses.waitData
		]).then(() => {
			let id = this.getParam("id");
			if (id && contacts.exists(id)) {
				view.setValues(contacts.getItem(id));
			}
			else view.clear();

			this.$$("onSave").attachEvent("onItemClick", () => {
				let _id = this.getParam("id");
				if (_id && contacts.exists(_id)) {
					contacts.updateItem(_id, view.getValues());
				}
			});
		});
	}
}
