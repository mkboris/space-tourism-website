import styled from "styled-components";
import { media } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.375rem;
  align-items: center;
  padding-inline: 1.5rem;
  padding-block: 3rem 1.5rem;

  ${media.tablet} {
    padding: 2.5rem;
    gap: 3rem;
  }

  ${media.desktop} {
    padding-block: 3rem 11.6875rem;
    max-width: 69.375rem;
    margin-inline: auto;
    gap: 8.6875rem;
  }
`;

export const Span = styled.span`
  font-weight: var(--fw-700);
  font-size: var(--fs-xs-mob);
  letter-spacing: 0.15em;
  color: var(--clr-white);
  opacity: 0.25;
  mix-blend-mode: normal;

  ${media.tablet} {
    font-size: var(--fs-xs-tab);
  }

  ${media.desktop} {
    font-size: var(--fs-xs);
    letter-spacing: 4.725px;
  }
`;

export const StyledTabbed = styled.div`
  display: grid;
  place-items: center;
  gap: 3.375rem;

  ${media.desktop} {
    grid-template-columns: 1fr 1fr;
    gap: 6.6875rem;
  }
`;

export const Img = styled.img`
  max-width: 60%;

  ${media.desktop} {
    max-width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;

  ${media.tablet} {
    padding-block-start: 3rem;
  }

  ${media.desktop} {
    gap: 2.5rem;
    align-items: flex-start;
    text-align: left;
    padding-block-start: 0;
  }
`;

export const StyledTabs = styled.div`
  display: flex;
  gap: 2rem;
`;

export const StyledButton = styled.button`
  font-family: var(--ff-barlow);
  font-size: var(--fs-nav-mob);
  font-weight: var(--fw-400);
  color: var(--clr-fog);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  background: transparent;
  border: transparent;
  border-bottom: 3px solid transparent;
  padding: 0 0 0.9375rem 0;
  transition: all 0.3s ease;

  &.active {
    color: var(--clr-white);
    border-bottom: 3px solid var(--clr-white);
  }

  &:not(.active) {
    color: var(--clr-fog);
  }

  &:hover,
  &:focus {
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  }

  ${media.tablet} {
    font-size: var(--fs-nav);
  }
`;

export const Article = styled.article`
  max-width: 32.5rem;

  ${media.desktop} {
    max-width: 27.8125rem;
  }
`;

export const Title = styled.h2`
  font-family: var(--ff-bellfair);
  font-weight: var(--fw-400);
  font-size: var(--fs-lg-mob);
  text-transform: uppercase;
  text-align: center;
  color: var(--clr-white);

  ${media.tablet} {
    font-size: var(--fs-lg-tab);
  }

  ${media.desktop} {
    font-size: var(--fs-lg);
    text-align: left;
  }
`;

export const Paragraph = styled.p`
  font-family: var(--ff-barlow);
  font-weight: var(--fw-400);
  font-size: var(--fs-xs-mob);
  line-height: 180%;
  text-align: center;
  color: var(--clr-fog);
  padding-top: 1rem;

  ${media.desktop} {
    text-align: left;
    font-size: var(--fs-body);
  }
`;

export const Line = styled.hr`
  width: 100%;
  height: 1px;
  background: var(--clr-white);
  opacity: 0.25;
  margin-block: 1.5rem;

  ${media.desktop} {
    margin-block: 2.5rem;
  }
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  ${media.tablet} {
    gap: 6rem;
    flex-direction: row;
  }

  ${media.desktop} {
    justify-content: flex-start;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  ${media.desktop} {
    align-items: flex-start;
  }
`;

export const StatHeading = styled.h3`
  font-family: var(--ff-barlow);
  font-weight: var(--fw-400);
  font-size: var(--fs-sm-sub);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--clr-fog);
`;

export const StatParagraph = styled.p`
  font-family: var(--ff-bellfair);
  font-weight: var(--fw-400);
  font-size: var(--fs-lg-sub);
  text-transform: uppercase;
  color: var(--clr-white);
`;
