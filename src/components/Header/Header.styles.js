import styled from "styled-components";
import { media } from "../../styles/theme";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  padding-bottom: 0;

  ${media.tablet} {
    padding-block: 0;
    padding-inline-start: 2.5rem;
    padding-inline-end: 0;
  }

  ${media.desktop} {
    padding-block-start: 2.5rem;

    & > * {
      flex-shrink: 0;
    }

    &::after {
      content: "";
      display: block;
      position: relative;
      height: 1px;
      background: var(--clr-white);
      mix-blend-mode: normal;
      opacity: 0.25;
      order: 1;
      flex: 1;
      left: 64px;
      z-index: 90;
    }
  }
`;

export const StyledHamburgerBtn = styled.button`
  display: grid;
  place-items: center;
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
