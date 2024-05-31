// import { PATH_AFTER_LOGIN } from 'src/config-global';
import { Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import Page403 from 'src/pages/403';
import Page500 from 'src/pages/500';
import Page404 from 'src/pages/404';
import CompactLayout from 'src/layouts/compact';
import ComingSoonPage from 'src/pages/coming-soon';
import MaintenancePage from 'src/pages/maintenance';

import { SplashScreen } from 'src/components/loading-screen';

import { HomePage } from './main';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // SET INDEX PAGE WITH SKIP HOME PAGE
    // {
    //   path: '/',
    //   element: <Navigate to={PATH_AFTER_LOGIN} replace />,
    // },

    // ----------------------------------------------------------------------

    // SET INDEX PAGE WITH HOME PAGE
    {
      path: '/',
      element: <HomePage />,
    },

    // Auth routes
    // ...authRoutes,
    // ...authDemoRoutes,

    // // Dashboard routes
    // ...dashboardRoutes,

    // // Main routes
    // ...mainRoutes,

    // // Components routes
    // ...componentsRoutes,

    // No match 404
    {
      element: (
        <CompactLayout>
          <Suspense fallback={<SplashScreen />}>
            <Outlet />
          </Suspense>
        </CompactLayout>
      ),
      children: [
        { path: 'coming-soon', element: <ComingSoonPage /> },
        { path: 'maintenance', element: <MaintenancePage /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
        { path: '403', element: <Page403 /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
