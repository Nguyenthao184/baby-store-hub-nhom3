import { DefaultLayout, EmptyLayout, ManagerLayout } from "../layouts";
import Overview from "../page/manager/Overview/index";
import Category from "../page/manager/Category/index";

const publicRoutes = [
  
];

const privateRoutes = [
  { path: "/manager", component: Overview, layout: ManagerLayout },
  { path: "/manager/hang-hoa/danh-muc", component: Category, layout: null },


  
];


export { publicRoutes, privateRoutes };
