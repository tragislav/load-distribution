import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

import { AppContainer } from './styled';

function Layout() {
  return (
    <AppContainer>
      <Header />
      <Outlet />
      <Footer />
    </AppContainer>
  );
}

export default Layout;
