// Layout
import { HeaderOnly } from "~/layouts";

import Home from "~/pages/Home";
import Payment from "~/pages/Payment";
import Register from "~/pages/Resgiter";
import FightTheFuture from "~/pages/FightTheFuture";
import IWantToBelieve from "~/pages/IWantToBelieve";
import TermsApply from "~/pages/TermsApply";

// Public Routes
const publicRoutes = [
  { path: "/series-TheX-Files", component: Home },
  { path: "/fight-the-future", component: FightTheFuture, layout: HeaderOnly },
  { path: "/i-want-to-believe", component: IWantToBelieve, layout: HeaderOnly },
  { path: "/payment", component: Payment, layout: HeaderOnly },
  { path: "/register", component: Register, layout: HeaderOnly },
  { path: "/terms-apply", component: TermsApply, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
