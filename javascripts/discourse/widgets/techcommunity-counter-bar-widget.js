import { createWidget } from "discourse/widgets/widget";
import { h } from "virtual-dom";

export default createWidget("techcommunity-counter-bar-widget", {
    tagName: "div.counter-bar-wrapper",

    buildKey: () => `techcommunity-counter-bar-widget`,

    html() {
        const path = window.location.pathname;
        let showOnHomepage;
        if (settings.display_counter_bar_on_home_page) {
            showOnHomepage = path === "/";
        }

        if (showOnHomepage) {
            document.querySelector("body").classList.add("show-counter-bar");
            return h(
                `div.counter-bar`, [
                    h("div.counter-bar-column.column1", h("a.column1_link", { innerHTML: settings.counter_bar_column1_text, href: settings.counter_bar_column1_link})),
                    h("div.counter-bar-column.column2", h("a.column1_link", { innerHTML: settings.counter_bar_column2_text, href: settings.counter_bar_column2_link})),
                    h("div.counter-bar-column.column3", h("a.column1_link", { innerHTML: settings.counter_bar_column3_text, href: settings.counter_bar_column3_link})),
                    h("div.counter-bar-column.column4", h("a.column1_link", { innerHTML: settings.counter_bar_column4_text, href: settings.counter_bar_column4_link}))
                ]
            );
        }
        else {
            //Do not display Counter bar
            document.querySelector("body").classList.remove("show-counter-bar");
        }
    }
});