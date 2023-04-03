import './assets/css/index.css';

import { createBrowserRouter } from 'react-router-dom';

import App from './pages/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/app',
    element: <App />,
  },
]);

export default router;
