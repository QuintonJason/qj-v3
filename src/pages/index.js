import React from "react";
// import g from "glamorous";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

import styles from "../css/styles.scss";

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>
        Q
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>	
	        <Link
	            to={node.fields.slug}
	          >
	          <h3>
	            {node.frontmatter.title}{" "}
	            <span>— {node.frontmatter.date}</span>
	          </h3>
	          <p>{node.excerpt}</p>
	        </Link>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            external_url
          }
          fields{
          	slug
          }
          excerpt
        }
      }
    }
  }
`;