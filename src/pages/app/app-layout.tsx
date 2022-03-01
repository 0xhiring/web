import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import AppNavbar from '../../components/navigations/app-navbar';

export default function AppLayout(props: PropsWithChildren<{}>) {
  return (
    <AppNavbar>
      <Outlet />
    </AppNavbar>
  );
}
