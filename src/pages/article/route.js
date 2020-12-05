import { lazy } from "react";
import { initModule } from "@helpers";

const route = {
  path: "/article/:id",
  exact: false,
  component: lazy(async () => {
    const reducer = await import("./reducer");
    const saga = await import("./saga");
    await initModule(reducer, saga, "article");
    return import(".");
  })
};

export default route;
