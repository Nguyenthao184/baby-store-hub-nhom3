import { DefaultLayout, EmptyLayout, ManagerLayout } from "../layouts";
import Overview from "../page/manager/Overview/index";

const publicRoutes = [
];

const privateRoutes = [
  { path: "/manager", component: Overview, layout: ManagerLayout },
  
];

export { publicRoutes, privateRoutes };
