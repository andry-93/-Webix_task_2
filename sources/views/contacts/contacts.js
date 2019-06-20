import {JetView} from "webix-jet";

export default class Contacts extends JetView {
	constructor(app, name, data) {
		super(app, name);
		this._contactsData = data;
	}

	config() {
		return {
			view: "list",
			select: true,
			scroll: "auto",
			template: "#Name#.<span class='webix_icon webix_icon wxi-close remove-icon' title='Remove'></span><br>#Email#",
			type: {
				height: 62
			}
		};
	}

	init(view) {
		view.parse(this._contactsData);
	}
}
