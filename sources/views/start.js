import {JetView} from "webix-jet";
import {contacts} from "../models/contacts";
import ContactsForm from "./contacts/form";

export default class Start extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		return {
			cols: [
				{rows: [
					{
						type: "header", value: "Contacts", template: (obj, id) => _(id.config.value), css: "webix_header app_header"
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
						},
						onClick: {
							// eslint-disable-next-line func-names
							"remove-icon": function (_e, id) {
								webix.confirm({
									title: "Delete",
									text: "Are you sure?"
								}).then(() => {
									contacts.remove(id);
									return false;
								});
							}
						}
					},
					{
						view: "button",
						value: "Add",
						click: () => {
							const user = {Name: "New user", Email: ""};
							contacts.add(user);
						}
					}
				]},
				{view: "resizer"},
				ContactsForm
			]
		};
	}

	init() {
		this.$$("contacts").sync(contacts);
	}

	urlChange() {
		const userList = this.$$("contacts");
		const id = this.getParam("id");
		contacts.waitData.then(
			() => {
				if (id && userList.exists(id)) {
					userList.select(id);
				}
				else userList.select(userList.getFirstId());
			}
		);
	}
}
