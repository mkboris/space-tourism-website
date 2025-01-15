import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { StyledAppLayout, Main } from "./AppLayout.styles";
import Header from "../../components/Header/Header";

const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

function AppLayout() {
  const location = useLocation();

  const getBackgroundImages = () => {
    switch (location.pathname) {
      case "/destination":
        return [
          "/assets/destination/background-destination-mobile.jpg",
          "/assets/destination/background-destination-tablet.jpg",
          "/assets/destination/background-destination-desktop.jpg",
        ];
      case "/crew":
        return [
          "/assets/crew/background-crew-mobile.jpg",
          "/assets/crew/background-crew-tablet.jpg",
          "/assets/crew/background-crew-desktop.jpg",
        ];
      case "/technology":
        return [
          "/assets/technology/background-technology-mobile.jpg",
          "/assets/technology/background-technology-tablet.jpg",
          "/assets/technology/background-technology-desktop.jpg",
        ];
      case "/":
      default:
        return [
          "/assets/home/background-home-mobile.jpg",
          "/assets/home/background-home-tablet.jpg",
          "/assets/home/background-home-desktop.jpg",
        ];
    }
  };

  useEffect(() => {
    preloadImages([
      "/assets/home/background-home-mobile.jpg",
      "/assets/home/background-home-tablet.jpg",
      "/assets/home/background-home-desktop.jpg",
      "/assets/destination/background-destination-mobile.jpg",
      "/assets/destination/background-destination-tablet.jpg",
      "/assets/destination/background-destination-desktop.jpg",
      "/assets/crew/background-crew-mobile.jpg",
      "/assets/crew/background-crew-tablet.jpg",
      "/assets/crew/background-crew-desktop.jpg",
      "/assets/technology/background-technology-mobile.jpg",
      "/assets/technology/background-technology-tablet.jpg",
      "/assets/technology/background-technology-desktop.jpg",
    ]);
  }, []);

  const [mobile, tablet, desktop] = getBackgroundImages();

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
