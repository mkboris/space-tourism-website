# Frontend Mentor - Space tourism website

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](/public/preview.jpg)

### Links

- [Live Site](https://space-tourism-website-ten-red.vercel.app/)

### Built with

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Styled Components](https://styled-components.com/)
- [Framer Motion](https://motion.dev/)

### What I learned

This project was relatively straightforward. I focused on learning how to build a single-page application (SPA) using React Router, and since the routing logic was simple, the implementation was easy to follow. Also, it was my first time working with Styled Components, and I really liked it. I plan to continue using it and learning more about its features and best practices.

One area I encountered some challenges was setting different background images for individual pages while maintaining a semantic HTML structure and avoiding duplication. I addressed this by utilizing the `useLocation` hook from React Router, which retrieves the current route's path. Based on this path, I returned an array of image URLs and passed them as props to the StyledAppLayout component for dynamic background handling.

```js
const location = useLocation();

const getBackgroundImages = () => {
  switch (location.pathname) {
    case "/destination":
      return [
        // destination background images
      ];
    case "/crew":
      return [
        // crew background images
      ];
    case "/technology":
      return [
        // technolgy background images
      ];
    case "/":
    default:
      return [
        // home background images
      ];
  }
};
```

```js
export const StyledAppLayout = styled.div`
  ${(props) =>
    props.$bgmobile &&
    css`
      background-image: url(${props.$bgmobile});
    `}
`;
```

Another minor issue the site encountered was a brief flash of a white screen when navigating to other pages for the first time. To prevent this, I preloaded the images to ensure that all required background images were cached in the browser beforehand, avoiding flickering or delays when switching routes.

```js
const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

useEffect(() => {
  preloadImages([
    // images
  ]);
}, []);
```

### Continued development

One area I could improve is the animation transitions on the tabbed components. When switching tabs for the first time, the animation feels a bit glitchy. I need to gain more practice with Framer Motion to refine these transitions and make them smoother.

## Author

- Frontend Mentor - [mkboris](https://www.frontendmentor.io/profile/mkboris)
- Twitter - [makogeboris](https://x.com/makogeboris)
