import React from "react"
import ArrowLarge from "../Icons/ArrowLarge"
import {
  CountDispatchContext,
  CountStateContext,
} from "../../context/GlobalCountProvider"
import { projectData } from "../../Projects/ProjectData"

const NavArrows = ({ setCursorExpand }) => {
  const count = React.useContext(CountStateContext)
  const updateCount = React.useContext(CountDispatchContext)
  console.log(count.count)

  return (
    <div className="nav-arrows">
      <div
        className={count.count === 0 ? "nav-arrow inactive" : "nav-arrow"}
        onMouseEnter={() => {
          setCursorExpand(true)
        }}
        onMouseLeave={() => {
          setCursorExpand(false)
        }}
        onClick={() => {
          updateCount({ type: "MINUS_COUNT" })
        }}
        onKeyDown={() => {
          updateCount({ type: "MINUS_COUNT" })
        }}
        role={"button"}
        tabIndex={0}
      >
        <ArrowLarge />
      </div>
      <div
        className={
          count.count === projectData.length - 1
            ? "nav-arrow inactive"
            : "nav-arrow"
        }
        onMouseEnter={() => {
          setCursorExpand(true)
        }}
        onMouseLeave={() => {
          setCursorExpand(false)
        }}
        onClick={() => {
          updateCount({ type: "ADD_COUNT" })
        }}
        onKeyDown={() => {
          updateCount({ type: "ADD_COUNT" })
        }}
        role={"button"}
        tabIndex={0}
      >
        <ArrowLarge />
      </div>
    </div>
  )
}

export default NavArrows
