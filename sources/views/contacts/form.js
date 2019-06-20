import {JetView} from "webix-jet";

export default class ContactsForm extends JetView {
	config() {
		return {
			view: "form",
			elements: [
				{view: "text", label: "User Name", labelPosition: "top", name: "user-name"},
				{view: "text", label: "Email", labelPosition: "top", name: "email"},
				{}
			]
		};
	}
}
