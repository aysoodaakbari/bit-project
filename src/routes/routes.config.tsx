import Exchange from '../pages/Exchange';
import MarketList from '../pages/MarketList';

export interface RouteConfig {
  path: string;
  element: JSX.Element;
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: <MarketList />,
  },
  {
    path: '/:id',
    element: <Exchange />,
  },
  {
    path: '*',
    element: <div>404</div>,
  },
];
