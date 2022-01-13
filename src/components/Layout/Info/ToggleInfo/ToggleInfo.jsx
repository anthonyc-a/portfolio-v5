import React from "react"
import Arrow from "../../Icons/Arrow"

const ToggleInfo = ({ infoActive, setInfoActive, setCursorExpand }) => {
  return (
    <div
      className={infoActive ? "toggle-info active" : "toggle-info"}
      onMouseEnter={() => {
        setCursorExpand(true)
      }}
      onMouseLeave={() => {
        setCursorExpand(false)
      }}
      onClick={() => {
        setInfoActive(!infoActive)
      }}
      onKeyDown={() => {
        setInfoActive(!infoActive)
      }}
      role={"button"}
      tabIndex={0}
    >
      <Arrow />
    </div>
  )
}

export default ToggleInfo
