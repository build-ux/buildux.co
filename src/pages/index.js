import React from 'react';
import PropTypes from 'prop-types';

import SEO from '../components/SEO/SEO';
import GlobalLayout from '../components/Layout/GlobalLayout';

const seoTitle = 'Build UX | HOMEPAGE TITLE';
const seoDescription = 'Build UX HOMEPAGE DESCRIPTION';
const seoImage = '/homepage-image';

const IndexPage = props => (
  <>
    <SEO seoTitle={seoTitle} seoDescription={seoDescription} seoImage={seoImage} pagePath={props.location.pathname} />
    <GlobalLayout>
      <main id="mainContent">Main</main>
    </GlobalLayout>
  </>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;