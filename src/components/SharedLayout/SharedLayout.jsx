import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Header,
  Main,
  NavLinkEl,
  Navigation,
  Container,
  Line,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <NavLinkEl to="/">Home</NavLinkEl>
            <NavLinkEl to="/movies">Movies</NavLinkEl>
          </Navigation>
        </Container>
      </Header>
      <Line></Line>
      <Main>
        <Container>
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
};

export default SharedLayout;
