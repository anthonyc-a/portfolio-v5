import React from "react"
import "../styles/Index.css"
import Link from "gatsby-link"
import Loader from "../components/Loader/Loader"
import Layout from "../components/Layout/Layout"
import LinkArrow from "../components/Layout/Icons/LinkArrow"
import SocialIcons from "../components/Layout/Icons/Social/SocialIcons"

export default function Home() {
  const [cursorExpand, setCursorExpand] = React.useState(false)
  const [infoActive, setInfoActive] = React.useState(false)
  return (
    <>
      <Layout
        infoActive={infoActive}
        setInfoActive={setInfoActive}
        cursorExpand={cursorExpand}
        setCursorExpand={setCursorExpand}
      >
        <div className="hero-contain">
          <div className="title-contain">
            <div className="title">
              <h1>anthony</h1>
              <h1>animba</h1>
            </div>
            <LinkArrow />
          </div>
          <div className="hero-info-contain">
            <span>web designer — developer</span>
            <span>portfolio 2021/22</span>
          </div>
          <div className="hero-l-contain">
            <p>
              I design and build fast, responsive websites to ensure your
              business stands out.
            </p>
            <SocialIcons />
            <span>Now available for freelance work.</span>
          </div>
          <div className="hero-r-contain">
            <div className="version">v5.1.2</div>
            <Link to="/work" className="work-btn">
              view work
            </Link>
            <a href="/" className="about-btn">about</a>
          </div>
        </div>
      </Layout>
    </>
  )
}
