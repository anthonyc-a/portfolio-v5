import React from "react"
import LinkArrow from "../../Icons/LinkArrow"

const OpenSite = ({ setCursorExpand }) => {
  return (
    <div className="open-site">
      <div className="site-name">archvizual</div>
      <a
        href="/"
        className="open-btn"
        onMouseEnter={() => {
          setCursorExpand(true)
        }}
        onMouseLeave={() => {
          setCursorExpand(false)
        }}
      >
        open site <LinkArrow />
      </a>
    </div>
  )
}

export default OpenSite
