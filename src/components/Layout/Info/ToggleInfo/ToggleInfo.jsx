import React from "react"
import Arrow from "../../Arrow"

const ToggleInfo = ({ infoActive, setInfoActive }) => {
  return (
    <div className="toggle-info"
      onClick={() => {
        setInfoActive(!infoActive)
      }}
    >
      more info
      <Arrow />
    </div>
  )
}

export default ToggleInfo
