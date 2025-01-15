import styled from "styled-components";
import { media } from "../../styles/theme";

export const StyledTechnology = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  align-items: center;
  padding-block: 3rem;

  ${media.tablet} {
    padding-block: 2.5rem;
  }

  ${media.desktop} {
    gap: 5rem;
    padding-block: 3rem 7.9375rem;
  }
`;

export const HeadingWrap = styled.div`
  ${media.tablet} {
    padding-inline-start: 2.5rem;
    align-self: flex-start;
  }
`;

export const StyledTabbed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  ${media.tablet} {
    gap: 3.5rem;
  }

  ${media.desktop} {
    flex-direction: row-reverse;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-inline: 1.5rem;
  gap: 2.5rem;

  ${media.desktop} {
    padding-inline: 2.5rem 0;
    flex-direction: row;
    gap: 2.75rem;
    align-items: center;
    text-align: left;
    max-width: 39.6875rem;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 32rem;

  ${media.desktop} {
    gap: 1.625rem;
    max-width: none;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledTabs = styled.div`
  display: flex;
  gap: 1rem;

  ${media.desktop} {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

export const StyledButton = styled.button`
  font-family: var(--ff-bellfair);
  font-weight: var(--fw-400);
  font-size: var(--fs-sm-mob);
  text-align: center;
  text-transform: uppercase;
  color: var(--clr-white);
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: transparent;
  border-radius: 100%;
  padding: 0.5em 1em;
  transition: all 0.3s ease;

  &.active {
    background: var(--clr-white);
    color: var(--clr-cinder);
    border: 1px solid transparent;
  }

  &:not(.active) {
    background: transparent;
  }

  &:hover,
  &:focus {
    border: 1px solid var(--clr-white);
  }

  &:focus-visible {
    outline: 3px solid var(--clr-fog);
    outline-offset: 3px;
  }

  ${media.tablet} {
    font-size: var(--fs-sm-tab);
  }

  ${media.desktop} {
    font-size: var(--fs-sm);
  }
`;
