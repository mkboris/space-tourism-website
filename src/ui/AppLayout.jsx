import styled, { css } from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

import bgDeskHome from "../assets/home/background-home-desktop.jpg";
import bgTabHome from "../assets/home/background-home-tablet.jpg";
import bgMobHome from "../assets/home/background-home-mobile.jpg";

import bgDeskDest from "../assets/destination/background-destination-desktop.jpg";
import bgTabDest from "../assets/destination/background-destination-tablet.jpg";
import bgMobDest from "../assets/destination/background-destination-mobile.jpg";

import bgDeskCrew from "../assets/crew/background-crew-desktop.jpg";
import bgTabCrew from "../assets/crew/background-crew-tablet.jpg";
import bgMobCrew from "../assets/crew/background-crew-mobile.jpg";

import bgDeskTech from "../assets/technology/background-technology-desktop.jpg";
import bgTabTech from "../assets/technology/background-technology-tablet.jpg";
import bgMobTech from "../assets/technology/background-technology-mobile.jpg";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${(props) =>
    props.bgMobile &&
    css`
      background-image: url(${props.bgMobile});
    `}

  @media (min-width: 768px) {
    ${(props) =>
      props.bgTablet &&
      css`
        background-image: url(${props.bgTablet});
      `}
  }

  @media (min-width: 1024px) {
    ${(props) =>
      props.bgDesktop &&
      css`
        background-image: url(${props.bgDesktop});
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
          mobile: bgMobDest,
          tablet: bgTabDest,
          desktop: bgDeskDest,
        };
      case "/crew":
        return {
          mobile: bgMobCrew,
          tablet: bgTabCrew,
          desktop: bgDeskCrew,
        };
      case "/technology":
        return {
          mobile: bgMobTech,
          tablet: bgTabTech,
          desktop: bgDeskTech,
        };
      case "/":
      default:
        return {
          mobile: bgMobHome,
          tablet: bgTabHome,
          desktop: bgDeskHome,
        };
    }
  };

  const { mobile, tablet, desktop } = getBackgroundImages();

  return (
    <StyledAppLayout bgMobile={mobile} bgTablet={tablet} bgDesktop={desktop}>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
