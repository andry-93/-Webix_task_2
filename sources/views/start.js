import {JetView} from "webix-jet";
import {contacts} from "../models/contacts";
import ContactsForm from "./contacts/form";

export default class Start extends JetView {
	config() {
		return {
			cols: [
				{rows: [
					{
						type: "header", template: "Contacts", css: "webix_header app_header"
					},
					{
						view: "list",
						localId: "contacts",
						select: true,
						scroll: "auto",
						template: "#Name#.<span class='webix_icon webix_icon wxi-close remove-icon' title='Remove'></span><br>#Email#",
						type: {
							height: 62
						},
						on: {
							onAfterSelect: (id) => {
								this.setParam("id", id, true);
							}
						}
					},
					{view: "button", value: "Add"}
				]},
				{view: "resizer"},
				new ContactsForm(this.app, "", contacts)
			]
		};
	}

	init() {
		this.$$("contacts").parse(contacts);
	}
}
