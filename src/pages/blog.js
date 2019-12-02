import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import Header from '../components/blogpage/header'
import styled from 'styled-components';
import styles from './blog.module.css';
class Blog extends React.Component {
  componentDidMount(){
    console.log(this.props.data)
  }
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      // <Layout location={this.props.location} title={siteTitle}>
      <div className = {styles.parent}>
        <Header title = {siteTitle} />
        <SEO title="All posts" />
        <div>
        <div className={styles.list}>
        {/* <Bio /> */}
        {/* <h1>hfdh</h1> */}
        <div className = {styles.blogItemsContainer}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug} className={styles.blogItem} >
                <img className={styles.blogItemImage} src={`${node.frontmatter.image}`} />
                <main style = {{padding : 10, position : 'relative'}}>
                <h4
                className={styles.blogItemTitleContainer}
                >
                  <Link
                  className=  {styles.blogItemTitle}
                    // style={{ boxShadow: `none`,color : 'black', font : 'bold 20px Montserrat' }}
                    to={`blog${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h4>
                <small className={styles.blogItemDate}>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                </main>
              </div>
            )
          })}
        </div>
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      {/* </Layout> */}
      </div>
      </div>
      </div>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image
          }
        }
      }
    }
  }
`
//className={styles.textContainer} style = {{ display : 'flex',flexDirection : 'column', flex : 1, backgroundColor : 'blue'}}