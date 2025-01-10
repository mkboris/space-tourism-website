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
        font-size: var(--fs-xs);
        letter-spacing: 0.15em;
        align-self: flex-start;
      }

      ${media.desktop} {
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
    `}

    
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
    `}
`;

export default Heading;
