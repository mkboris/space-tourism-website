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
  --fs-lg: 100px;
  --fs-md: 56px;
  --fs-sm: 32px;
  --fs-xs: 28px;
  --fs-lg-sub: 28px;
  --fs-body: 18px;
  --fs-nav: 16px;
  --fs-sm-sub: 14px;

  /* tablet */
  --fs-lg-tab: 80px;
  --fs-md-tab: 40px;
  --fs-sm-tab: 24px;
  --fs-xs-tab: 20px;
  --fs-body-tab: 16px;

  /* mobile */
  --fs-xl-mob: 80px;
  --fs-lg-mob: 56px;
  --fs-md-mob: 24px;
  --fs-sm-mob: 18px;
  --fs-xs-mob: 16px;
  --fs-body-mob: 15px;
  --fs-nav-mob: 14px;

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

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

button {
  cursor: pointer;
}

`;

export default GlobalStyles;
