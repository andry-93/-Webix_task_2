import {JetView} from "webix-jet";
import {contacts} from "../../models/contacts";

export default class Contacts extends JetView {
	config() {
		return {
			view: "list",
			autoHeight: true,
			select: true,
			template: "#Name#.<span class='webix_icon webix_icon wxi-close remove-icon' title='Remove'></span><br>#Email#",
			type: {
				height: 62
			}
		};
	}

	init(view) {
		view.parse(contacts);
	}
}
