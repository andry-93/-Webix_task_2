import {JetView} from "webix-jet";

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
				{view: "button", value: "Save"},
				{}
			]
		};
	}

	urlChange(view) {
		const id = this.getParam("id") || "1";
		view.setValues(this._contacts.getItem(id));
	}
}
