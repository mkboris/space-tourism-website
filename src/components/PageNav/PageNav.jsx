import {
  Nav,
  NavList,
  StyledNavLink,
  Span,
  StyledCloseBtn,
} from "./PageNav.styles";

function PageNav({ isOpen, onCloseMenu }) {
  return (
    <Nav $isOpen={isOpen}>
      <CloseBtn onCloseMenu={onCloseMenu} aria-label="Close menu" />
      <NavList>
        <li>
          <StyledNavLink to="/">
            <Span aria-hidden="true">00</Span> Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/destination">
            <Span aria-hidden="true">01</Span> Destination
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/crew">
            <Span aria-hidden="true">02</Span> Crew
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/technology">
            <Span aria-hidden="true">03</Span> Technology
          </StyledNavLink>
        </li>
      </NavList>
    </Nav>
  );
}

function CloseBtn({ onCloseMenu }) {
  return (
    <StyledCloseBtn onClick={onCloseMenu} aria-label="Close menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
        <g fill="#D0D6F9" fillRule="evenodd">
          <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
          <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
        </g>
      </svg>
    </StyledCloseBtn>
  );
}

export default PageNav;
