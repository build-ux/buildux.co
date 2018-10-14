import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO/SEO';
import GlobalLayout from '../components/Layout/GlobalLayout';

const PostPage = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { author, date, title, seoTitle, seoDescription, seoImage },
      fields: { slug },
    },
  },
}) => (
  <>
    <SEO
      author={author}
      datePublished={date}
      seoTitle={seoTitle}
      seoDescription={seoDescription}
      seoImage={seoImage}
      pagePage={slug}
      isBlogPost
    />
    <GlobalLayout>
      <article id="mainContent">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </GlobalLayout>
  </>
);

export const postPageQuery = graphql`
  query PostPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author
        date
        title
        seoTitle
        seoDescription
        seoImage
      }
      fields {
        slug
      }
    }
  }
`;

export default PostPage;
