import React from "react"
import ToggleInfo from "./ToggleInfo/ToggleInfo"

const Info = ({ infoActive, setInfoActive }) => {
  return (
    <div className={infoActive ? "info-contain active" : "info-contain"}>
      <div className="info-header">
        <ToggleInfo infoActive={infoActive} setInfoActive={setInfoActive} />
      </div>
    </div>
  )
}

export default Info
