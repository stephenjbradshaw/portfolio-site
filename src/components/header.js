import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"
import {
  Nav,
  Title,
  BurgerButton,
  Ul,
  StyledThemeButton,
} from "../styles/header.styles"

export default function Header({ themeIsLight, setThemeIsLight }) {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <header>
      <Nav open={navIsOpen}>
        <Title to={`/`}>
          <h1>{data.site.siteMetadata.title}</h1>
        </Title>
        <StyledThemeButton
          themeIsLight={themeIsLight}
          setThemeIsLight={setThemeIsLight}
        />
        <BurgerButton
          onClick={() => {
            setNavIsOpen(!navIsOpen)
          }}
        >
          {navIsOpen ? (
            <FaTimes aria-hidden="true" tabIndex="-1" />
          ) : (
            <FaBars aria-hidden="true" tabIndex="-1" />
          )}
          <span>Click to open menu</span>
        </BurgerButton>
        <Ul open={navIsOpen}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/projects/">Projects</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </Ul>
      </Nav>
    </header>
  )
}
