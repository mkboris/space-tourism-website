import styled, { css } from "styled-components";
import { media } from "../../styles/theme";

export const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${(props) =>
    props.$bgmobile &&
    css`
      background-image: url(${props.$bgmobile});
    `}

  ${media.tablet} {
    ${(props) =>
      props.$bgtablet &&
      css`
        background-image: url(${props.$bgtablet});
      `}
  }

  ${media.desktop} {
    ${(props) =>
      props.$bgdesktop &&
      css`
        background-image: url(${props.$bgdesktop});
      `}
  }
`;

export const Main = styled.main`
  flex: 1;
`;
