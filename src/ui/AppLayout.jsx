import styled, { css } from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";

const StyledAppLayout = styled.div`
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

  @media (min-width: 35rem) {
    ${(props) =>
      props.$bgtablet &&
      css`
        background-image: url(${props.$bgtablet});
      `}
  }

  @media (min-width: 64rem) {
    ${(props) =>
      props.$bgdesktop &&
      css`
        background-image: url(${props.$bgdesktop});
      `}
  }
`;

const Main = styled.main`
  flex: 1;
`;

function AppLayout() {
  const location = useLocation();

  const getBackgroundImages = () => {
    switch (location.pathname) {
      case "/destination":
        return {
          mobile: "/assets/destination/background-destination-mobile.jpg",
          tablet: "/assets/destination/background-destination-tablet.jpg",
          desktop: "/assets/destination/background-destination-desktop.jpg",
        };
      case "/crew":
        return {
          mobile: "/assets/crew/background-crew-mobile.jpg",
          tablet: "/assets/crew/background-crew-tablet.jpg",
          desktop: "/assets/crew/background-crew-desktop.jpg",
        };
      case "/technology":
        return {
          mobile: "/assets/technology/background-technology-mobile.jpg",
          tablet: "/assets/technology/background-technology-tablet.jpg",
          desktop: "/assets/technology/background-technology-desktop.jpg",
        };
      case "/":
      default:
        return {
          mobile: "/assets/home/background-home-mobile.jpg",
          tablet: "/assets/home/background-home-tablet.jpg",
          desktop: "/assets/home/background-home-desktop.jpg",
        };
    }
  };

  const { mobile, tablet, desktop } = getBackgroundImages();

  return (
    <StyledAppLayout $bgmobile={mobile} $bgtablet={tablet} $bgdesktop={desktop}>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
