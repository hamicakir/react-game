import { lazy } from 'react';

import Home from './pages/Home';

const Game = lazy(() => import('./pages/Game'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default [
  {
    key: "Home",
    component: Home,
    exact: true,
    path: "/"
  },
  {
    key: "Game",
    component: Game,
    exact: true,
    path: "/game"
  },
  {
    key: "NotFound",
    component: NotFound,
    exact: false,
    path: "*"
  }
]
