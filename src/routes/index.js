import routesConfig from "~/config/routes";

// Layout
import DefaultLayout, { HeaderOnly } from "~/layouts";

import Home from "~/pages/Home";
import Payment from "~/pages/Payment";
import Register from "~/pages/Resgiter";
import FightTheFuture from "~/pages/FightTheFuture";
import IWantToBelieve from "~/pages/IWantToBelieve";
import TermsApply from "~/pages/TermsApply";
import WatchFilm from "~/pages/WacthFilm";

// Public Routes
const publicRoutes = [
  { path: routesConfig.home, component: Home },
  {
    path: routesConfig.fightTheFuture,
    component: FightTheFuture,
    layout: HeaderOnly,
  },
  {
    path: routesConfig.iWantToBelieve,
    component: IWantToBelieve,
    layout: HeaderOnly,
  },
  {
    path: routesConfig.watchFilm,
    component: WatchFilm,
    layout: DefaultLayout,
  },
  { path: routesConfig.payment, component: Payment, layout: HeaderOnly },
  { path: routesConfig.register, component: Register, layout: HeaderOnly },
  { path: routesConfig.termsApply, component: TermsApply, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
