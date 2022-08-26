// Layout
import { HeaderOnly } from "~/Layouts";

import Home from "~/pages/Home";
import Payment from "~/pages/Payment";
import Register from "~/pages/Resgiter";
import FightTheFuture from "~/pages/FightTheFuture";
import IWantToBelieve from "~/pages/IWantToBelieve";

// Public Routes
const publicRoutes = [
  { path: "/series-TheX-Files", component: Home },
  { path: "/fight-the-future", component: FightTheFuture },
  { path: "/i-want-to-believe", component: IWantToBelieve },
  { path: "/payment", component: Payment, layout: HeaderOnly },
  { path: "/register", component: Register, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
