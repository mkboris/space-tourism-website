import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
   /* COLORS */
  --clr-cinder: hsl(230, 35%, 7%);
  --clr-fog: hsl(231, 77%, 90%);
  --clr-white: hsl(0, 0%, 100%);

  /* TYPOGRAPHY */

  /* font-families */
  --ff-bellfair: "Bellefair", serif;
  --ff-barlow: "Barlow Condensed", serif;

  /* font-sizes */
  /* desktop */
  --fs-xl: clamp(5rem, 9vw + 1.5rem, 9.375rem);
  --fs-xlg: clamp(1rem, 1vw + 0.9rem, 1.75rem);
  --fs-btn: clamp(1.125rem, 1.5vw + 1rem, 2rem);
  --fs-lg: 6.25rem;
  --fs-md: 3.5rem;
  --fs-sm: 2rem;
  --fs-xs: 1.75rem;
  --fs-lg-sub: 1.75rem;
  --fs-body: 1.125rem;
  --fs-nav: 1rem;
  --fs-sm-sub: 0.875rem;

  /* tablet */
  --fs-lg-tab: 5rem;
  --fs-md-tab: 2.5rem;
  --fs-sm-tab: 1.5rem;
  --fs-xs-tab: 1.25rem;
  --fs-body-tab: 1rem;

  /* mobile */
  --fs-xl-mob: 5rem;
  --fs-lg-mob: 3.5rem;
  --fs-md-mob: 1.5rem;
  --fs-sm-mob: 1.125rem;
  --fs-xs-mob: 1rem;
  --fs-body-mob: 0.9375rem;
  --fs-nav-mob: 0.875rem;

  /* font-weight */
  --fw-400: 400;
  --fw-500: 500;
  --fw-700: 700;
}

/* RESET */

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Prevent font size inflation */
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
  box-sizing: border-box;
}

/* Remove default margin in favour of better control in authored CSS */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin-block-end: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core body defaults */
body {
  min-height: 100dvh;
  line-height: 1.5;
}

/* Remove default margins */
html,
body {
  margin: 0;
  padding: 0;
  border: 0;
}

* {
  margin: 0;
}

/* Set shorter line heights on headings and interactive elements */
h1,
h2,
h3,
h4,
button,
input,
label {
  line-height: 1.1;
}

/* Balance text wrapping on headings */
h1,
h2,
h3,
h4 {
  overflow-wrap: break-word;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}

/* Make images easier to work with */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Make sure textareas without a rows attribute are not tiny */
textarea:not([rows]) {
  min-height: 10em;
}

/* Anything that has been anchored to should have extra scroll margin */
:target {
  scroll-margin-block: 5ex;
}

/* remove animations for people who've turned them off */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Smooth scroll */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

button {
  cursor: pointer;
}

`;

export default GlobalStyles;
