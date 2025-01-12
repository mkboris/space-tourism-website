import styled, { css } from "styled-components";
import { media } from "../styles/theme";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-family: var(--ff-barlow);
      font-weight: var(--fw-400);
      font-size: var(--fs-xs-mob);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--clr-fog);
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 1.5rem;

      ${media.tablet} {
        font-size: var(--fs-xs-tab);
        align-self: flex-start;
      }

      ${media.desktop} {
        font-size: var(--fs-xs);
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-family: var(--ff-bellfair);
      font-weight: var(--fw-400);
      font-size: var(--fs-sm-mob);
      text-transform: uppercase;
      color: var(--clr-white);
      mix-blend-mode: normal;
      opacity: 0.5;

      ${media.tablet} {
        font-size: var(--fs-sm-tab);
      }

      ${media.desktop} {
        font-size: var(--fs-sm);
      }
    `}

    
  ${(props) =>
    props.as === "h3" &&
    css`
      font-family: var(--ff-bellfair);
      font-weight: var(--fw-400);
      font-size: var(--fs-md-mob);
      text-transform: uppercase;
      color: var(--clr-white);

      ${media.tablet} {
        font-size: var(--fs-md-tab);
      }

      ${media.desktop} {
        font-size: var(--fs-md);
      }
    `}
`;

export default Heading;
