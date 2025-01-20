import styled from "styled-components";
import { media } from "../../styles/theme";

export const StyledCrew = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
  align-items: center;
  padding-inline: 1.5rem;
  padding-block: 3rem 1.5rem;

  ${media.tablet} {
    padding: 2.5rem;
    padding-block-end: 0;
    gap: 2.5rem;
  }

  ${media.desktop} {
    padding-block: 3rem;
    max-width: 69.375rem;
    margin-inline: auto;
    gap: 2.5625rem;
  }
`;

export const Img = styled.img`
  max-width: 60%;

  ${media.tablet} {
    max-width: 80%;
  }

  ${media.desktop} {
    max-width: 100%;
  }
`;

export const StyledTabbed = styled.div`
  display: grid;
  place-items: center;
  gap: 2.5rem;

  ${media.desktop} {
    grid-template-columns: 1fr 1fr;
    gap: 1.875rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 6.25rem;

  ${media.tablet} {
    gap: 5rem;
  }

  ${media.desktop} {
    gap: 14.25rem;
    align-items: flex-start;
    text-align: left;
  }
`;

export const StyledTabs = styled.div`
  display: flex;
  gap: 1rem;

  ${media.desktop} {
    gap: 2.5rem;
  }
`;

export const StyledButton = styled.button`
  border: 0;
  border-radius: 50%;
  padding: 0.3em;
  transition: all 0.3s ease;

  &.active {
    background: var(--clr-white);
  }

  &:not(.active) {
    background: var(--clr-white);
    mix-blend-mode: normal;
    opacity: 0.17;
  }

  &:hover,
  &:focus {
    background: var(--clr-white);
    mix-blend-mode: normal;
    opacity: 0.5;
  }

  &:focus-visible {
    outline: 3px solid var(--clr-fog);
    outline-offset: 3px;
  }

  ${media.desktop} {
    padding: 0.5em;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.625rem;
  max-width: 32rem;

  ${media.desktop} {
    max-width: 33.75rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  ${media.tablet} {
    gap: 1rem;
  }
`;
