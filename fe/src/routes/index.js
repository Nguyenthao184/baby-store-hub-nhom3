import { DefaultLayout, EmptyLayout, ManagerLayout } from "../layouts";
import Overview from "../page/manager/Overview/index";
import Category from "../page/manager/Category/index";

const publicRoutes = [
  { path: "/", component: HomePage, layout: DefaultLayout },
  { path: "/login", component: Login, layout: EmptyLayout, publicOnly: true },
  {
    path: "/register",
    component: Register,
    layout: EmptyLayout,
    publicOnly: true,
  },
];

const privateRoutes = [
  { path: "/manager", component: Overview, layout: ManagerLayout },
  { path: "/manager/hang-hoa/danh-muc", component: Category, layout: null },


  
];


export { publicRoutes, privateRoutes };
