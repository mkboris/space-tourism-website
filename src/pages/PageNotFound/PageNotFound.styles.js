import styled from "styled-components";
import { media } from "../../styles/theme";

export const Container = styled.div`
  min-height: 100dvh;
  background-color: var(--clr-cinder);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  ${media.tablet} {
  }

  ${media.desktop} {
  }
`;

export const Box = styled.div`
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;
