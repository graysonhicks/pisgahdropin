import React from "react"
import styled from "styled-components"

import { Anchor, Box, ResponsiveContext, Heading } from "grommet"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const RelativeBox = styled(Box)`
  position: relative;
`

const AbsBox = styled(Box)`
  position: absolute;
  z-index: 1;
`

const NavLink = ({ to, children }) => (
  <Anchor as={Link} to={to} margin={{ right: "medium" }}>
    {children}
  </Anchor>
)

const NavHeader = () => {
  const { logo, bg } = useStaticQuery(graphql`
    query mainLogoQuery {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      bg: file(relativePath: { eq: "bg.jpeg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1600
            cropFocus: NORTHWEST
            duotone: { highlight: "#774C60", shadow: "#171738" }
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box>
          <RelativeBox height="medium" direction="column">
            <AbsBox width="100%" height="100%" align="center" justify="center">
              <Heading level={1} color="light-1" textAlign="center">
                Pisgah Drop In
              </Heading>
            </AbsBox>

            <Img fluid={bg.childImageSharp.fluid} />
          </RelativeBox>

          <Box
            direction="row"
            align="center"
            justify="center"
            alignSelf="center"
            gap="medium"
            height="xsmall"
          >
            <Box justify="center" direction="row">
              <NavLink to="/about">About</NavLink>
              <NavLink to="/hours-and-rates">Hours & Rates</NavLink>
              <NavLink to="/schedule-a-time">Schedule a Time</NavLink>
            </Box>
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default NavHeader
