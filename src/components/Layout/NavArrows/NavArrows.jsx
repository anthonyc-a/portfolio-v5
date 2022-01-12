import React from "react"
import ArrowLarge from "../Icons/ArrowLarge"

const NavArrows = ({ setCursorExpand }) => {
  return (
    <div className="nav-arrows">
      <div
        className="nav-arrow back"
        onMouseEnter={() => {
          setCursorExpand(true)
        }}
        onMouseLeave={() => {
          setCursorExpand(false)
        }}
      >
        <ArrowLarge />
      </div>
      <div
        className="nav-arrow forw"
        onMouseEnter={() => {
          setCursorExpand(true)
        }}
        onMouseLeave={() => {
          setCursorExpand(false)
        }}
      >
        <ArrowLarge />
      </div>
    </div>
  )
}

export default NavArrows
