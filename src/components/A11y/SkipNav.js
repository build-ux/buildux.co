import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  fontFamilySans,
  weightBold,
  spaceDefault,
  spaceHalf,
  colorCharcoal014,
  colorCobalt070,
} from '../../theme/settings';

const SkipNav = ({ children, anchor }) => <StyledSkipNav href={`#${anchor}`}>{children}</StyledSkipNav>;

const StyledSkipNav = styled.a`
  font-family: ${fontFamilySans};
  font-weight: ${weightBold};
  font-size: 2rem;
  line-height: 1.4;
  text-decoration: none;

  &:not(:focus) {
    padding: 0;
    width: 1px;
    height: 1px;
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(0px 0px 99.9% 99.9%);
    overflow: hidden;
    border: 0;
  }

  @media (max-width: 575px) {
    &:focus {
      padding: 1.3rem 2.4rem;
    }
  }

  @media (min-width: 576px) {
    &:focus {
      padding: ${spaceDefault} 2.4rem;
    }
  }

  &:focus {
    position: fixed;
    top: ${spaceHalf};
    left: ${spaceHalf};
    color: ${colorCharcoal014};
    background-color: ${colorCobalt070};
    border: none;
    cursor: pointer;
    outline: 0.2rem solid ${colorCobalt070};
    outline-offset: 0.2rem;
  }
`;

SkipNav.propTypes = {
  children: PropTypes.node.isRequired,
  anchor: PropTypes.string.isRequired,
};

export default SkipNav;
