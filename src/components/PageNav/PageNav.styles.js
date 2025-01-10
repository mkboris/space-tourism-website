import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { media } from "../../styles/theme";

export const Nav = styled.nav`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  padding-top: 2.125rem;
  position: fixed;
  z-index: 80;
  inset: 0 0 0 30%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(40px);

  ${media.tablet} {
    padding-top: 0;
    display: flex;
    flex-direction: row;
    position: relative;
    inset: 0;
  }

  ${media.desktop} {
    order: 2;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-block-start: 8.3125rem;
  list-style: none;

  ${media.tablet} {
    flex-direction: row;
    gap: 3rem;
    padding-block: 2.375rem;
    padding-inline: 2.5rem;
  }

  ${media.desktop} {
    padding-inline: 10.0625rem 3.5rem;
  }
`;

export const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    font-family: var(--ff-barlow);
    font-size: var(--fs-nav);
    color: var(--clr-white);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    text-decoration: none;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    border-right: 3px solid var(--clr-white);
    padding-right: 30px;
  }

  &:hover {
    border-right: 3px solid rgba(255, 255, 255, 0.5);
  }

  ${media.tablet} {
    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
      border-right: none;
      padding-right: 0;
      border-bottom: 3px solid var(--clr-white);
      padding-bottom: 2.375rem;
    }

    &:hover {
      border-bottom: 3px solid rgba(255, 255, 255, 0.5);
    }
  }
`;

export const Span = styled.span`
  font-weight: var(--fw-700);
  letter-spacing: 2.7px;
  margin-right: 0.6875rem;

  ${media.tablet} {
    display: none;
  }

  ${media.desktop} {
    display: inline-block;
  }
`;

export const StyledCloseBtn = styled.button`
  align-self: flex-end;
  margin-right: 1.625rem;
  padding: 0;
  background: transparent;
  border: transparent;

  ${media.tablet} {
    display: none;
  }
`;
