import React from "react"
import Arrow from "../../Arrow"

const ToggleInfo = ({ infoActive, setInfoActive }) => {
  return (
    <div
      className={infoActive ? "toggle-info active" : "toggle-info"}
      onClick={() => {
        setInfoActive(!infoActive)
      }}
    >
      <Arrow />
    </div>
  )
}

export default ToggleInfo
