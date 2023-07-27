// import MainLayout from 'layout/MainLayout';
import MainLayout from 'layout/MainLayout';
import { lazy } from 'react';

// project imports
// import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const UtilsContactIcons = Loadable(lazy(() => import('views/utilities/Contact')));
const Login = Loadable(lazy(() => import('views/utilities/LogIn')));
// const LoginOld = Loadable(lazy(() => import('views/pages/authentication/auth-forms/AuthLogin')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <Login />
    },
    {
      path: 'dashboard',
      element: <MainLayout />,
      children:[
        {
        path: 'default',
        element: <DashboardDefault />,
        }
      ],
    },
    {
      path: 'utils',
      element: <MainLayout />,
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      element: <MainLayout />,
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      element: <MainLayout />,
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      element: <MainLayout />,
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      element: <MainLayout />,
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'icons',
      element: <MainLayout />,
      children: [
        {
          path: 'contact-icons',
          element: <UtilsContactIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
  ]
};

export default MainRoutes;
