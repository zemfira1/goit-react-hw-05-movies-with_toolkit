import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 1900px;
  margin-inline: auto;
`;

export const Header = styled.header`
  font-size: 34px;
  color: #fbf9f9;
  background-color: #242323;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  padding: 30px;
`;

export const NavLinkEl = styled(NavLink)`
  color: inherit;
  transition: color, 200ms;

  &.active {
    color: #de0b74;
  }
`;

export const Main = styled.main`
  height: 100%;
  padding: 20px;
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  border: none;
  background-color: gray;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.8),
    0px 1px 10px 0px rgba(0, 0, 0, 0.8);
`;
