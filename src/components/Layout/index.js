import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { useStaticQuery, graphql } from "gatsby"
import { Grommet, Box } from "grommet"
import { grommet } from "grommet/themes"
import Nav from "../Nav"

const Container = ({ children, ...rest }) => (
  <Box as="main" pad="medium" {...rest}>
    {children}
  </Box>
)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Grommet theme={grommet} full>
      <Box height="100vh" justify="between">
        <Nav />
        <Container height="100%">{children}</Container>
        <Box as="footer" background="brand" height="xsmall" pad="medium">
          FOOTER
        </Box>
      </Box>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
