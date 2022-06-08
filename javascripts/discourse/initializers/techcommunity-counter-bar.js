import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "techcommunity-counter-bar",

  initialize() {
    withPluginApi("0.8", (api) => {
      api.decorateWidget("techcommunity-counter-bar-widget:after", (helper) => {
        helper.widget.appEvents.on("page:changed", () => {
          helper.widget.scheduleRerender();
        });
      });
    });
  },
};