import Tradingview from "../component/Tradingview";
import MarketList from "../pages/MarketList";

export interface RouteConfig {
  path: string;                     // مسیر
  element:JSX.Element;         // کامپوننت یا رپ پرشده
  isProtected?: boolean;            // آیا محافظت شده است؟
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    element:<div>ddddd</div> ,
  },
  {
    path: '/profile',
    element:<div><Tradingview/></div>,
  },
  {
    path: '/dashboard',
    element:<MarketList/> ,
  },
  {
    path: '*',
    element:<div>404</div> ,
  },
];