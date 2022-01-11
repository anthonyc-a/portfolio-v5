import React from "react"
import Marker from "./Marker/Marker"
import OpenSite from "./OpenSite/OpenSite"
import ToggleInfo from "./ToggleInfo/ToggleInfo"

const Info = ({ infoActive, setInfoActive }) => {
  return (
    <div className={infoActive ? "info-contain active" : "info-contain"}>
      <div className="info-header">
        <Marker />
        <OpenSite />
        <ToggleInfo infoActive={infoActive} setInfoActive={setInfoActive} />
      </div>
      <div className="info-content">
          
      </div>
    </div>
  )
}

export default Info
