import {JetView} from "webix-jet";
import Contacts from "./contacts/contacts";

export default class Start extends JetView {
	config() {
		return {
			cols: [
				{$subview: Contacts},
				{template: "Form"}
			]
		};
	}
}
