import {JetView} from "webix-jet";
import {contacts} from "../../models/contacts";

export default class Contacts extends JetView {
	config() {
		return {
			rows: [
				{
					view: "list",
					select: true,
					scroll: "auto",
					template: "#Name#.<span class='webix_icon webix_icon wxi-close remove-icon' title='Remove'></span><br>#Email#",
					type: {
						height: 62
					}
				},
				{view: "button", value: "Add"}
			]
		};
	}

	init(view) {
		let list = view.queryView("list");
		list.parse(contacts);
		list.attachEvent("onAfterSelect", (id) => {
			this.setParam("id", id, true);
			// this.app.getService("contactsData").setState(list.getSelectedItem());
			// console.log(this.app.getService("contactsData").getState());
		});
	}

	urlChange() {
	//	console.log(this.getParam("id"));
	}
}
