import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

import {
  fontFamilySans,
  weightLight,
  weightMedium,
  weightRegular,
  weightSemiBold,
  weightBold,
  colorCharcoal014,
  colorCharcoal023,
} from '../../theme/settings';

// Typography
import ibmPlexSansLightTTF from '../../assets/fonts/ibm-plex-sans/IBMPlexSans-Light.ttf';
import ibmPlexSansLightWOFF from '../../assets/fonts/ibm-plex-sans/IBMPlexSans-Light.woff';
import ibmPlexSansLightWOFF2 from '../../assets/fonts/ibm-plex-sans/IBMPlexSans-Light.woff2';

import ibmPlexSansRegularTTF from '../../assets/fonts/ibm-plex-sans/IBMPlexSans-Regular.ttf';
import ibmPlexSansRegularWOFF from '../../assets/fonts/ibm-plex-sans/IBMPlexSans-Regular.woff';
import ibmPlexSansRegularWOFF2 from '../../assets/fonts/ibm-plex-sans/IBMPlexSans-Regular.woff2';

import ibmPlexSansMediumTTF from '../../assets/fonts/ibm-plex-sans/IBMPlexSans-Medium.ttf';
import ibmPlexSansMediumWOFF from '../../assets/fonts/ibm-plex-sans/IBMPlexSans-Medium.woff';
import ibmPlexSansMediumWOFF2 from '../../assets/fonts/ibm-plex-sans/IBMPlexSans-Medium.woff2';

import ibmPlexSansSemiBoldTTF from '../../assets/fonts/ibm-plex-sans/IBMPlexSans-SemiBold.ttf';
import ibmPlexSansSemiBoldWOFF from '../../assets/fonts/ibm-plex-sans/IBMPlexSans-SemiBold.woff';
import ibmPlexSansSemiBoldWOFF2 from '../../assets/fonts/ibm-plex-sans/IBMPlexSans-SemiBold.woff2';

import ibmPlexSansBoldTTF from '../../assets/fonts/ibm-plex-sans/IBMPlexSans-Bold.ttf';
import ibmPlexSansBoldWOFF from '../../assets/fonts/ibm-plex-sans/IBMPlexSans-Bold.woff';
import ibmPlexSansBoldWOFF2 from '../../assets/fonts/ibm-plex-sans/IBMPlexSans-Bold.woff2';

// Components
import SkipNav from '../A11y/SkipNav';

const GlobalStyle = createGlobalStyle`
  /* Typography */
  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: ${weightLight};
    src: url(${ibmPlexSansLightWOFF2}) format('woff2'),
      url(${ibmPlexSansLightWOFF}) format('woff'),
      url(${ibmPlexSansLightTTF}) format('ttf');
  }

  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: ${weightRegular};
    src: url(${ibmPlexSansRegularWOFF2}) format('woff2'),
      url(${ibmPlexSansRegularWOFF}) format('woff'),
      url(${ibmPlexSansRegularTTF}) format('ttf');
  }

  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: ${weightMedium};
    src: url(${ibmPlexSansMediumWOFF2}) format('woff2'),
      url(${ibmPlexSansMediumWOFF}) format('woff'),
      url(${ibmPlexSansMediumTTF}) format('ttf');
  }

  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: ${weightSemiBold};
    src: url(${ibmPlexSansSemiBoldWOFF2}) format('woff2'),
      url(${ibmPlexSansSemiBoldWOFF}) format('woff'),
      url(${ibmPlexSansSemiBoldTTF}) format('ttf');
  }

  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: ${weightBold};
    src: url(${ibmPlexSansBoldWOFF2}) format('woff2'),
      url(${ibmPlexSansBoldWOFF}) format('woff'),
      url(${ibmPlexSansBoldTTF}) format('ttf');
  }

  /* Reset */
  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */

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
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    border: 0;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
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
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  /* Base */
  html, body {
    height: 100%;
  }

  body {
    font-family: ${fontFamilySans};
    font-size: 1.6rem;
    background-color: ${colorCharcoal014};
    border-top: 3.2rem solid ${colorCharcoal023};
  }
`;

const GlobalLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <SkipNav anchor="mainContent">Skip to main content</SkipNav>
    <div>{children}</div>
  </>
);

GlobalLayout.propTypes = {
  children: PropTypes.node,
};

export default GlobalLayout;
