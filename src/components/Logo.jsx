import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../styles/theme";

const StyledLink = styled(Link)`
  &:focus-visible {
    outline: 2px solid var(--clr-fog);
    outline-offset: 4px;
  }
`;

const StyledLogo = styled.img`
  width: 40px;

  ${media.tablet} {
    width: 48px;
  }
`;

function Logo() {
  return (
    <StyledLink to="/">
      <div>
        <StyledLogo src="/assets/shared/logo.svg" alt="space tourism logo" />
      </div>
    </StyledLink>
  );
}

export default Logo;
