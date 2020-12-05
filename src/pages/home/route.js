import { lazy } from "react";
import { initModule } from "@helpers";

const route = {
  path: "/",
  exact: true,
  component: lazy(async () => {
    const reducer = await import("./reducer");
    const saga = await import("./saga");
    await initModule(reducer, saga, "home");
    return import(".");
  })
};

export default route;
