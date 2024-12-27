import styled from "styled-components";
import Logo from "./Logo";
import PageNav from "./PageNav";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <PageNav />
    </StyledHeader>
  );
}

export default Header;
