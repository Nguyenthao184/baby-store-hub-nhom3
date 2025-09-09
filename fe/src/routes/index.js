import { DefaultLayout, EmptyLayout, ManagerLayout } from "../layouts";
import Overview from "../page/manager/Overview/index";
import Bill from "../page/manager/Bill/index";

const publicRoutes = [
];

const privateRoutes = [
  { path: "/manager", component: Overview, layout: ManagerLayout },
  { path: "/manager/giao-dich/hoa-don", component: Bill, layout: null },
  
];

export { publicRoutes, privateRoutes };
