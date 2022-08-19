// Layout
import { HeaderOnly } from "~/Layouts";

import Home from "~/pages/Home";
import Payment from "~/pages/Payment";
import Register from "~/pages/Resgiter";

// Public Routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/payment", component: Payment, layout: HeaderOnly },
  { path: "/register", component: Register, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
