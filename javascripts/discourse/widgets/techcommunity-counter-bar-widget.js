import { createWidget } from "discourse/widgets/widget";
import { iconHTML, iconNode } from "discourse-common/lib/icon-library";
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
            
            const counterBarColumnLinks = settings.counter_bar_columns;
            if (!counterBarColumnLinks.length) {
                return;
            }
            let links = [];

            counterBarColumnLinks
                .split("|")
                .filter(Boolean)
                .map((counterBarLinksArray, index) => {
                    const [
                        linkText,
                        linkHref,
                        icon,
                    ] = counterBarLinksArray
                        .split(",")
                        .filter(Boolean)
                        .map((x) => x.trim());
                
                    const anchorAttributes = {
                        href: linkHref,
                    };

                    links.push(
                        h("div.counter-bar-column.column" + (index+1), 
                            h("a.column_link", anchorAttributes, [
                                    h("span.category-icon", {}, icon !== "" ? iconNode(icon) : ""),
                                    h("span", { innerHTML: linkText })
                                ]
                            )
                        )
                    );
                });
                
            return h(`div.counter-bar`, links);
        }
        else {
            //Do not display Counter bar
            document.querySelector("body").classList.remove("show-counter-bar");
        }
    }
});