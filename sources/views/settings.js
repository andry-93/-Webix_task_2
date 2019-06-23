import {
	JetView
} from "webix-jet";

export default class Settings extends JetView {
	toggleLanguage() {
		const langs = this.app.getService("locale");
		const value = this.$$("segmented").getValue();
		langs.setLang(value);
	}

	config() {
		const _ = this.app.getService("locale")._;
		const lang = this.app.getService("locale").getLang();

		return {
			rows: [{
				type: "header",
				value: "Settings",
				template: (obj, id) => _(id.config.value),
				css: "webix_header app_header"
			},
			{
				rows: [{
					view: "segmented",
					value: lang,
					localId: "segmented",
					options: [
						{id: "en", value: "English"},
						{id: "ru", value: "Russian"}
					],
					click: () => {
						this.toggleLanguage();
					}
				}]
			}]
		};
	}
}
