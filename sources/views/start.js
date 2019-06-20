import {JetView} from "webix-jet";
import Contacts from "./contacts/contacts";
import ContactsForm from "./contacts/form";
import {contacts} from "../models/contacts";

export default class Start extends JetView {
	config() {
		return {
			cols: [
				{rows: [
					{
						type: "header", template: "Contacts", css: "webix_header app_header"
					},
					{$subview: new Contacts(this.app, "", contacts)}
				]},
				{view: "resizer"},
				{$subview: ContactsForm}
			]
		};
	}
}
