import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../styles/theme";

const StyledLogo = styled.img`
  width: 40px;

  ${media.tablet} {
    width: 48px;
  }
`;

function Logo() {
  return (
    <Link to="/">
      <div>
        <StyledLogo
          src="/public/assets/shared/logo.svg"
          alt="space tourism logo"
        />
      </div>
    </Link>
  );
}

export default Logo;
