import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const FontUrl = `${env.PUBLIC_URL}/assets/fonts/`;

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Maple_story";
  src: url(${FontUrl}Maple_story_Bold.ttf) format("truetype");
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: "Maple_story";
  src: url(${FontUrl}Maple_story_Light.ttf) format("truetype");
  font-weight: normal;
  font-style: normal;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
	line-height: 1;
  overflow: hidden;
  font-family: "Maple_story";
  background-color: RGB(68, 85, 51);
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
