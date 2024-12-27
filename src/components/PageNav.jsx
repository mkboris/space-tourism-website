import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav``;

const Ul = styled.ul`
  display: flex;
  gap: 2.4rem;
  padding: 0;
  list-style: none;
`;

function PageNav() {
  return (
    <Nav>
      <Ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/destination">Destination</NavLink>
        </li>
        <li>
          <NavLink to="/crew">Crew</NavLink>
        </li>
        <li>
          <NavLink to="/technology">Technology</NavLink>
        </li>
      </Ul>
    </Nav>
  );
}

export default PageNav;
