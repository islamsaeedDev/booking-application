import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  FcCalendar,
  FcHome,
  FcDepartment,
  FcBusinessman,
} from "react-icons/fc";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StylesNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-0);
    background-color: var(--color-brand-600);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    transform: translateX(5px);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StylesNavLink to="/dashboard">
            <FcHome />
            <span>Home</span>
          </StylesNavLink>
        </li>
        <li>
          <StylesNavLink to="/bookings">
            <FcCalendar />
            <span>Bookings</span>
          </StylesNavLink>
        </li>
        <li>
          <StylesNavLink to="/cabins">
            <FcDepartment />
            <span>Cabins</span>
          </StylesNavLink>
        </li>
        <li>
          <StylesNavLink to="/users">
            <FcCalendar />
            <span>Users</span>
          </StylesNavLink>
        </li>
        <li>
          <StylesNavLink to="/settings">
            <FcBusinessman />
            <span>Settings</span>
          </StylesNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
