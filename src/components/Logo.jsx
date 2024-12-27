import styled from "styled-components";
import { Link } from "react-router-dom";

const Img = styled.img``;

function Logo() {
  return (
    <Link to="/">
      <Img src="/logo.svg" alt="Logo" />
    </Link>
  );
}

export default Logo;
