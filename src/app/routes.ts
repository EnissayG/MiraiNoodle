import { createBrowserRouter } from 'react-router';
import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: RootLayout,
      children: [
        { index: true, Component: Home },
        { path: 'products', Component: Products },
        { path: 'about', Component: About },
        { path: 'contact', Component: Contact },
        { path: '*', Component: NotFound },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);
