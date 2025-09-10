import { DefaultLayout, EmptyLayout, ManagerLayout } from "../layouts";
import Login from "../page/public/loginPage";
import Register from "../page/public/registerPage";
import Overview from "../page/manager/Overview/index";
import Category from "../page/manager/Category/index";
import Product from "../page/manager/Product/index";
import Selling from "../page/manager/Selling/index";
import Bill from "../page/manager/Bill/index";

const publicRoutes = [
  { path: "/", component: Login, layout: EmptyLayout, publicOnly: true },
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
  { path: "/manager/ban-hang", component: Selling, layout: ManagerLayout },
  { path: "/manager/hang-hoa/san-pham", component: Product, layout: null },
  { path: "/manager/giao-dich/hoa-don", component: Bill, layout: null },
];

export { publicRoutes, privateRoutes };
