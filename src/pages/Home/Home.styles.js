import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "../../styles/theme";

export const Container = styled.div`
  display: grid;
  place-content: center;
  gap: 7.4375rem;
  padding-inline: 1.5rem;
  padding-block: 3rem 8.9375rem;

  ${media.tablet} {
    gap: 6.6875rem;
    padding-inline: 2.5rem;
    padding-block: 6.5rem;
  }

  ${media.desktop} {
    grid-template-columns: 1fr 1fr;
    max-width: 69.375rem;
    margin-inline: auto;
    padding-block: 25.625rem 8rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 33.75rem;
`;

export const Heading = styled.h1`
  font-family: var(--ff-barlow);
  font-weight: var(--fw-400);
  font-size: var(--fs-xs-mob);
  text-align: center;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--clr-fog);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${media.tablet} {
    font-size: var(--fs-xs);
    letter-spacing: 0.15em;
  }

  ${media.desktop} {
    text-align: left;
  }
`;

export const Span = styled.span`
  font-family: var(--ff-bellfair);
  font-size: var(--fs-xl);
  color: var(--clr-white);
`;

export const Paragraph = styled.p`
  font-family: var(--ff-barlow);
  font-weight: var(--fw-400);
  font-size: var(--fs-body-mob);
  line-height: 180%;
  text-align: center;
  color: var(--clr-fog);

  ${media.tablet} {
    font-size: var(--fs-body);
  }

  ${media.desktop} {
    text-align: left;
  }
`;

export const Wrapper = styled.div`
  justify-self: center;

  ${media.desktop} {
    /* justify-self: end; */
    align-self: flex-end;
  }
`;

export const StyledLink = styled(Link)`
  font-family: var(--ff-bellfair);
  font-weight: var(--fw-400);
  font-size: var(--fs-btn);
  text-transform: uppercase;
  color: var(--clr-cinder);
  background: var(--clr-white);
  text-decoration: none;
  position: relative;
  z-index: 1;
  display: inline-grid;
  place-items: center;
  padding: 0 1.4em;
  border-radius: 50%;
  aspect-ratio: 1;

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 500ms linear, transform 750ms ease-in-out;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: scale(1.5);
  }

  ${media.tablet} {
    padding: 0 2.1em;
  }
`;
