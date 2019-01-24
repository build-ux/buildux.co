import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  spaceQuad,
  colorBirch093,
  colorCobalt070,
  colorCobalt090,
  spaceStackDefault,
  spaceStackDouble,
  spaceStackHalf,
  spaceCenter,
  spaceDefault,
} from '../theme/settings';

import SEO from '../components/SEO/SEO';
import GlobalLayout from '../components/Layout/GlobalLayout';
import Logo from '../components/UI/Logo';
import ScreenReaderOnly from '../components/A11y/ScreenReaderOnly';
import TypeTitle from '../components/Typography/TypeTitle';
import TypeCopyLarge from '../components/Typography/TypeCopyLarge';
import TypeCopyLargeEmphasized from '../components/Typography/TypeCopyLargeEmphasized';
import TypeHeading from '../components/Typography/TypeHeading';
import IconLink from '../components/UI/Icons/IconLink';

const seoTitle = 'Build UX | Videos on Expert HTML, CSS, and Accessilbity';
const seoDescription =
  'Build UX is a video series on expert HTML, CSS, and accessibility. Watch and learn how to take web designs from static mockups to robust user experiences.';

const IndexPage = props => (
  <>
    <SEO seoTitle={seoTitle} seoDescription={seoDescription} pagePath={props.location.pathname} />
    <GlobalLayout>
      <StyledMain id="mainContent">
        <Logo />
        <StyledContentWrap>
          <ScreenReaderOnly as="h1">Build UX</ScreenReaderOnly>
          <StyledTypeTitle as="h2">Coming soon</StyledTypeTitle>
          <StyledTypeCopy as="p">
            <TypeCopyLargeEmphasized>Build UX</TypeCopyLargeEmphasized> is a video series on{' '}
            <TypeCopyLargeEmphasized>expert HTML/CSS</TypeCopyLargeEmphasized>.
          </StyledTypeCopy>
          <StyledTypeCopy as="p">
            <TypeCopyLargeEmphasized>Watch</TypeCopyLargeEmphasized> and{' '}
            <TypeCopyLargeEmphasized>learn</TypeCopyLargeEmphasized> how to take designs from{' '}
            <TypeCopyLargeEmphasized>static mockups</TypeCopyLargeEmphasized> to{' '}
            <TypeCopyLargeEmphasized>robust user experiences</TypeCopyLargeEmphasized>.
          </StyledTypeCopy>
          <StyledTypeHeading as="h2">Stay updated</StyledTypeHeading>
          <StyledSocialLinks>
            <StyledSocialLink>
              <StyledOutboundLink as={OutboundLink} href="https://youtube.com/buildux">
                <IconLink />
                <StyledLinkText>YouTube</StyledLinkText>
              </StyledOutboundLink>
            </StyledSocialLink>
            <StyledSocialLink>
              <StyledOutboundLink as={OutboundLink} href="https://github.com/build-ux">
                <IconLink />
                <StyledLinkText>GitHub</StyledLinkText>
              </StyledOutboundLink>
            </StyledSocialLink>
            <StyledSocialLink>
              <StyledOutboundLink as={OutboundLink} href="https://twitter.com/build_ux">
                <IconLink />
                <StyledLinkText>Twitter</StyledLinkText>
              </StyledOutboundLink>
            </StyledSocialLink>
            <StyledSocialLink>
              <StyledOutboundLink as={OutboundLink} href="https://www.instagram.com/build_ux">
                <IconLink />
                <StyledLinkText>Instagram</StyledLinkText>
              </StyledOutboundLink>
            </StyledSocialLink>
          </StyledSocialLinks>
        </StyledContentWrap>
      </StyledMain>
    </GlobalLayout>
  </>
);

const StyledMain = styled.main`
  padding: ${spaceQuad};
  color: ${colorBirch093};
`;

const StyledContentWrap = styled.div`
  margin: ${spaceCenter};
  max-width: 32rem;
`;

const StyledTypeTitle = styled(TypeTitle)`
  margin: ${spaceStackDouble};
`;

const StyledTypeCopy = styled(TypeCopyLarge)`
  &:not(:last-of-type) {
    margin: ${spaceStackDefault};
  }

  &:last-of-type {
    margin: ${spaceStackDouble};
  }
`;

const StyledTypeHeading = styled(TypeHeading)`
  margin: ${spaceStackDefault};
`;

const StyledSocialLinks = styled.ul``;

const StyledSocialLink = styled.li`
  margin: ${spaceStackHalf};
  display: flex;
  align-items: center;
`;

const StyledOutboundLink = styled(TypeCopyLargeEmphasized)`
  color: ${colorCobalt070};
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${colorCobalt090};

    svg {
      fill: ${colorCobalt090};
    }
  }

  &:focus {
    outline: 0.2rem solid ${colorCobalt090};
    outline-offset: 0.2rem;
  }
`;

const StyledLinkText = styled.span`
  margin-left: ${spaceDefault};
  display: inline-block;
  text-decoration: underline;
`;

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
