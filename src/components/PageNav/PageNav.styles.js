import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { media } from "../../styles/theme";

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const Nav = styled.nav`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  padding-top: 2.125rem;
  position: fixed;
  z-index: 80;
  inset: 0 0 0 30%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(40px);

  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
  animation: ${({ $isOpen }) => ($isOpen ? slideIn : slideOut)} 0.5s ease-in-out
    forwards;

  ${media.tablet} {
    padding-top: 0;
    display: flex;
    flex-direction: row;
    position: relative;
    inset: 0;
    animation: none;
    transform: none;
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
  position: relative;
  font-family: var(--ff-barlow);
  font-size: var(--fs-nav);
  color: var(--clr-white);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  padding-bottom: 1rem;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.5);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }

  &.active::after {
    width: 100%;
    background-color: var(--clr-white);
  }

  &:focus-visible {
    outline: none;
    border-bottom: 3px solid var(--clr-fog);
    outline-offset: 3px;
  }

  ${media.tablet} {
    padding-bottom: 2.375rem;
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

  &:focus-visible {
    outline: 2px solid var(--clr-fog);
    outline-offset: 4px;
  }

  ${media.tablet} {
    display: none;
  }
`;
