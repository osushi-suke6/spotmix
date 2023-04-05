import './assets/css/index.css';

import { createBrowserRouter } from 'react-router-dom';

import App from './pages/App';
import CallbackPage from './pages/CallbackPage';
import LoginPage from './pages/LoginPage';
import PlayerPage from './pages/PlayerPage';
import RootPage from './pages/RootPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/callback',
    element: <CallbackPage />,
  },
  {
    path: '/player',
    element: <PlayerPage />,
  },
  {
    path: '/app',
    element: <App />,
  },
]);

export default router;
