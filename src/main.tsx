import './assets/css/index.css';

import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StyleSheetManager } from 'styled-components';

import router from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />,
);
